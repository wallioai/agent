import { z } from "zod";
import { ViemAccount, handleTokenApproval } from "wallioai-kit/accounts";
import { Chain, ChainById, getChain } from "wallioai-kit";
import { type PrepareTxResponse } from "../type";
import { bridgeTokenSchema } from "../schemas/bridge.schema";
import { formatEther, type Hex, parseEther, zeroAddress } from "viem";
import { DLN, evmDLNContracts, toResult } from "wallioai-kit/adapters";

export async function executeTransaction(
  account: ViemAccount,
  preparedData: PrepareTxResponse,
  fromChain: Chain,
  args: z.infer<typeof bridgeTokenSchema>,
  txTimeout: NodeJS.Timeout | null,
  clearTxTimeout: () => void,
  resetBridgeState: (withArg: z.infer<typeof bridgeTokenSchema>) => void,
) {
  try {
    // Clear the timeout since we're proceeding
    if (txTimeout) {
      clearTxTimeout();
    }

    // Handle token approval if needed
    const isNative = preparedData.sourceToken.address === zeroAddress;
    if (!isNative) {
      await handleTokenApproval(
        account,
        preparedData.sourceToken.address as Hex,
        evmDLNContracts[DLN.SOURCE] as Hex,
        preparedData.giveAmount,
        fromChain,
      );
    }

    const formatToUnit = formatEther(preparedData.tx.value);
    const value = parseEther(formatToUnit);
    const chain = getChain(ChainById[fromChain].toString());

    // Send the bridge transaction
    const tx = await account.sendTransaction({
      data: preparedData.tx.data,
      to: preparedData.tx.to as Hex,
      value,
      chain,
    });

    const msg = `
      You have successfully bridged ${formatToUnit} ${chain.nativeCurrency.symbol}. \n
      Transaction ID: [${tx}]('https://${chain.blockExplorers?.default.url}/tx/${tx}')
    `;
    resetBridgeState(args);
    return toResult(msg, false);
  } catch (error) {
    console.log(error);
    resetBridgeState(args);
    const errorMessage = `
      An error occurred trying to bridge your token \n
      Error: ${error.message}
    `;
    return toResult(errorMessage, true);
  }
}
