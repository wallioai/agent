import { DLNInternalId } from "wallioai-kit/adapters";
import { PrepareTransactionType } from "./prepareTransaction";
import { formatEther, formatUnits, parseUnits } from "viem";
import { PrepareTxResponse } from "../type";
import { ChainById, getChain } from "wallioai-kit";

export async function fetchSwapQuotes(
  args: PrepareTransactionType & {
    fromToken: string;
    fromTokenDecimal: number;
    toToken: string;
  },
) {
  const orderParam = {
    chainId: DLNInternalId[args.fromChain],
    tokenIn: args.fromToken,
    tokenInAmount: parseUnits(args.amount, args.fromTokenDecimal),
    slippage: "auto",
    tokenOut: args.toToken,
    tokenOutRecipient: args.to,
    affiliateFeePercent: 0.5,
    affiliateFeeRecipient: process.env.AFFILIATE_ADDRESS,
    referralCode: process.env.REFERRAL_CODE,
    senderAddress: args.sender,
  };
  console.log(orderParam);
  const queryString = new URLSearchParams(orderParam as any).toString();
  const url = `https://dln.debridge.finance/v1.0/chain/transaction?${queryString}`;
  const txResponse = await fetch(url).then((res) => res.json());
  console.log(txResponse);
  const takeAmountInUint = formatUnits(
    txResponse.tokenOut.amount,
    txResponse.tokenOut.decimals,
  );
  return {
    success: true,
    data: {
      tx: {
        data: txResponse.tx.data,
        value: txResponse.tx.value,
        to: txResponse.tx.to,
      },
      giveAmount: txResponse.tokenIn.amount,
      takeAmount: txResponse.tokenOut.amount,
      takeAmountInUint,
      destToken: txResponse.tokenOut,
      sourceToken: txResponse.tokenIn,
    } as PrepareTxResponse,
  };
}

export async function fetchBridgeQuotes(
  args: PrepareTransactionType & {
    fromToken: string;
    fromTokenDecimal: number;
    toToken: string;
  },
) {
  const chain = getChain(ChainById[args.fromChain].toString());
  const orderParam = {
    srcChainId: DLNInternalId[args.fromChain],
    srcChainTokenIn: args.fromToken,
    dstChainId: DLNInternalId[args.toChain],
    dstChainTokenOut: args.toToken,
    srcChainTokenInAmount: parseUnits(args.amount, args.fromTokenDecimal),
    srcChainOrderAuthorityAddress: args.sender,
    dstChainTokenOutAmount: "auto",
    prependOperatingExpense: true,
    dstChainOrderAuthorityAddress: args.to,
    dstChainTokenOutRecipient: args.to,
    affiliateFeePercent: 0.5,
    affiliateFeeRecipient: process.env.AFFILIATE_ADDRESS,
    referralCode: process.env.REFERRAL_CODE,
  };
  const queryString = new URLSearchParams(orderParam as any).toString();
  const url = `https://dln.debridge.finance/v1.0/dln/order/create-tx?${queryString}`;
  const txResponse = await fetch(url).then((res) => res.json());
  const amountInUsd = txResponse.estimation.srcChainTokenIn.approximateUsdValue;
  const estTakeValueInUsd =
    txResponse.estimation.dstChainTokenOut.recommendedApproximateUsdValue;
  const takeAmountInUint = formatUnits(
    txResponse.estimation.dstChainTokenOut.recommendedAmount,
    txResponse.estimation.dstChainTokenOut.decimals,
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
      giveAmount: parseUnits(
        args.amount,
        txResponse.estimation.srcChainTokenIn.decimals,
      ),
      takeAmount: parseUnits(
        takeAmountInUint.toString(),
        txResponse.estimation.dstChainTokenOut.decimals,
      ),
      amountInUsd,
      estTakeValueInUsd,
      takeAmountInUint,
      destToken: txResponse.estimation.dstChainTokenOut,
      sourceToken: txResponse.estimation.srcChainTokenIn,
    } as PrepareTxResponse,
  };
}
