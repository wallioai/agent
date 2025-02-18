"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import useStorage from "@/hooks/storage.hook";
import { StoreKey } from "@/enums/storage.enum";
import {
  encodeAccountCredentials,
} from "@/actions/auth.action";
import { AccountCredentials } from "@/types/webauthn.type";

interface AccountContextType {
  disconnect: () => void;
  setCredentials: (credentials: AccountCredentials) => Promise<void>;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const [credentials, setCredentials] = useState<
    AccountCredentials | undefined
  >();
  const { getItem, removeItem, setItem } = useStorage();

  const initAccountCredentials = useCallback(
    async (newCredentials: AccountCredentials) => {
      try {
        const encodedCredentials = await encodeAccountCredentials(
          newCredentials
        );
        setItem(StoreKey.WALLET_CREDENTIAL, encodedCredentials);
        setCredentials(newCredentials);
        return newCredentials;
      } catch (error) {
        console.error("Error setting account credentials:", error);
        throw error;
      }
    },
    [setItem]
  );

  const disconnect = useCallback(() => {

    setCredentials(undefined);
    removeItem(StoreKey.WALLET_CREDENTIAL);
  }, [removeItem]);

  const setNewCredentials = useCallback(
    async (newCredentials: AccountCredentials) => {
      await initAccountCredentials(newCredentials);
    },
    [initAccountCredentials]
  );

  const contextValue = useMemo(
    () => ({

      disconnect,
      setCredentials: setNewCredentials,
    }),
    [ disconnect, setNewCredentials]
  );

  return (
    <AccountContext.Provider value={contextValue}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useAccount must be used within an AccountProvider");
  }
  return context;
};
