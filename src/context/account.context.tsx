"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useEffect,
  useState,
} from "react";
import useStorage from "@/hooks/storage.hook";
import { StoreKey } from "@/enums/storage.enum";
import { AccountCredentials } from "@/types/webauthn.type";
import { HDAccount, Hex, PrivateKeyAccount } from "viem";
import {
  decryptWalletData,
  generateMasterSeed,
  makeNewWallet,
} from "@/actions/wallet.action";
import { SavedWallet } from "@/types/wallet.type";
import { privateKeyToAccount, HDKey, hdKeyToAccount } from "viem/accounts";
import { type ToCoinbaseSmartAccountReturnType } from "viem/account-abstraction";
import { isoUint8Array } from "@simplewebauthn/server/helpers";
import { accountFromWallet } from "@/lib/account";
import { useAuth } from "./auth.context";

interface AccountContextType {
  setCredentials: (credentials: AccountCredentials) => Promise<void>;
  wallets: SavedWallet[];
  activeWallet?: SavedWallet;
  addAccount: () => Promise<void>;
  importAccount: (key: string) => Promise<void>;
  activateAccount: (wallet: SavedWallet) => Promise<void>;
  activeAccount: ToCoinbaseSmartAccountReturnType | HDAccount | PrivateKeyAccount;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [wallets, setWallets] = useState<SavedWallet[]>([]);
  const [activeWallet, setActiveWallet] = useState<SavedWallet>();
  const [activeAccount, setActiveAccount] = useState<
    ToCoinbaseSmartAccountReturnType | HDAccount | PrivateKeyAccount
  >();
  const [credentialsTimestamp, setCredentialsTimestamp] = useState<number>(0);
  const { user, isAuthenticated } = useAuth();
  const { getItem, setItem } = useStorage();

  useEffect(() => {
    const loadWallets = async () => {
      const savedWallets: Record<string, SavedWallet[]> =
        getItem(StoreKey.WALLETS) || {};

      if (savedWallets && savedWallets[user.id]) {
        const encryptedWallets = savedWallets[user.id];
        setWallets(encryptedWallets);

        // Get active wallet
        const lastUsedWallet = encryptedWallets.sort(
          (a, b) =>
            new Date(b.lastActiveAt).getTime() -
            new Date(a.lastActiveAt).getTime(),
        )[0];
        setActiveWallet(lastUsedWallet);

        const active = await accountFromWallet(lastUsedWallet);
        setActiveAccount(active);
      }
    };

    if (isAuthenticated && user) loadWallets();
  }, [isAuthenticated, user, credentialsTimestamp]);

  const setNewCredentials = useCallback(
    async (newCredentials: AccountCredentials) => {
      const { id, publicKey: pubKey, rpId, user } = newCredentials;
      const userId = user.id;
      const address = user.address as Hex;

      const wallets: Record<string, SavedWallet[]> =
        getItem(StoreKey.WALLETS) || {};

      const initMakeSW = async () => {
        return await makeNewWallet({
          name: "Smart Account",
          address,
          cred: { id, pubKey, rpId },
          master: true,
          index: 0,
          type: "smart-wallet",
        });
      };

      if (wallets && wallets[userId]) {
        const encryptedWallets = wallets[userId];
        const dSmartAccount = encryptedWallets.find(
          (w) => w.address.toLowerCase() == address.toLowerCase(),
        );
        if (!dSmartAccount) {
          const encryptWallet = await initMakeSW();
          encryptedWallets.push(encryptWallet);
          setItem(StoreKey.WALLETS, encryptedWallets);
          appendWallet(encryptWallet);
        }
      } else {
        const encryptWallet = await initMakeSW();
        wallets[userId] = [];
        wallets[userId].push(encryptWallet);
        setItem(StoreKey.WALLETS, wallets);
        appendWallet(encryptWallet);
      }
    },
    [getItem, setItem],
  );

  const appendWallet = useCallback(
    (wallet: SavedWallet) => {
      setWallets((prev) => [...prev, wallet]);
      setCredentialsTimestamp(Date.now());
    },
    [setWallets],
  );

  const addAccount = useCallback(async () => {
    const masterWallet = wallets.find((w) => w.master);
    const deFiWallets = wallets.filter((w) => w.type == "defi-wallet");
    if (masterWallet) {
      const wallet = await decryptWalletData(masterWallet);

      const base64Seed = await generateMasterSeed(wallet.cred);
      const masterSeed = isoUint8Array.fromUTF8String(base64Seed);
      const hdKey = HDKey.fromMasterSeed(masterSeed);
      const accountIndex = deFiWallets.length;
      const account = hdKeyToAccount(hdKey, {
        accountIndex,
      });

      const walletRecords: Record<string, SavedWallet[]> =
        getItem(StoreKey.WALLETS) || {};
      const encryptedWallets = walletRecords[user.id];
      const findAccount = encryptedWallets.find(
        (e) => e.address == account.address,
      );
      if (!findAccount) {
        const nameSuffix = accountIndex > 0 ? ` ${accountIndex}` : "";
        const newWallet = await makeNewWallet({
          name: "DeFi Wallet" + nameSuffix,
          address: account.address,
          derivedFrom: {
            id: wallet.cred.id,
            pubKey: wallet.cred.pubKey,
            rpId: wallet.cred.rpId,
          },
          master: false,
          index: accountIndex,
          type: "defi-wallet",
        });
        walletRecords[user.id].push(newWallet);
        setItem(StoreKey.WALLETS, walletRecords);
        appendWallet(newWallet);
      }
    }
  }, [wallets, user]);

  const importAccount = useCallback(
    async (key: string) => {
      let privateKey = key.trim();
      privateKey = privateKey.startsWith("0x") ? privateKey : `0x${privateKey}`;

      const importedWallets = wallets.filter((w) => w.type == "imported");
      const account = privateKeyToAccount(privateKey as Hex);
      const accountIndex = importedWallets.length;

      const walletRecords: Record<string, SavedWallet[]> =
        getItem(StoreKey.WALLETS) || {};
      const encryptedWallets = walletRecords[user.id];
      const findAccount = encryptedWallets.find(
        (e) => e.address == account.address,
      );
      if (!findAccount) {
        const nameSuffix = accountIndex > 0 ? ` ${accountIndex}` : "";
        const newWallet = await makeNewWallet({
          name: "Imported Wallet" + nameSuffix,
          address: account.address,
          privateKey,
          master: false,
          index: accountIndex,
          type: "imported",
        });
        walletRecords[user.id].push(newWallet);
        setItem(StoreKey.WALLETS, walletRecords);
        appendWallet(newWallet);
      }
    },
    [wallets, user],
  );

  const activateAccount = useCallback(
    async (wallet: SavedWallet) => {
      setActiveWallet(wallet);

      const walletRecords: Record<string, SavedWallet[]> =
        getItem(StoreKey.WALLETS) || {};
      walletRecords[user.id].map((w) => {
        if (w.address == wallet.address) {
          w.lastActiveAt = new Date();
        }
      });
      setItem(StoreKey.WALLETS, walletRecords);

      const account = await accountFromWallet(wallet);
      setActiveAccount(account);
    },
    [getItem, user, setItem],
  );

  const contextValue = useMemo(
    () => ({
      setCredentials: setNewCredentials,
      wallets,
      addAccount,
      activeWallet,
      activateAccount,
      activeAccount,
      importAccount,
    }),
    [
      setNewCredentials,
      wallets,
      addAccount,
      activeWallet,
      activateAccount,
      activeAccount,
      importAccount,
    ],
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
