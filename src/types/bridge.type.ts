import { Hex } from "viem";
import { fantom } from "viem/chains";
export interface BaseChainInOut {
  address: Hex;
  chainId: number;
  decimals: number;
  name: string;
  symbol: string;
  amount: bigint;
  approximateUsdValue: number;
}

interface ISrcChainIn extends BaseChainInOut {
  approximateOperatingExpense: bigint;
  mutatedWithOperatingExpense: boolean;
  originApproximateUsdValue: number;
}

interface ISrcChainOut extends BaseChainInOut {
  maxRefundAmount: bigint;
}

interface IDstChainOut extends BaseChainInOut {
  recommendedAmount: bigint;
  maxTheoreticalAmount: bigint;
  recommendedApproximateUsdValue: number;
  maxTheoreticalApproximateUsdValue: number;
}

interface ICost {
  chain: string;
  tokenIn: Hex;
  tokenOut: Hex;
  amountIn: bigint;
  amountOut: bigint;
  type:
    | "PreSwap"
    | "PreSwapEstimatedSlippage"
    | "DlnProtocolFee"
    | "TakerMargin"
    | "EstimatedOperatingExpenses"
    | "AfterSwapEstimatedSlippage"
    | "AfterSwap";
  payload?: {
    feeAmount: bigint;
    feeBps?: string;
    estimatedVolatilityBps?: string;
    feeApproximateUsdValue?: string;
    amountOutBeforeCorrection: bigint;
  };
}

interface OrderTx {
  value: bigint;
  data?: Hex;
  to: Hex;
}

export interface PrepareOrderResponse {
  estimation: {
    srcChainTokenIn: ISrcChainIn;
    srcChainTokenOut?: ISrcChainOut;
    dstChainTokenOut: IDstChainOut;
    costsDetails: ICost[];
    recommendedSlippage: number;
    fixFee?: bigint;
    integratorPoints?: number;
  };
  tx: OrderTx;
  order: {
    approximateFulfillmentDelay: number;
    salt: number;
    metadata: Hex;
  };
  orderId: Hex;
  fixFee: bigint;
  userPoints: number;
  integratorPoints?: number;
}

export interface DebridgeNetwork {
  chainId: number;
  originalChainId: number;
  chainName: string;
}
