import { Hex } from "viem";
import { Chain } from "./constants";
import { Token } from "../coingecko/type";

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
  fees: {
    protocolFee: string;
    fixedFee: string;
    symbol: string;
  };
  giveTokenAddress: Hex;
  giveAmount: bigint;
  takeTokenAddress: Hex;
  takeAmount: bigint;
  receiverDst: Hex;
  orderAuthorityAddressDst: Hex;
  amountInUsd: number;
  estTakeValueInUsd: number;
  takeAmountInUint: string;
  destToken: DeBridgeTokens;
  sourceToken: DeBridgeTokens;
  affiliateFee: Hex;
  permitEnvelope: Hex;
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
