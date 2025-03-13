import { z } from "zod";
import { bridgeTokenSchema } from "../schemas/bridge.schema";
import { LRUCache } from "lru-cache";
import { DeBridgeTokens, PrepareTxResponse } from "../type";
import { getChain } from "wallioai-kit";
import { DLNInternalId, Chain, ChainById } from "../constants";
import { encodeAbiParameters, formatEther, Hex, parseUnits } from "viem";

export async function prepareTransaction(
  args: z.infer<typeof bridgeTokenSchema> & {
    tokensCache: LRUCache<string, DeBridgeTokens[]>;
    fromChain: Chain;
    toChain: Chain;
    sender: string;
  },
) {
  try {
    console.log("GOT HERE");
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

    const orderParam = {
      srcChainId: DLNInternalId[args.fromChain],
      srcChainTokenIn: sourceToken.address,
      dstChainId: DLNInternalId[args.toChain],
      dstChainTokenOut: destToken.address,
      srcChainTokenInAmount: parseUnits(args.amount, sourceToken.decimals),
      srcChainOrderAuthorityAddress: args.sender,
      dstChainTokenOutAmount: "auto",
      prependOperatingExpense: true,
      dstChainOrderAuthorityAddress: args.to,
      dstChainTokenOutRecipient: args.to,
      referralCode: 31565,
    };

    const queryString = new URLSearchParams(orderParam as any).toString();
    const url = `https://dln.debridge.finance/v1.0/dln/order/create-tx?${queryString}`;
    const txResponse = await fetch(url).then((res) => res.json());

    const amountInUsd =
      txResponse.estimation.srcChainTokenIn.approximateUsdValue;
    const estTakeValueInUsd =
      txResponse.estimation.dstChainTokenOut.recommendedApproximateUsdValue;
    const takeAmountInUint = formatEther(
      txResponse.estimation.dstChainTokenOut.recommendedAmount,
    );

    const protocolFee = txResponse.estimation.costsDetails.find(
      (f) => f.type == "DlnProtocolFee",
    );
    const protocolFeeInUsd = protocolFee.payload.feeApproximateUsdValue;
    const baseProtocolFee = formatEther(txResponse.fixFee);

    

    return {
      success: true,
      data: {
        tx: {
          data: txResponse.tx.data,
          value: txResponse.tx.value,
          to: txResponse.tx.to,
        },
        fees: {
          protocolFee: parseFloat(protocolFeeInUsd.toString()).toFixed(2),
          fixedFee: baseProtocolFee,
          symbol: chain.nativeCurrency.symbol,
        },
        giveTokenAddress: sourceToken.address,
        giveAmount: parseUnits(args.amount, sourceToken.decimals),
        takeTokenAddress: encodeAbiParameters(
          [{ type: "address" }],
          [destToken.address as Hex],
        ),
        takeAmount: parseUnits(takeAmountInUint.toString(), destToken.decimals),
        receiverDst: encodeAbiParameters(
          [{ type: "address" }],
          [args.to as Hex],
        ),
        orderAuthorityAddressDst: encodeAbiParameters(
          [{ type: "address" }],
          [args.to as Hex],
        ),
        amountInUsd,
        estTakeValueInUsd,
        takeAmountInUint,
        destToken,
        sourceToken,
        affiliateFee: "0x",
        permitEnvelope: "0x",
      } as PrepareTxResponse,
    };
  } catch (error: any) {
    console.log(error);
    return { success: false, errorMessage: error.message };
  }
}
