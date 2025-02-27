"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useAppSelector } from "@/hooks/redux.hook";
import { selectAuth } from "@/slices/account/auth.slice";
import useStorage from "@/hooks/storage.hook";
import { StoreKey } from "@/enums/storage.enum";
import {
  decodeAccountCredentials,
  encodeAccountCredentials,
} from "@/actions/auth.action";
import {
  toWebAuthnAccount,
  type WebAuthnAccount,
} from "viem/account-abstraction";
import { AccountCredentials } from "@/types/webauthn.type";
import { publicClient } from "@/clients/viem.client";
import { toDexaSmartAccount } from "@/account/account/toDexaSmartAccount";
import { ToDexaSmartAccountReturnType } from "@/account/types/toDexaSmartAccount.type";

interface AccountContextType {
  account: ToDexaSmartAccountReturnType | null;
  owner: WebAuthnAccount | null;
  disconnect: () => void;
  setCredentials: (credentials: AccountCredentials) => Promise<void>;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const [owner, setOwner] = useState<WebAuthnAccount | null>(null);
  const [account, setAccount] = useState<ToDexaSmartAccountReturnType | null>(
    null
  );
  const [credentials, setCredentials] = useState<
    AccountCredentials | undefined
  >();
  const { getItem, removeItem, setItem } = useStorage();

  const getSmartAccount = useCallback(
    async (
      ownerAccount: WebAuthnAccount
    ): Promise<ToDexaSmartAccountReturnType | undefined> => {
      console.log(account);
      if (account) return account; // Return existing account if available
      try {
        const smartAccount = await toDexaSmartAccount({
          //@ts-ignore
          client: publicClient,
          owner: ownerAccount,
        });
        console.log(smartAccount);
        setAccount(smartAccount);
        return smartAccount;
      } catch (error) {
        console.error("Error getting smart account:", error);
      }
    },
    [account]
  );

  const getSmartAccountOwner = useCallback(
    (creds: AccountCredentials): WebAuthnAccount => {
      return toWebAuthnAccount({
        credential: {
          id: creds.id,
          publicKey: creds.publicKey,
        },
        rpId: creds.rpId,
      });
    },
    []
  );

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

  const getAccountCredentials = useCallback(async (): Promise<
    AccountCredentials | undefined
  > => {
    if (credentials) return credentials; // Return existing credentials if available
    try {
      const encodedCredentials = await getItem(StoreKey.WALLET_CREDENTIAL);
      if (encodedCredentials) {
        const decodedCredentials = await decodeAccountCredentials(
          encodedCredentials
        );
        setCredentials(decodedCredentials);
        return decodedCredentials;
      }
    } catch (error) {
      console.error("Error getting account credentials:", error);
    }
  }, [getItem, credentials]);

  const initializeAccount = useCallback(async () => {
    if (!isAuthenticated || owner) return; // Don't initialize if not authenticated or already initialized

    try {
      const creds = await getAccountCredentials();
      if (creds) {
        const ownerAccount = getSmartAccountOwner(creds);
        setOwner(ownerAccount);
        await getSmartAccount(ownerAccount);
      }
    } catch (error) {
      console.error("Error initializing account:", error);
    }
  }, [
    isAuthenticated,
    owner,
    getAccountCredentials,
    getSmartAccountOwner,
    getSmartAccount,
  ]);

  useEffect(() => {
    initializeAccount();
  }, [initializeAccount]);

  const disconnect = useCallback(() => {
    setAccount(null);
    setOwner(null);
    setCredentials(undefined);
    removeItem(StoreKey.WALLET_CREDENTIAL);
  }, [removeItem]);

  const setNewCredentials = useCallback(
    async (newCredentials: AccountCredentials) => {
      await initAccountCredentials(newCredentials);
      const ownerAccount = getSmartAccountOwner(newCredentials);
      setOwner(ownerAccount);
      await getSmartAccount(ownerAccount);
    },
    [initAccountCredentials, getSmartAccountOwner, getSmartAccount]
  );

  const contextValue = useMemo(
    () => ({
      account,
      owner,
      disconnect,
      setCredentials: setNewCredentials,
    }),
    [account, owner, disconnect, setNewCredentials]
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
