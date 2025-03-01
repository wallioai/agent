export enum NetworkType {
  testnet = "testnet",
  mainnet = "mainnet",
}
export interface Network {
  id: string;
  chainId: number;
  symbol?: string;
  currency: string;
  name: string;
  nameId: string;
  shortName: string;
  coingeckoId?: string;
  rpcUrls: string[];
  wssUrls: string[];
  explorerUrl: string;
  multicallAddress?: string;
  isEnabled: boolean;
  isActive: boolean;
  type: NetworkType;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
}
