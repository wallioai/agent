// Define risk level types
export type RiskLevel = "HIGH" | "MEDIUM" | "LOW" | "SAFE";

// Define interfaces for API responses and data structures
export interface GoPlusApiResponse {
  code: number;
  message: string;
  result: {
    [contractAddress: string]: ContractData;
  };
}

export interface ContractData {
  anti_whale_modifiable: string;
  buy_tax: string;
  can_take_back_ownership: string;
  cannot_buy: string;
  cannot_sell_all: string;
  creator_address: string;
  creator_balance: string;
  creator_percent: string;
  dex: DexInfo[];
  external_call: string;
  hidden_owner: string;
  holder_count: string;
  holders: HolderInfo[];
  honeypot_with_same_creator: string;
  is_anti_whale: string;
  is_blacklisted: string;
  is_honeypot: string;
  is_in_dex: string;
  is_mintable: string;
  is_open_source: string;
  is_proxy: string;
  is_whitelisted: string;
  lp_holder_count: string;
  lp_holders: LpHolderInfo[];
  lp_total_supply: string;
  owner_address: string;
  owner_balance: string;
  owner_change_balance: string;
  owner_percent: string;
  personal_slippage_modifiable: string;
  selfdestruct: string;
  sell_tax: string;
  slippage_modifiable: string;
  token_name: string;
  token_symbol: string;
  total_supply: string;
  trading_cooldown: string;
  transfer_pausable: string;
}

export interface DexInfo {
  liquidity_type: string;
  name: string;
  liquidity: string;
  pair: string;
}

export interface HolderInfo {
  address: string;
  tag: string;
  is_contract: number;
  balance: string;
  percent: string;
  is_locked: number;
}

export interface LpHolderInfo extends HolderInfo {
  value: any;
  NFT_list: any;
  locked_detail?: {
    amount: string;
    end_time: string;
    opt_time: string;
  }[];
}

export interface RiskFactor {
  factor: string;
  severity: RiskLevel;
  description: string;
  details?: any;
}

export interface ContractAssessment {
  address: string;
  token_name: string;
  token_symbol: string;
  risk_level: RiskLevel;
  risk_score: number;
  risk_factors: RiskFactor[];
  summary: string;
  detailed_data: DetailedData;
  error?: string;
}

export interface DetailedData {
  token_info: {
    name: string;
    symbol: string;
    total_supply: string;
    holder_count: number;
  };
  contract_info: {
    creator: string;
    owner: string;
    is_open_source: boolean;
    is_proxy: boolean;
  };
  tax_info: {
    buy_tax: number;
    sell_tax: number;
  };
  liquidity: {
    total: number;
    sources: {
      name: string;
      type: string;
      liquidity: number;
      pair: string;
    }[];
    lp_holder_count: number;
  };
  distribution: {
    address: string;
    is_contract: boolean;
    balance: number;
    percent: number;
    is_locked: boolean;
  }[];
}