"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNetwork } from "./network.context";
import { Network } from "@/db/repos/network.repo";
import { Token } from "@/db/repos/token.repo";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/enums/query.enum";
import { listTokensByChain } from "@/actions/network.action";
import {
  erc20Abi,
  formatEther,
  formatUnits,
  Hex,
  isAddress,
  parseUnits,
  zeroAddress,
} from "viem";
import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
import { bridgeSchemaResolver } from "@/schemas/bridge.schema";
import { LRUCache } from "lru-cache";
import { useAuth } from "./auth.context";
import { useAccount } from "./account.context";
import { accountFromWallet } from "@/lib/account";
import { getChain } from "wallioai-kit";
import { publicClient } from "@/clients/viem.client";
import { createOrder, fetchSupportedNetworks } from "@/actions/debridge.action";

type BridgeContextType = {
  networks: Network[];
  source: BridgeInfo;
  destination: BridgeInfo;
  updateSource: (value: Partial<BridgeInfo>) => void;
  updateDestination: (value: Partial<BridgeInfo>) => void;
  switchForm: () => void;
  isFormValid: boolean;
  toAnother: boolean;
  toggleToAnother: (value: boolean) => void;
  sourceTokens: Token[];
  destinationTokens: Token[];
  isPreparing: boolean;
  refreshTx: () => Promise<void>;
  updateDestinationAddress: (value: string) => void;
};

export type BridgeInfo = {
  network?: Network;
  token?: Token;
  amount?: string;
  usdValue?: string;
  recipient?: string;
  balance?: string;
};

// Define form field mappings for source and destination
const FORM_MAPPINGS = {
  source: {
    token: { attr: "srcTokenAddress", value: "address" },
    network: { attr: "srcChainId", value: "chainId" },
    amount: { attr: "srcAmount", value: "amount" },
  },
  destination: {
    token: { attr: "dstTokenAddress", value: "address" },
    network: { attr: "dstChainId", value: "chainId" },
    recipient: { attr: "recipient", value: "recipient" },
    amount: { attr: "dstAmount", value: "amount" },
  },
};

const BridgeContext = createContext<BridgeContextType | undefined>(undefined);

export function BridgeProvider({ children }: { children: React.ReactNode }) {
  const {
    setValue,
    formState: { isValid },
  } = useForm({
    resolver: bridgeSchemaResolver,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const { activeWallet } = useAccount();
  const { networks, defaultChain, defaultTokens } = useNetwork();
  const [chainTokens, setChainTokens] = useState<Record<number, Token[]>>({});
  const [isPreparing, setIsPreparing] = useState<boolean>(false);
  const [decimalMap, setDecimalMap] = useState<Record<Hex, number>>({});
  const [toAnother, setToAnother] = useState(false);
  const [source, setSource] = useState<BridgeInfo>({
    network: defaultChain,
    token: defaultTokens[0],
    amount: "",
    balance: "0",
    usdValue: "",
  });
  const [destination, setDestination] = useState<BridgeInfo>({
    amount: "",
    usdValue: "",
  });
  const isSameNetwork =
    destination?.network?.chainId == source?.network?.chainId;

  // Helper function to find default token (native or first in list)
  const findDefaultToken = (tokens: Token[]): Token | undefined => {
    if (!tokens || tokens.length === 0) return undefined;
    return tokens.find((t) => t.address === zeroAddress) || tokens[0];
  };

  // Generic function to fetch tokens for a chain
  const useTokensForChain = (chainId?: number) => {
    return useQuery({
      queryKey: [QueryKey.NetworkTokens, chainId],
      queryFn: async () => listTokensByChain(chainId),
      enabled: !!chainId,
    });
  };

  // Fetch tokens for source and destination chains
  const { data: sourceTokensRes } = useTokensForChain(source?.network?.chainId);
  const { data: destinationTokensRes } = useTokensForChain(
    destination?.network?.chainId,
  );

  // Update form values when source or destination changes
  const updateFormValues = useCallback(
    (type: "source" | "destination", value: Partial<BridgeInfo>) => {
      Object.keys(value).forEach((key) => {
        const mapping = FORM_MAPPINGS[type][key];
        if (mapping && value[key]) {
          const formValue =
            typeof value[key] === "object" && value[key] !== null
              ? value[key][mapping.value]
              : value[key];
          setValue(mapping.attr, formValue, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }
      });
    },
    [setValue],
  );

  // Generic function to select appropriate token for a network
  const selectTokenForNetwork = useCallback(
    (
      networkTokens: Token[],
      otherToken?: Token,
      onSameNetwork = false,
    ): Token | undefined => {
      if (!networkTokens || networkTokens.length === 0) return undefined;

      if (onSameNetwork && otherToken) {
        const availableTokens = networkTokens.filter(
          (t) => t.address !== otherToken.address,
        );
        return findDefaultToken(availableTokens);
      }

      return findDefaultToken(networkTokens);
    },
    [findDefaultToken],
  );

  // Update source state and form values
  const updateSource = useCallback(
    (value: Partial<BridgeInfo>) => {
      setSource((prev) => ({ ...prev, ...value }));
      updateFormValues("source", value);
    },
    [updateFormValues],
  );

  // Update destination state and form values
  const updateDestination = useCallback(
    (value: Partial<BridgeInfo>) => {
      setDestination((prev) => ({ ...prev, ...value }));
      updateFormValues("destination", value);
    },
    [updateFormValues],
  );

  // Process tokens for a chain and update state
  const processChainTokens = useCallback(
    (chainId: number, tokens: Token[]) => {
      // Update token cache
      setChainTokens((prev) => ({ ...prev, [chainId]: tokens }));

      // Check if this is the source chain
      const isSourceChain = source?.network?.chainId === chainId;
      // Check if this is the destination chain
      const isDestinationChain = destination?.network?.chainId === chainId;

      if (isSourceChain) {
        const needsTokenUpdate =
          !source.token || source.token.chainId !== chainId;

        if (needsTokenUpdate) {
          const tokenForSource = selectTokenForNetwork(
            tokens,
            destination?.token,
            isSameNetwork,
          );
          updateSource({ token: tokenForSource });
        }
      }

      if (isDestinationChain) {
        const needsTokenUpdate =
          !destination.token || destination.token.chainId !== chainId;

        if (needsTokenUpdate) {
          const tokenForDestination = selectTokenForNetwork(
            tokens,
            source?.token,
            isSameNetwork,
          );
          updateDestination({ token: tokenForDestination });
        }
      }
    },
    [
      source,
      destination,
      isSameNetwork,
      selectTokenForNetwork,
      updateSource,
      updateDestination,
    ],
  );

  const prepareTransaction = useCallback(async () => {
    const isNative = source?.token?.address == zeroAddress;
    const getDecimal = decimalMap[source.token.address] || null;
    let decimal: number = isNative ? 18 : getDecimal;
    setIsPreparing(true);

    if (!isNative && !getDecimal) {
      const chain = getChain(source.network.chainId.toString()) as any;
      decimal = await publicClient(chain).readContract({
        abi: erc20Abi,
        address: source.token.address as Hex,
        functionName: "decimals",
      });
      // Update token cache
      setDecimalMap((prev) => ({ ...prev, [source.token.address]: decimal }));
    }

    const { sourceIn, destinationOut, amountOut } = await createOrder(
      source,
      destination,
      activeWallet.address,
    );

    updateDestination({
      amount: parseFloat(amountOut).toFixed(6),
      usdValue: destinationOut.recommendedApproximateUsdValue.toString(),
    });
    updateSource({
      usdValue: sourceIn.originApproximateUsdValue.toString(),
    });
    setIsPreparing(false);
  }, [source, destination, decimalMap]);

  useEffect(() => {
    if (destinationTokensRes?.data && destination?.network) {
      processChainTokens(
        destination.network.chainId,
        destinationTokensRes.data,
      );
    }
  }, [destinationTokensRes, destination?.network]);

  useEffect(() => {
    if (sourceTokensRes?.data && source?.network) {
      processChainTokens(source.network.chainId, sourceTokensRes.data);
    }
  }, [sourceTokensRes, source?.network]);

  useEffect(() => {
    if (defaultChain && defaultTokens) {
      updateSource({ network: defaultChain, token: defaultTokens[0] });

      // Initialize destination with a different network if available
      const destNetwork =
        networks.find((n) => n.chainId !== defaultChain.chainId) ||
        defaultChain;
      updateDestination({ network: destNetwork });
    }
  }, [defaultChain, defaultTokens]);

  useEffect(() => {
    const init = async () => {
      const supportedNetworks = await fetchSupportedNetworks();
    };
    init();
  }, []);

  useEffect(() => {
    if (activeWallet) {
      updateDestination({ recipient: activeWallet.address });
    }
  }, [activeWallet]);

  useEffect(() => {
    if (source.amount && parseFloat(source.amount) > 0) {
      setTimeout(() => {
        prepareTransaction();
      }, 1000);
    }
  }, [source.amount]);

  useEffect(() => {
    let intervalId;
    if (
      source.amount &&
      parseFloat(source.amount) > 0 &&
      source.token &&
      destination.token &&
      destination.amount
    ) {
      intervalId = setInterval(() => {
        prepareTransaction();
      }, 30000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [source.amount, source.token, destination.token, destination.amount]);

  const sourceTokens = useMemo(() => {
    if (!source.network) return [];

    const allTokensForChain = chainTokens[source?.network?.chainId] || [];
    if (isSameNetwork && destination.token) {
      return allTokensForChain.filter(
        (t) => t.address !== destination.token?.address,
      );
    }
    return allTokensForChain;
  }, [chainTokens, source.network, destination.token, isSameNetwork]);

  const destinationTokens = useMemo(() => {
    if (!destination.network) return [];

    const allTokensForChain = chainTokens[destination?.network?.chainId] || [];
    if (isSameNetwork && source.token) {
      return allTokensForChain.filter(
        (t) => t.address !== source.token?.address,
      );
    }
    return allTokensForChain;
  }, [chainTokens, source.token, destination.network, isSameNetwork]);

  useEffect(() => {
    const fetchBalance = async () => {
      const isNative = source.token.address == zeroAddress;
      const chain = getChain(source.network.chainId.toString()) as any;

      let balance: bigint;
      if (isNative) {
        balance = (await publicClient(chain).getBalance({
          address: activeWallet.address as Hex,
        })) as bigint;
      } else {
        balance = await publicClient(chain).readContract({
          abi: erc20Abi,
          address: source.token.address as Hex,
          functionName: "balanceOf",
          args: [activeWallet.address as Hex],
        });
      }
      const mainBalance = formatEther(balance);
      updateSource({ balance: mainBalance });
    };

    if (source.token && defaultChain && activeWallet) {
      fetchBalance();
    }
  }, [source.token, source.network, defaultChain, activeWallet]);

  const switchForm = useCallback(() => {
    const src = source;
    const dst = destination;
    setSource(dst);
    setDestination(src);
  }, [source, destination]);

  const toggleToAnother = useCallback(
    (value: boolean) => {
      if (!value) {
        updateDestination({ recipient: activeWallet.address });
      }
      setToAnother(value);
    },
    [setToAnother, activeWallet],
  );

  const updateDestinationAddress = useCallback(
    (value: string) => {
      const isValid = isAddress(value);
      if (isValid) {
        updateDestination({ recipient: value });
      }
    },
    [updateDestination],
  );

  const contextValue = useMemo(
    () => ({
      networks,
      source,
      destination,
      updateDestination,
      updateSource,
      switchForm,
      isFormValid: isValid,
      toAnother,
      toggleToAnother,
      sourceTokens,
      destinationTokens,
      isPreparing,
      refreshTx: prepareTransaction,
      updateDestinationAddress,
    }),
    [
      networks,
      source,
      destination,
      updateDestination,
      updateSource,
      defaultChain,
      switchForm,
      isValid,
      toAnother,
      toggleToAnother,
      sourceTokens,
      destinationTokens,
      isPreparing,
      prepareTransaction,
      updateDestinationAddress,
    ],
  );

  return (
    <BridgeContext.Provider value={contextValue}>
      {children}
    </BridgeContext.Provider>
  );
}

export function useBridge() {
  const context = useContext(BridgeContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a BridgeProvider");
  }
  return context;
}
