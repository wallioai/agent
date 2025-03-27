export enum NetworkType {
  testnet = "testnet",
  mainnet = "mainnet",
}
export interface Network {
  _id: string;
  id: string;
  chainId: number;
  nativeCurrency: {
    symbol: string;
    decimal: number;
    address: string;
  };
  name: string;
  nameId: string;
  shortName: string;
  coingeckoId?: string;
  rpcUrls: string[];
  wssUrls: string[];
  explorerUrl: string;
  multicallAddress?: string;
  cgCoinId: string;
  isEnabled: boolean;
  isActive: boolean;
  type: NetworkType;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
}
