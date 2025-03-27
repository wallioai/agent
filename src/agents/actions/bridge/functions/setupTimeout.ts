import { z } from "zod";
import { ViemAccount } from "wallioai-kit/accounts";
import { bridgeTokenSchema } from "../schemas/bridge.schema";
import {
  type DeBridgeTokens,
  type PrepareTxResponse,
  type ValidateChainResponse,
} from "../type";
import { type BridgeStep } from "..";
import { prepareTransaction } from "./prepareTransaction";
import { LRUCache } from "lru-cache";

export async function setupTransactionTimeout(
  account: ViemAccount,
  { isConfirmed, ...args }: z.infer<typeof bridgeTokenSchema>,
  validatedData: ValidateChainResponse,
  txTimeout: NodeJS.Timeout | null,
  clearTxTimeout: () => void,
  setTxTimeout: (timeout: NodeJS.Timeout | null) => void,
  updateStep: (txExpired: boolean, step: BridgeStep) => void,
  updateLastTx: (data?: PrepareTxResponse | null) => void,
  resetBridgeState: () => void,
  tokensCache: LRUCache<string, DeBridgeTokens[]>,
) {
  // Clear any existing timeout
  if (txTimeout) {
    clearTxTimeout();
  }

  let newTimeout = setTimeout(async () => {
    console.log("Transaction timeout reached, refreshing transaction data");
    updateStep(true, "confirmation");

    // Re-prepare the transaction with isConfirmed explicitly set to false
    try {
      const refreshedTx = await prepareTransaction({
        ...args,
        isConfirmed: false,
        tokensCache,
        fromChain: validatedData.fromChain,
        toChain: validatedData.toChain,
        sender: account.getAddress(),
      });

      const lassTx = refreshedTx.success ? refreshedTx.data : null;
      updateLastTx(lassTx);
    } catch (error: any) {
      resetBridgeState();
    }
  }, 30000); // 30 seconds timeout

  setTxTimeout(newTimeout);
}
