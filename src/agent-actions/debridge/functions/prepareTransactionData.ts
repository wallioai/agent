import { z } from "zod";
import { ViemAccount } from "wallioai-kit/accounts";
import { bridgeTokenSchema } from "../schemas/bridge.schema";
import { Chain } from "../constants";
import {
  DeBridgeTokens,
  PrepareTxResponse,
  ValidateChainResponse,
} from "../type";
import { LRUCache } from "lru-cache";
import { prepareTransaction } from "./prepareTransaction";
import { setupTransactionTimeout } from "./setupTimeout";
import { BridgeStep } from "../dln";

export async function prepareTransactionData(
  account: ViemAccount,
  args: z.infer<typeof bridgeTokenSchema>,
  fromChain: Chain,
  toChain: Chain,
  validatedData: ValidateChainResponse,
  transactionExpired: boolean,
  lastPreparedTransaction: any,
  tokensCache: LRUCache<string, DeBridgeTokens[]>,
  updateLatestTransaction: (tx: any) => void,
  txTimeout: NodeJS.Timeout | null,
  clearTxTimeout: () => void,
  setTxTimeout: (timeout: NodeJS.Timeout | null) => void,
  updateStep: (txExpired: boolean, step: BridgeStep) => void,
  updateLastTx: (data?: PrepareTxResponse | null) => void,
  resetBridgeState: () => void,
) {
  const isConfirmed = transactionExpired ? false : args.isConfirmed;

  // Use cached transaction data if available
  if ((isConfirmed || !isConfirmed) && lastPreparedTransaction) {
    return { success: true, data: lastPreparedTransaction };
  }

  console.log("PREPARING");
  // Prepare new transaction data
  const prepareTx = await prepareTransaction({
    ...args,
    tokensCache,
    fromChain,
    toChain,
    sender: account.getAddress(),
  });

  if (prepareTx.success) {
    updateLatestTransaction(prepareTx.data);

    // Only setup timeout for fresh confirmations
    if (!isConfirmed) {
      setupTransactionTimeout(
        account,
        args,
        validatedData,
        txTimeout,
        clearTxTimeout,
        setTxTimeout,
        updateStep,
        updateLastTx,
        resetBridgeState,
        tokensCache,
      );
    }
  }

  return prepareTx;
}
