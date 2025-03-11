import { Address, Hex } from "viem";

export type WalletType = "smart-wallet" | "defi-wallet" | "imported";

export interface SavedWallet extends WallioWallet {
  key: string;
  from?: string;
}

export interface WalletCredential {
  id: string;
  pubKey: string;
  rpId: string;
}

export type WallioWallet = {
  id: string;
  name: string;
  address: Address;
  privateKey?: string;
  cred?: WalletCredential;
  path?: string;
  avatar: string;
  type: WalletType;
  imported?: boolean;
  index?: number;
  derivedFrom?: WalletCredential;
  master: boolean;
  lastActiveAt: Date;
};
