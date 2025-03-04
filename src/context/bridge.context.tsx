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
import { useForm } from "react-hook-form";
import { bridgeSchemaResolver } from "@/schemas/bridge.schema";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import {
  setSourceNetwork,
  setDestinationNetwork,
  setSourceToken,
  setDestinationToken,
  switchNetworks,
  updateSourceDetails,
  updateDestinationDetails,
  setTokensForChain,
  selectBridge,
  selectSourceTokenOptions,
  selectDestinationTokenOptions,
  selectIsSameNetwork,
} from "@/slices/bridge/bridge.slice";

type BridgeContextType = {
  networks: Network[];
  sourceNetwork?: Network;
  destinationNetwork?: Network;
  sourceToken?: Token;
  destinationToken?: Token;
  sourceTokens: Token[];
  destinationTokens: Token[];
  sourceAmount: number;
  sourceUsdValue: number;
  sourceBalance: number;
  destinationAmount: number;
  destinationUsdValue: number;
  destinationBalance: number;
  isSameNetwork: boolean;
  changeSourceNetwork: (network: Network) => void;
  changeDestinationNetwork: (network: Network) => void;
  changeSourceToken: (token: Token) => void;
  changeDestinationToken: (token: Token) => void;
  updateSourceAmountDetails: (details: {
    amount?: number;
    usdValue?: number;
    balance?: number;
  }) => void;
  updateDestinationAmountDetails: (details: {
    amount?: number;
    usdValue?: number;
    balance?: number;
  }) => void;
  switchForm: () => void;
  isFormValid: boolean;
};

const srcDataKeys = {
  token: { attr: "srcTokenAddress", value: "address" },
  network: { attr: "srcChainId", value: "chainId" },
};
const dstDataKeys = {
  token: { attr: "dstTokenAddress", value: "address" },
  network: { attr: "dstChainId", value: "chainId" },
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

  const [init, setInit] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  // Get state from redux
  const bridge = useAppSelector(selectBridge);
  const sourceTokenOptions = useAppSelector(selectSourceTokenOptions);
  const destinationTokenOptions = useAppSelector(selectDestinationTokenOptions);
  const isSameNetwork = useAppSelector(selectIsSameNetwork);

  const { networks, defaultChain, defaultTokens } = useNetwork();

  // Fetch tokens for source chain
  const { data: sourceTokensResponse } = useQuery({
    queryKey: [QueryKey.NetworkTokens, bridge.sourceNetwork?.chainId],
    queryFn: async () => listTokensByChain(bridge.sourceNetwork?.chainId),
    enabled: !!bridge.sourceNetwork?.chainId,
  });

  // Fetch tokens for destination chain
  const { data: destinationTokensResponse } = useQuery({
    queryKey: [QueryKey.NetworkTokens, bridge.destinationNetwork?.chainId],
    queryFn: async () => listTokensByChain(bridge.destinationNetwork?.chainId),
    enabled: !!bridge.destinationNetwork?.chainId,
  });

  // Update tokens in redux when fetched for source chain
  useEffect(() => {
    if (sourceTokensResponse?.data && bridge.sourceNetwork) {
      dispatch(
        setTokensForChain({
          chainId: bridge.sourceNetwork.chainId,
          tokens: sourceTokensResponse.data,
        }),
      );
    }
  }, [sourceTokensResponse?.data, bridge.sourceNetwork, dispatch]);

  // Update tokens in redux when fetched for destination chain
  useEffect(() => {
    if (destinationTokensResponse?.data && bridge.destinationNetwork) {
      dispatch(
        setTokensForChain({
          chainId: bridge.destinationNetwork.chainId,
          tokens: destinationTokensResponse.data,
        }),
      );
    }
  }, [destinationTokensResponse?.data, bridge.destinationNetwork, dispatch]);

  // Initialize with default values
  useEffect(() => {
    if (defaultChain && defaultTokens && !init) {
      // Set source network and token
      dispatch(setSourceNetwork(defaultChain));

      if (defaultTokens.length > 0) {
        dispatch(setSourceToken(defaultTokens[0]));
      }

      // Initialize destination with a different network if available
      const destNetwork =
        networks.find((n) => n.chainId !== defaultChain.chainId) ||
        defaultChain;
      console.log(destNetwork);
      dispatch(setDestinationNetwork(destNetwork));

      setInit(true);

      // Update form values
      updateFormValues("network", defaultChain, srcDataKeys);
      if (defaultTokens.length > 0) {
        updateFormValues("token", defaultTokens[0], srcDataKeys);
      }
      updateFormValues("network", destNetwork, dstDataKeys);
    }
  }, [defaultChain, defaultTokens, networks, init, dispatch]);

  // Helper function to update form values
  const updateFormValues = (
    type: "network" | "token",
    value: Network | Token,
    keys: typeof srcDataKeys | typeof dstDataKeys,
  ) => {
    const formKey = keys[type];
    if (formKey) {
      const attribute = formKey.attr;
      const valueKey = formKey.value;
      setValue(attribute, value[valueKey], {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  };

  // Handler for changing source network
  const changeSourceNetwork = useCallback(
    (network: Network) => {
      dispatch(setSourceNetwork(network));
      updateFormValues("network", network, srcDataKeys);
    },
    [dispatch],
  );

  // Handler for changing destination network
  const changeDestinationNetwork = useCallback(
    (network: Network) => {
      dispatch(setDestinationNetwork(network));
      updateFormValues("network", network, dstDataKeys);
    },
    [dispatch],
  );

  // Handler for changing source token
  const changeSourceToken = useCallback(
    (token: Token) => {
      dispatch(setSourceToken(token));
      updateFormValues("token", token, srcDataKeys);
    },
    [dispatch],
  );

  // Handler for changing destination token
  const changeDestinationToken = useCallback(
    (token: Token) => {
      dispatch(setDestinationToken(token));
      updateFormValues("token", token, dstDataKeys);
    },
    [dispatch],
  );

  // Handler for updating source amount details
  const updateSourceAmountDetails = useCallback(
    (details: { amount?: number; usdValue?: number; balance?: number }) => {
      dispatch(updateSourceDetails(details));
    },
    [dispatch],
  );

  // Handler for updating destination amount details
  const updateDestinationAmountDetails = useCallback(
    (details: { amount?: number; usdValue?: number; balance?: number }) => {
      dispatch(updateDestinationDetails(details));
    },
    [dispatch],
  );

  // Handler for switching source and destination
  const switchForm = useCallback(() => {
    dispatch(switchNetworks());

    // Update form values after switching
    if (bridge.destinationNetwork) {
      updateFormValues("network", bridge.destinationNetwork, srcDataKeys);
    }
    if (bridge.sourceNetwork) {
      updateFormValues("network", bridge.sourceNetwork, dstDataKeys);
    }
    if (bridge.destinationToken) {
      updateFormValues("token", bridge.destinationToken, srcDataKeys);
    }
    if (bridge.sourceToken) {
      updateFormValues("token", bridge.sourceToken, dstDataKeys);
    }
  }, [bridge, dispatch]);

  const contextValue = useMemo(
    () => ({
      networks,
      sourceNetwork: bridge.sourceNetwork,
      destinationNetwork: bridge.destinationNetwork,
      sourceToken: bridge.sourceToken,
      destinationToken: bridge.destinationToken,
      sourceTokens: sourceTokenOptions,
      destinationTokens: destinationTokenOptions,
      sourceAmount: bridge.sourceAmount,
      sourceUsdValue: bridge.sourceUsdValue,
      sourceBalance: bridge.sourceBalance,
      destinationAmount: bridge.destinationAmount,
      destinationUsdValue: bridge.destinationUsdValue,
      destinationBalance: bridge.destinationBalance,
      isSameNetwork,
      changeSourceNetwork,
      changeDestinationNetwork,
      changeSourceToken,
      changeDestinationToken,
      updateSourceAmountDetails,
      updateDestinationAmountDetails,
      switchForm,
      isFormValid: isValid,
    }),
    [
      networks,
      bridge,
      sourceTokenOptions,
      destinationTokenOptions,
      isSameNetwork,
      changeSourceNetwork,
      changeDestinationNetwork,
      changeSourceToken,
      changeDestinationToken,
      updateSourceAmountDetails,
      updateDestinationAmountDetails,
      switchForm,
      isValid,
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
    throw new Error("useBridge must be used within a BridgeProvider");
  }
  return context;
}

// For backwards compatibility, keep BridgeInfo type
export type BridgeInfo = {
  network?: Network;
  token?: Token;
  amount?: number;
  usdValue?: number;
  balance?: number;
  tokens?: Token[];
};
