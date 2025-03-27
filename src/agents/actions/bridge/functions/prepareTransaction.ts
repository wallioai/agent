import { z } from "zod";
import { bridgeTokenSchema } from "../schemas/bridge.schema";
import { LRUCache } from "lru-cache";
import { type DeBridgeTokens, type PrepareTxResponse } from "../type";
import { Chain, ChainById, getChain } from "wallioai-kit";
import { DLNInternalId } from "../constants";
import { formatEther, formatUnits, parseUnits } from "viem";
import { fetchBridgeQuotes, fetchSwapQuotes } from "./getQuotes";

export type PrepareTransactionType = z.infer<typeof bridgeTokenSchema> & {
  tokensCache: LRUCache<string, DeBridgeTokens[]>;
  fromChain: Chain;
  toChain: Chain;
  sender: string;
};
export async function prepareTransaction(args: PrepareTransactionType) {
  try {
    const chain = getChain(ChainById[args.fromChain].toString());
    const sourceObj = args.tokensCache.get(args.sourceChain);
    const destObj = args.tokensCache.get(args.destinationChain);
    const sourceToken = sourceObj?.find(
      (t) => t.address == args.sourceTokenAddress,
    );
    const destToken = destObj?.find(
      (t) => t.address == args.destinationTokenAddress,
    );

    if (!sourceToken || !destToken) {
      return {
        success: false,
        errorMessage: "Token not found",
      };
    }

    const response = await fetchQuotes({
      ...args,
      fromToken: sourceToken.address,
      fromTokenDecimal: sourceToken.decimals,
      toToken: destToken.address,
    });
    // const url = determineTransaction({
    //   ...args,
    //   fromToken: sourceToken.address,
    //   fromTokenDecimal: sourceToken.decimals,
    //   toToken: destToken.address,
    // });
    // const orderParam = {
    //   srcChainId: DLNInternalId[args.fromChain],
    //   srcChainTokenIn: sourceToken.address,
    //   dstChainId: DLNInternalId[args.toChain],
    //   dstChainTokenOut: destToken.address,
    //   srcChainTokenInAmount: parseUnits(args.amount, sourceToken.decimals),
    //   srcChainOrderAuthorityAddress: args.sender,
    //   dstChainTokenOutAmount: "auto",
    //   prependOperatingExpense: true,
    //   dstChainOrderAuthorityAddress: args.to,
    //   dstChainTokenOutRecipient: args.to,
    //   affiliateFeePercent: 0.5,
    //   affiliateFeeRecipient: process.env.AFFILIATE_ADDRESS,
    //   referralCode: process.env.REFERRAL_CODE,
    // };

    // const queryString = new URLSearchParams(orderParam as any).toString();
    // const url = `https://dln.debridge.finance/v1.0/dln/order/create-tx?${queryString}`;
    // const txResponse = await fetch(url).then((res) => res.json());

    // console.log(txResponse);

    // const amountInUsd =
    //   txResponse.estimation.srcChainTokenIn.approximateUsdValue;
    // const estTakeValueInUsd =
    //   txResponse.estimation.dstChainTokenOut.recommendedApproximateUsdValue;
    // const takeAmountInUint = formatUnits(
    //   txResponse.estimation.dstChainTokenOut.recommendedAmount,
    //   txResponse.estimation.dstChainTokenOut.decimals,
    // );

    // const protocolFee = txResponse.estimation.costsDetails.find(
    //   (f) => f.type == "DlnProtocolFee",
    // );
    // const protocolFeeInUsd = protocolFee.payload.feeApproximateUsdValue;
    // const baseProtocolFee = formatEther(txResponse.fixFee);

    // return {
    //   success: true,
    //   data: {
    //     tx: {
    //       data: txResponse.tx.data,
    //       value: txResponse.tx.value,
    //       to: txResponse.tx.to,
    //     },
    //     fees: {
    //       protocolFee: parseFloat(protocolFeeInUsd.toString()).toFixed(2),
    //       fixedFee: baseProtocolFee,
    //       symbol: chain.nativeCurrency.symbol,
    //     },
    //     giveTokenAddress: sourceToken.address,
    //     giveAmount: parseUnits(args.amount, sourceToken.decimals),
    //     takeAmount: parseUnits(takeAmountInUint.toString(), destToken.decimals),
    //     amountInUsd,
    //     estTakeValueInUsd,
    //     takeAmountInUint,
    //     destToken,
    //     sourceToken,
    //   } as PrepareTxResponse,
    // };
    return {
      success: response.success,
      data: response.data,
    };
  } catch (error: any) {
    console.log(error);
    return { success: false, errorMessage: error.message };
  }
}

async function fetchQuotes(
  args: PrepareTransactionType & {
    fromToken: string;
    fromTokenDecimal: number;
    toToken: string;
  },
) {
  const isSameChain =
    args.fromChain.toLowerCase() == args.toChain.toLowerCase();
  if (isSameChain) {
    return await fetchSwapQuotes(args);
  }

  return await fetchBridgeQuotes(args);
}
