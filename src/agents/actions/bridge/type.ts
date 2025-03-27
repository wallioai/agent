import { type Hex } from "viem";
import { Chain } from "wallioai-kit";

export type ValidateChainResponse = {
  takeChainId: number;
  allowedTakerDst: string;
  externalCall: string;
  allowedCancelBeneficiarySrc: string;
  givePatchAuthoritySrc: string;
  referralCode: number;
  fromChain: Chain;
  toChain: Chain;
};

export type PrepareTxResponse = {
  tx: {
    data: Hex;
    value: bigint;
    to: Hex;
  };
  fees?: {
    protocolFee: string;
    fixedFee: string;
    symbol: string;
  };
  giveAmount: bigint;
  takeAmount: bigint;
  amountInUsd?: number;
  estTakeValueInUsd?: number;
  takeAmountInUint: string;
  destToken: DeBridgeTokens;
  sourceToken: DeBridgeTokens;
};

export interface DeBridgeTokenResponse {
  tokens: {
    [key: string]: DeBridgeTokens;
  };
}
export interface DeBridgeTokens {
  symbol: string;
  name: string;
  decimals: number;
  address: string;
  logoURI: string;
  tags?: [{ Name: string }];
  eip2612?: boolean;
}
