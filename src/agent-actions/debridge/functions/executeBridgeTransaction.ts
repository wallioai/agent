import { z } from "zod";
import { PrepareTxResponse, ValidateChainResponse } from "../type";
import { bridgeTokenSchema } from "../schemas/bridge.schema";
import { Chain, ChainById, DLN, evmDLNContracts } from "../constants";
import {
  createPublicClient,
  createWalletClient,
  encodeAbiParameters,
  encodeFunctionData,
  formatEther,
  Hex,
  http,
  parseEther,
  zeroAddress,
} from "viem";
import { dlnSourceAbi } from "../abis/dlnSource";
import { handleTokenApproval } from "./handleTokenApproval";
import { toResult } from "@heyanon/sdk";
import { ViemAccount } from "wallioai-kit/accounts";
import { getChain } from "wallioai-kit";

export async function executeTransaction(
  account: ViemAccount,
  preparedData: PrepareTxResponse,
  validatedData: ValidateChainResponse,
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
    const isNative = preparedData.giveTokenAddress === zeroAddress;
    if (!isNative) {
      await handleTokenApproval(
        account,
        preparedData.giveTokenAddress,
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
      Transaction ID: [${tx}]('https://${chain.blockExplorers[0].url}/tx/${tx}')
    `;
    resetBridgeState(args);
    return toResult(msg, false);
  } catch (error) {
    console.log(error);
    return "error trying to bridge transaction";
  }
}
