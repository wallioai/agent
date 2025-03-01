export interface Token {
  network: string;
  id: string;
  chainId: number;
  address: string;
  aggregator?: string;
  name: string;
  symbol: string;
  decimal: number;
  isEnabled: boolean;
  isActive: boolean;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
}
