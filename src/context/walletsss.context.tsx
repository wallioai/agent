"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  Account,
  Address,
  PrivateKeyAccount,
  createWalletClient,
  custom,
  generatePrivateKey,
  hdKeyToAccount,
  privateKeyToAccount,
} from "viem/accounts";
import { createPublicClient, http, parseEther } from "viem";
import { sepolia } from "viem/chains";

// Define types
export type Wallet = {
  id: string;
  name: string;
  address: Address;
  privateKey: string;
  balance: string;
  path?: string;
};

type WalletContextType = {
  wallets: Wallet[];
  activeWallet: Wallet | null;
  isLoading: boolean;
  error: string | null;
  createHDWallet: (name: string) => Promise<void>;
  importWallet: (privateKey: string, name: string) => Promise<void>;
  selectWallet: (id: string) => void;
  removeWallet: (id: string) => void;
  sendTransaction: (to: string, amount: string) => Promise<string | null>;
  refreshBalance: (walletId?: string) => Promise<void>;
};

// Create context
const WalletContext = createContext<WalletContextType | undefined>(undefined);

// Create a public client for interacting with the blockchain
const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});

// Provider component
export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [activeWallet, setActiveWallet] = useState<Wallet | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load wallets from localStorage on initial render
  useEffect(() => {
    const loadWallets = () => {
      try {
        const savedWallets = localStorage.getItem("wallets");
        if (savedWallets) {
          const parsedWallets = JSON.parse(savedWallets) as Wallet[];
          setWallets(parsedWallets);

          // Set active wallet if available
          const activeWalletId = localStorage.getItem("activeWalletId");
          if (activeWalletId) {
            const active = parsedWallets.find((w) => w.id === activeWalletId);
            if (active) setActiveWallet(active);
          } else if (parsedWallets.length > 0) {
            // Set first wallet as active if no active wallet is saved
            setActiveWallet(parsedWallets[0]);
            localStorage.setItem("activeWalletId", parsedWallets[0].id);
          }
        }
      } catch (err) {
        console.error("Failed to load wallets:", err);
        setError("Failed to load wallets from storage");
      }
    };

    loadWallets();
  }, []);

  // Save wallets to localStorage whenever they change
  useEffect(() => {
    if (wallets.length > 0) {
      localStorage.setItem("wallets", JSON.stringify(wallets));
    }
  }, [wallets]);

  // Create a new HD wallet
  const createHDWallet = async (name: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Generate a random mnemonic (seed phrase)
      const privateKey = generatePrivateKey();

      // Create an account from the private key
      const account = privateKeyToAccount(privateKey);

      // Generate a unique ID
      const id = crypto.randomUUID();

      // Create the wallet object
      const newWallet: Wallet = {
        id,
        name,
        address: account.address,
        privateKey,
        balance: "0",
      };

      // Add the new wallet to the state
      const updatedWallets = [...wallets, newWallet];
      setWallets(updatedWallets);

      // If this is the first wallet, set it as active
      if (updatedWallets.length === 1 || !activeWallet) {
        setActiveWallet(newWallet);
        localStorage.setItem("activeWalletId", id);
      }

      // Fetch the balance for the new wallet
      await fetchBalance(newWallet);
    } catch (err) {
      console.error("Failed to create wallet:", err);
      setError("Failed to create wallet");
    } finally {
      setIsLoading(false);
    }
  };

  // Import an existing wallet using its private key
  const importWallet = async (privateKey: string, name: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Ensure the private key is in the correct format
      const formattedPrivateKey = privateKey.startsWith("0x")
        ? privateKey
        : `0x${privateKey}`;

      // Create an account from the private key
      const account = privateKeyToAccount(formattedPrivateKey as `0x${string}`);

      // Check if wallet already exists
      const exists = wallets.some((w) => w.address === account.address);
      if (exists) {
        setError("Wallet with this address already exists");
        setIsLoading(false);
        return;
      }

      // Generate a unique ID
      const id = crypto.randomUUID();

      // Create the wallet object
      const newWallet: Wallet = {
        id,
        name,
        address: account.address,
        privateKey: formattedPrivateKey,
        balance: "0",
      };

      // Add the new wallet to the state
      const updatedWallets = [...wallets, newWallet];
      setWallets(updatedWallets);

      // If this is the first wallet, set it as active
      if (updatedWallets.length === 1 || !activeWallet) {
        setActiveWallet(newWallet);
        localStorage.setItem("activeWalletId", id);
      }

      // Fetch the balance for the new wallet
      await fetchBalance(newWallet);
    } catch (err) {
      console.error("Failed to import wallet:", err);
      setError("Invalid private key");
    } finally {
      setIsLoading(false);
    }
  };

  // Select a wallet as active
  const selectWallet = (id: string) => {
    const selected = wallets.find((w) => w.id === id);
    if (selected) {
      setActiveWallet(selected);
      localStorage.setItem("activeWalletId", id);
    }
  };

  // Remove a wallet
  const removeWallet = (id: string) => {
    const updatedWallets = wallets.filter((w) => w.id !== id);
    setWallets(updatedWallets);

    // If the active wallet is removed, set a new active wallet
    if (activeWallet && activeWallet.id === id) {
      if (updatedWallets.length > 0) {
        setActiveWallet(updatedWallets[0]);
        localStorage.setItem("activeWalletId", updatedWallets[0].id);
      } else {
        setActiveWallet(null);
        localStorage.removeItem("activeWalletId");
      }
    }

    // If no wallets left, clear localStorage
    if (updatedWallets.length === 0) {
      localStorage.removeItem("wallets");
    }
  };

  // Fetch balance for a wallet
  const fetchBalance = async (wallet: Wallet) => {
    try {
      const balance = await publicClient.getBalance({
        address: wallet.address,
      });

      // Update the wallet with the new balance
      const updatedWallets = wallets.map((w) =>
        w.id === wallet.id ? { ...w, balance: balance.toString() } : w,
      );

      setWallets(updatedWallets);

      // Update active wallet if needed
      if (activeWallet && activeWallet.id === wallet.id) {
        setActiveWallet({ ...activeWallet, balance: balance.toString() });
      }

      return balance.toString();
    } catch (err) {
      console.error("Failed to fetch balance:", err);
      return "0";
    }
  };

  // Refresh balance for a specific wallet or all wallets
  const refreshBalance = async (walletId?: string) => {
    setIsLoading(true);

    try {
      if (walletId) {
        // Refresh balance for a specific wallet
        const wallet = wallets.find((w) => w.id === walletId);
        if (wallet) {
          await fetchBalance(wallet);
        }
      } else {
        // Refresh balances for all wallets
        for (const wallet of wallets) {
          await fetchBalance(wallet);
        }
      }
    } catch (err) {
      console.error("Failed to refresh balances:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Send a transaction
  const sendTransaction = async (to: string, amount: string) => {
    setIsLoading(true);
    setError(null);

    if (!activeWallet) {
      setError("No active wallet selected");
      setIsLoading(false);
      return null;
    }

    try {
      // Create a wallet client
      const account = privateKeyToAccount(
        activeWallet.privateKey as `0x${string}`,
      );

      // Check if window.ethereum is available
      if (typeof window !== "undefined" && window.ethereum) {
        const walletClient = createWalletClient({
          account,
          chain: sepolia,
          transport: custom(window.ethereum),
        });

        // Send the transaction
        const hash = await walletClient.sendTransaction({
          to: to as `0x${string}`,
          value: parseEther(amount),
        });

        // Refresh the balance after sending
        await refreshBalance(activeWallet.id);

        return hash;
      } else {
        setError(
          "No Ethereum provider found. Please install MetaMask or another wallet.",
        );
        return null;
      }
    } catch (err: any) {
      console.error("Failed to send transaction:", err);
      setError(err.message || "Failed to send transaction");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Context value
  const value: WalletContextType = {
    wallets,
    activeWallet,
    isLoading,
    error,
    createHDWallet,
    importWallet,
    selectWallet,
    removeWallet,
    sendTransaction,
    refreshBalance,
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
}

// Custom hook to use the wallet context
export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}
