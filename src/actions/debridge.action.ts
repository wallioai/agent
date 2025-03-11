import { BridgeInfo } from "@/context/bridge.context";
import { DebridgeNetwork, PrepareOrderResponse } from "@/types/bridge.type";
import axios, { AxiosError } from "axios";
import { getDLNByChainId } from "wallioai-kit/adapters";
import { formatUnits, Hex, parseUnits } from "viem";

export async function fetchSupportedNetworks() {
  return await axios
    .get("https://dln.debridge.finance/v1.0/supported-chains-info")
    .then((res) => res.data as DebridgeNetwork[])
    .catch((err: AxiosError) => {
      throw new Error((err.response?.data as any).message);
    });
}

export async function createOrder(
  source: BridgeInfo,
  destination: BridgeInfo,
  address: Hex,
) {
  console.log(source);
  const url = "https://dln.debridge.finance/v1.0/dln/order/create-tx";
  const params = {
    srcChainId: getDLNByChainId(source.network.chainId),
    srcChainTokenIn: source.token.address,
    dstChainId: getDLNByChainId(destination.network.chainId),
    dstChainTokenOut: destination.token.address,
    srcChainTokenInAmount: parseUnits(source.amount, source.token.decimal),
    srcChainOrderAuthorityAddress: address,
    dstChainTokenOutAmount: "auto",
    prependOperatingExpense: true,
    dstChainOrderAuthorityAddress: destination.recipient,
    dstChainTokenOutRecipient: destination.recipient,
    referralCode: 31565,
  };
  console.log(params);
  const orderTx = await axios
    .get(url, {
      params,
    })
    .then((res) => res.data as PrepareOrderResponse)
    .catch((err: AxiosError) => {
      console.log(err);
      throw new Error((err.response?.data as any).message);
    });

  const src = orderTx.estimation.srcChainTokenIn;
  const dst = orderTx.estimation.dstChainTokenOut;
  const dstAmount = formatUnits(dst.recommendedAmount, dst.decimals);
  return {
    sourceIn: src,
    destinationOut: dst,
    amountOut: dstAmount,
  };
}
