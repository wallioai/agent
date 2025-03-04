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
import { zeroAddress } from "viem";
import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
import { bridgeSchemaResolver } from "@/schemas/bridge.schema";

type BridgeContextType = {
  networks: Network[];
  source: BridgeInfo;
  destination: BridgeInfo;
  updateSource: (value: Partial<BridgeInfo>) => void;
  updateDestination: (value: Partial<BridgeInfo>) => void;
  switchForm: () => void;
  isFormValid: boolean;
};

export type BridgeInfo = {
  network?: Network;
  token?: Token;
  amount?: number;
  usdValue?: number;
  balance?: number;
  tokens?: Token[];
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
  const { networks, defaultChain, defaultTokens } = useNetwork();
  const [source, setSource] = useState<BridgeInfo>({
    network: defaultChain,
    token: defaultTokens[0],
    tokens: [],
    amount: 0,
    usdValue: 0,
    balance: 0,
  });
  const [destination, setDestination] = useState<BridgeInfo>({
    tokens: [],
    amount: 0,
    usdValue: 0,
    balance: 0,
  });
  const isSameNetwork =
    destination?.network?.chainId == source?.network?.chainId;

  const { data: sourceTokens } = useQuery({
    queryKey: [QueryKey.NetworkTokens, source?.network?.chainId],
    queryFn: async () => listTokensByChain(source?.network?.chainId),
    enabled: !!source?.network?.chainId,
  });

  const { data: destinationTokens } = useQuery({
    queryKey: [QueryKey.NetworkTokens, destination?.network?.chainId],
    queryFn: async () => listTokensByChain(destination?.network?.chainId),
    enabled: !!destination?.network?.chainId,
  });

  useEffect(() => {
    if (destinationTokens && destinationTokens.data) {
      const tokens = destinationTokens.data.filter(
        (t) => t.address != source?.token?.address,
      );
      updateDestination({
        tokens,
        token: tokens[0],
      });
    }
  }, [destinationTokens]);

  useEffect(() => {
    if (sourceTokens && sourceTokens.data) {
      const tokens = sourceTokens.data.filter(
        (t) => t.address != destination?.token?.address,
      );
      updateSource({ tokens, token: tokens[0] });
    }
  }, [sourceTokens]);

  useEffect(() => {
    if (defaultChain && defaultTokens) {
      updateSource({ network: defaultChain, token: defaultTokens[0] });
    }
  }, [defaultChain, defaultTokens]);

  const updateSource = (value: Partial<BridgeInfo>) => {
    setSource((prevSource) => ({
      ...prevSource,
      ...value,
    }));
    Object.keys(value).map((v) => {
      const formKey = srcDataKeys[v];
      if (formKey && value[v]) {
        const attribute = formKey["attr"];
        const valueKey = formKey["value"];
        setValue(attribute, value[v][valueKey], {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    });
  };

  const updateDestination = (value: Partial<BridgeInfo>) => {
    setDestination((prevDestination) => ({
      ...prevDestination,
      ...value,
    }));
    Object.keys(value).map((v) => {
      const formKey = dstDataKeys[v];
      if (formKey && value[v]) {
        const attribute = formKey["attr"];
        const valueKey = formKey["value"];
        setValue(attribute, value[v][valueKey], {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    });
  };

  const switchForm = useCallback(() => {
    const src = source;
    const dst = destination;
    setSource(dst);
    setDestination(src);
  }, [source, destination]);

  const contextValue = useMemo(
    () => ({
      networks,
      source,
      destination,
      updateDestination,
      updateSource,
      switchForm,
      isFormValid: isValid,
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
