"use client";

import { useAppSelector } from "@/hooks/redux.hook";
import { selectAuth } from "@/slices/account/auth.slice";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import useStorage from "@/hooks/storage.hook";
import { INetwork } from "@/db/mongodb/network/network.model";
import { listAllNetworks } from "@/actions/network.action";
import { DEFAULT_CHAIN_ID } from "@/config/env.config";
import { StoreKey } from "@/enums/storage.enum";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/enums/query.enum";
import { IToken } from "@/db/mongodb/token/token.model";
import { networkIDB } from "@/db/indexdb/network.idb";

type NetworkContextType = {
  defaultChain: INetwork;
  networks: INetwork[];
  changeNetwork: (chain: INetwork) => void;
};

const NetworkContext = createContext<NetworkContextType | undefined>(undefined);

export function NetworkProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const [defaultChain, setDefaultChain] = useState<INetwork>();
  const [networks, setNetworks] = useState<INetwork[]>([]);
  const [defaultTokens, setDefaultTokens] = useState<IToken>();
  const { setItem, getItem } = useStorage();
  const { data: externalNetworks } = useQuery({
    queryKey: [QueryKey.Networks],
    queryFn: listAllNetworks,
    enabled: !!isAuthenticated,
  });

  const loadLocalNetworks = useCallback(async () => {
    const localNetworks = await networkIDB.findAll();
    setNetworks(localNetworks);
  }, []);

  useEffect(() => {
    if (isAuthenticated) loadLocalNetworks();
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated || !externalNetworks) return;

    const syncNetworks = async () => {
      const localNetworks = await networkIDB.findAll();
      const localChainIds = new Set(localNetworks.map((net) => net.chainId));

      // Find networks that are in the API but not in IndexedDB
      const missingNetworks = externalNetworks.filter(
        (net) => !localChainIds.has(net.chainId),
      );

      if (missingNetworks.length > 0) {
        await networkIDB.createBatch(missingNetworks);
        setNetworks(await networkIDB.findAll()); // Refresh state with updated local data
      }
    };

    syncNetworks();
  }, [isAuthenticated, externalNetworks]);

  // Set the default chain from IndexedDB or external networks
  useEffect(() => {
    if (!isAuthenticated || networks.length === 0) return;
    let dChain = getItem<INetwork>(StoreKey.DEFAULT_CHAIN);
    if (!dChain)
      dChain = networks.find((c) => c.chainId === parseInt(DEFAULT_CHAIN_ID));

    changeNetwork(dChain);
  }, [isAuthenticated, networks]);

  const changeNetwork = (chain: INetwork) => {
    if (!chain) return;
    setItem(StoreKey.DEFAULT_CHAIN, chain);
    setDefaultChain(chain);
  };

  const contextValue = useMemo(
    () => ({
      defaultChain,
      networks,
      changeNetwork,
    }),
    [defaultChain, networks],
  );

  return (
    <NetworkContext.Provider value={contextValue}>
      {children}
    </NetworkContext.Provider>
  );
}

export function useNetwork() {
  const context = useContext(NetworkContext);
  if (context === undefined) {
    throw new Error("useNetwork must be used within a NetworkProvider");
  }
  return context;
}
