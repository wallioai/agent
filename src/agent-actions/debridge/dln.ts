import z from "zod";
import { bridgeTokenSchema } from "./schemas/bridge.schema";
import { parseEther, zeroAddress } from "viem";
import { validateDLNInputs } from "./utils";
import { LRUCache } from "lru-cache";
import { DeBridgeTokens } from "./type";
import { toResult } from "@heyanon/sdk";
import { shouldShowConfirmation } from "./functions/shouldShowConfirmation";
import { handleConfirmationStep } from "./functions/handleConfirmationStep";
import { handleTokenListingStep } from "./functions/handleTokenListingStep";
import { prepareTransactionData } from "./functions/prepareTransactionData";
import { AdapterProvider, UseFunction } from "wallioai-kit/adapters";
import { ViemAccount, BaseAccount } from "wallioai-kit/accounts";
import { executeTransaction } from "./functions/executeBridgeTransaction";
import { base } from "viem/chains";

// Define bridge step types for better type safety
export type BridgeStep = "initial" | "confirmation" | "execution";

/**
 * DeBridgeLiquidityAdapterProvider is an adapter provider that enables user seamlessly bridge tokens.
 * This provider provides the ability for user to bridge token from one chain to another.
 */
export class DeBridgeLiquidityAdapterProvider extends AdapterProvider<BaseAccount> {
  private tokensCache: LRUCache<string, DeBridgeTokens[]>;
  private bridgeStep: BridgeStep;
  private transactionTimeout: NodeJS.Timeout | null = null;
  private lastPreparedTransaction: any = null;
  private transactionArgs: z.infer<typeof bridgeTokenSchema> | null = null;
  private transactionExpired: boolean = false;

  constructor() {
    super("dln", []);
    this.bridgeStep = "initial";

    this.tokensCache = new LRUCache({
      max: 100,
      ttl: 1000 * 60 * 60,
      updateAgeOnGet: true,
    });
  }

  @UseFunction({
    name: "bridge_token",
    description: `
    Bridge a token from one network chain to another network chain or token

    Inputs:
    - 
    
    Strict Rules:
    - Do not respond without querying bridge_token function
    - Strictly call bridge_token function if user responds to confirmation 
      request with false.
    - You should automatically determine user's bridge intent based on their prompt and
      the value should be one of the following: NATIVE-TO-NATIVE, NATIVE-TO-ERC20,
      ERC20-TO-NATIVE, ERC20-TO-ERC20
    `,
    schema: bridgeTokenSchema,
  })
  async bridgeToken(
    account: ViemAccount,
    args: z.infer<typeof bridgeTokenSchema>,
  ) {
    try {
      // Handle transaction cancellation
      if (this.bridgeStep === "execution" && !args.isConfirmed) {
        this.resetBridgeState(args);
        return toResult("Transaction has been cancled successfully", false);
      }

      // Reset confirmation if not in execution step
      if (args.isConfirmed && this.bridgeStep != "execution") {
        args.isConfirmed = false;
      }

      // Set recipient to sender if not specified
      if (args.to == zeroAddress) {
        args.to = account.getAddress();
      }

      const validatedChains = validateDLNInputs(args);
      if (!validatedChains.success || !validatedChains.data)
        return toResult(validatedChains.errorMessage, true);

      const { fromChain, toChain } = validatedChains.data;

      // Handle token listing step
      if (this.bridgeStep === "initial") {
        console.log("INIT STEP");
        return await handleTokenListingStep(
          args,
          fromChain,
          toChain,
          this.tokensCache,
          (srcTokens, dstTokens) => {
            this.tokensCache.set(args.sourceChain, srcTokens);
            this.tokensCache.set(args.destinationChain, dstTokens);
          },
          (step) => {
            this.bridgeStep = step;
          },
        );
      }

      // Store args for potential timeout refresh
      this.transactionArgs = args;

      // Prepare transaction data
      const prepareTx = await prepareTransactionData(
        account,
        args,
        fromChain,
        toChain,
        validatedChains.data,
        this.transactionExpired,
        this.lastPreparedTransaction,
        this.tokensCache,
        (tx: any) => {
          this.lastPreparedTransaction = tx;
        },
        this.transactionTimeout,
        () => this.clearTimeout(),
        (timeout: NodeJS.Timeout | null) => this.setTimeout(timeout),
        (expired, step) => {
          this.transactionExpired = expired;
          this.bridgeStep = step;
        },
        (data) => {
          this.lastPreparedTransaction = data;
        },
        () => {
          this.resetBridgeState();
        },
      );

      if (!prepareTx.success) {
        this.resetBridgeState();
        return toResult(
          "errorMessage" in prepareTx
            ? prepareTx.errorMessage
            : "Unknown error occurred",
          true,
        );
      }

      // Handle confirmation step
      if (
        shouldShowConfirmation({
          confirmed: args.isConfirmed,
          step: this.bridgeStep,
          expired: this.transactionExpired,
        })
      ) {
        return handleConfirmationStep(
          prepareTx.data,
          args,
          this.transactionExpired,
          (expired, step) => {
            this.transactionExpired = expired;
            this.bridgeStep = step;
          },
        );
      }

      // Execute the confirmed transaction
      return await executeTransaction(
        account,
        prepareTx.data,
        validatedChains.data,
        fromChain,
        args,
        this.transactionTimeout,
        () => this.clearTimeout(),
        () => this.resetBridgeState(args),
      );
    } catch (error: any) {
      console.log(error);
      this.resetBridgeState(args);
      return {
        success: false,
        data: error.message,
      };
    }
  }

  private setTimeout(timeout: NodeJS.Timeout | null) {
    this.transactionTimeout = timeout;
  }

  private clearTimeout() {
    if (this.transactionTimeout) {
      clearTimeout(this.transactionTimeout);
      this.transactionTimeout = null;
    }
  }

  /**
   * Reset the bridge state and clear any pending timeouts
   */
  private resetBridgeState(withArgs?: z.infer<typeof bridgeTokenSchema>) {
    this.bridgeStep = "initial";
    if (this.transactionTimeout) {
      clearTimeout(this.transactionTimeout);
      this.transactionTimeout = null;
    }

    this.lastPreparedTransaction = null;
    this.transactionArgs = null;
    this.transactionExpired = false;

    if (withArgs) {
      // Reset all args
      withArgs.amount = "0";
      withArgs.destinationChain = "";
      withArgs.sourceChain = "";
      withArgs.sourceTokenAddress = zeroAddress;
      withArgs.to = zeroAddress;
      withArgs.destinationTokenAddress = zeroAddress;
      withArgs.intent = "NATIVE-TO-NATIVE";
      withArgs.isConfirmed = false;
    }
  }
}

/**
 * Factory function to create a new DeBridgeLiquidityAdapterProvider instance.
 * @returns A new instance of DeBridgeLiquidityAdapterProvider.
 */
export const dlnAdapterProvider = () => new DeBridgeLiquidityAdapterProvider();
