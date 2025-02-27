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
import { listAllNetworks, listTokensByChain } from "@/actions/network.action";
import { DEFAULT_CHAIN_ID } from "@/config/env.config";
import { StoreKey } from "@/enums/storage.enum";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/enums/query.enum";
import { IToken } from "@/db/mongodb/token/token.model";
import { networkRepo } from "@/db/indexdb/repos/network.repo";
import { tokenRepo } from "@/db/indexdb/repos/token.repo";

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
  const [defaultTokens, setDefaultTokens] = useState<IToken[]>([]);
  const { setItem, getItem } = useStorage();

  const { data: externalNetworks } = useQuery({
    queryKey: [QueryKey.Networks],
    queryFn: listAllNetworks,
    enabled: isAuthenticated,
  });

  const { data: externalNetworkTokens } = useQuery({
    queryKey: [QueryKey.NetworkTokens, defaultChain?.chainId],
    queryFn: async () => listTokensByChain(defaultChain?.chainId),
    enabled: isAuthenticated && !!defaultChain?.chainId,
  });

  const loadLocalNetworks = useCallback(async () => {
    const localNetworks = await networkRepo.findAll();
    setNetworks(localNetworks);
  }, []);

  const loadLocalTokens = useCallback(async (chainId: number) => {
    const localTokens = await tokenRepo.findByIndex("chainId", chainId);
    setDefaultTokens(localTokens);
  }, []);

  useEffect(() => {
    if (isAuthenticated) loadLocalNetworks();
  }, [isAuthenticated]);

  useEffect(() => {
    if (defaultChain) loadLocalTokens(defaultChain.chainId); // Fetch tokens whenever default network changes
  }, [defaultChain]);

  useEffect(() => {
    if (!isAuthenticated || !externalNetworks) return;

    const syncNetworks = async () => {
      const localNetworks = await networkRepo.findAll();
      const localChainIds = new Set(localNetworks.map((net) => net.chainId));

      // Find networks that are in the API but not in IndexedDB
      const missingNetworks = externalNetworks.filter(
        (net) => !localChainIds.has(net.chainId),
      );

      if (missingNetworks.length > 0) {
        await networkRepo.createBatch(missingNetworks);
        setNetworks(await networkRepo.findAll()); // Refresh state with updated local data
      }
    };

    syncNetworks();
  }, [isAuthenticated, externalNetworks]);

  // Sync tokens with IndexedDB when the external tokens are fetched
  useEffect(() => {
    const syncTokens = async () => {
      if (!externalNetworkTokens || !defaultChain) return;

      const localTokens = await tokenRepo.findByIndex(
        "chainId",
        defaultChain.chainId,
      );
      const externalTokenAddresses = new Set(
        externalNetworkTokens.map((token) => token.address),
      );

      // Find tokens that are in the external source but not in IndexedDB
      const missingTokens = externalNetworkTokens.filter(
        (token) =>
          !localTokens.some(
            (localToken) => localToken.address === token.address,
          ),
      );

      // Find tokens that are in IndexedDB but not in the external source (to remove obsolete ones)
      const obsoleteTokens = localTokens.filter(
        (localToken) => !externalTokenAddresses.has(localToken.address),
      );

      // Add missing tokens to IndexedDB
      if (missingTokens.length > 0) {
        await tokenRepo.createBatch(missingTokens);
      }

      // Optionally, you could remove obsolete tokens here if needed.
      // await tokenRepo.removeBatch(obsoleteTokens);

      // Update the local tokens state
      setDefaultTokens(
        await tokenRepo.findByIndex("chainId", defaultChain.chainId),
      );
    };

    syncTokens();
  }, [externalNetworkTokens, defaultChain]);

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
      defaultTokens,
      networks,
      changeNetwork,
    }),
    [defaultChain, networks, defaultTokens],
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
