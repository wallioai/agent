import z from "zod";
import { bridgeTokenSchema } from "./schemas/bridge.schema";
import {
  encodeAbiParameters,
  encodeFunctionData,
  erc20Abi,
  Hex,
  zeroAddress,
} from "viem";
import { AdapterProvider, UseFunction } from "dexai/adapters";
import { ViemAccount, BaseAccount } from "dexai/accounts";
import {
  fetchSrcDestTokens,
  prepareTransaction,
  validateDLNInputs,
} from "./utils";
import { Token } from "../coingecko/type";
import { LRUCache } from "lru-cache";
import { dlnSourceAbi } from "./abis/dlnSource";
import { Chain, ChainById, DLN, evmDLNContracts } from "./constants";
import { getChain } from "dexai";
import { PrepareTxResponse, ValidateChainResponse } from "./type";

// Define bridge step types for better type safety
type BridgeStep = "initial" | "confirmation" | "execution";

/**
 * DeBridgeLiquidityAdapterProvider is an adapter provider that enables user seamlessly bridge tokens.
 * This provider provides the ability for user to bridge token from one chain to another.
 */
export class DeBridgeLiquidityAdapterProvider extends AdapterProvider<BaseAccount> {
  private tokensCache: LRUCache<string, Token[]>;
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
    
    Strict Rules:
    - Do not respond without querying bridge_token function
    - Strictly call bridge_token function if user responds to confirmation 
      request with false.
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
        return {
          success: true,
          data: "Transaction has been cancled successfully",
        };
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
      if (!validatedChains.success)
        return {
          success: validatedChains.success,
          data: validatedChains.errorMessage,
        };

      const { fromChain, toChain } = validatedChains.data;

      // Handle token listing step
      if (this.bridgeStep === "initial") {
        return await this.handleTokenListingStep(args, fromChain, toChain);
      }

      // Store args for potential timeout refresh
      this.transactionArgs = args;

      // Prepare transaction data
      const prepareTx = await this.prepareTransactionData(
        account,
        args,
        fromChain,
        toChain,
        validatedChains.data,
      );

      if (!prepareTx.success) {
        this.resetBridgeState();
        return {
          success: false,
          data:
            "errorMessage" in prepareTx
              ? prepareTx.errorMessage
              : "Unknown error occurred",
        };
      }

      // Handle confirmation step
      if (this.shouldShowConfirmation(args)) {
        return this.handleConfirmationStep(prepareTx.data, args);
      }

      // Execute the confirmed transaction
      return await this.executeTransaction(
        account,
        prepareTx.data,
        validatedChains.data,
        fromChain,
        args,
      );
    } catch (error) {
      this.resetBridgeState(args);
      console.error("Bridge token error:", error.message);
      return {
        success: false,
        data: error.message,
      };
    }
  }

  /**
   * Check if confirmation should be shown
   */
  private shouldShowConfirmation(
    args: z.infer<typeof bridgeTokenSchema>,
  ): boolean {
    return (
      (this.transactionExpired || !args.isConfirmed) &&
      this.bridgeStep === "confirmation"
    );
  }

  /**
   * Handle the confirmation step
   */
  private handleConfirmationStep(
    preparedData: PrepareTxResponse,
    args: z.infer<typeof bridgeTokenSchema>,
  ) {
    const wasExpired = this.transactionExpired;
    this.transactionExpired = false;
    this.bridgeStep = "execution";

    return this.generateConfirmationMessage(preparedData, args, wasExpired);
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
      withArgs.isConfirmed = false;
    }
  }

  /**
   * Prepare transaction data
   */
  private async prepareTransactionData(
    account: ViemAccount,
    args: z.infer<typeof bridgeTokenSchema>,
    fromChain: Chain,
    toChain: Chain,
    validatedData: ValidateChainResponse,
  ) {
    const isConfirmed = this.transactionExpired ? false : args.isConfirmed;

    // Use cached transaction data if available
    if ((isConfirmed || !isConfirmed) && this.lastPreparedTransaction) {
      return { success: true, data: this.lastPreparedTransaction };
    }

    // Prepare new transaction data
    console.log("PREPARING TRANSACTION");
    const prepareTx = await prepareTransaction({
      ...args,
      tokensCache: this.tokensCache,
      fromChain,
      toChain,
      sender: account.getAddress(),
    });

    if (prepareTx.success) {
      this.lastPreparedTransaction = prepareTx.data;

      // Only setup timeout for fresh confirmations
      if (!isConfirmed) {
        this.setupTransactionTimeout(account, args, validatedData);
      }
    }

    return prepareTx;
  }

  /**
   * Set a timeout for transaction execution
   * @param account - User account
   * @param args - Bridge arguments
   * @param validatedData - Validated chain data
   */
  private setupTransactionTimeout(
    account: ViemAccount,
    { isConfirmed, ...args }: z.infer<typeof bridgeTokenSchema>,
    validatedData: ValidateChainResponse,
  ) {
    // Clear any existing timeout
    if (this.transactionTimeout) {
      clearTimeout(this.transactionTimeout);
    }

    this.transactionTimeout = setTimeout(async () => {
      console.log("Transaction timeout reached, refreshing transaction data");
      this.transactionExpired = true;
      this.bridgeStep = "confirmation";

      // Re-prepare the transaction with isConfirmed explicitly set to false
      try {
        const refreshedTx = await prepareTransaction({
          ...args,
          isConfirmed: false,
          tokensCache: this.tokensCache,
          fromChain: validatedData.fromChain,
          toChain: validatedData.toChain,
          sender: account.getAddress(),
        });

        this.lastPreparedTransaction = refreshedTx.success
          ? refreshedTx.data
          : null;
        console.log("Transaction data refreshed, user needs to confirm again");
      } catch (error) {
        console.error("Error refreshing transaction:", error.message);
        this.resetBridgeState();
      }
    }, 30000); // 30 seconds timeout
  }

  /**
   * Handle the token listing step of the bridging process
   */
  private async handleTokenListingStep(
    args: z.infer<typeof bridgeTokenSchema>,
    fromChain: Chain,
    toChain: Chain,
  ) {
    // Check cache first
    let srcTokens = this.tokensCache.get(args.sourceChain);
    let destTokens = this.tokensCache.get(args.destinationChain);

    if (!srcTokens || !destTokens) {
      const fetchedTokens = await fetchSrcDestTokens({
        fromChain,
        toChain,
      });

      if (!fetchedTokens.success)
        return {
          success: fetchedTokens.success,
          data: fetchedTokens.errorMessage,
        };

      // Cache the fetched tokens
      srcTokens = fetchedTokens.data.mappedSrcTokens;
      destTokens = fetchedTokens.data.mappedDestTokens;

      this.tokensCache.set(args.sourceChain, srcTokens);
      this.tokensCache.set(args.destinationChain, destTokens);
    }

    // Move to next step
    this.bridgeStep = "confirmation";

    // Format token lists for display
    const sourceTokens = srcTokens
      .map(
        (t: Token, i) => `${i + 1}. ${t.symbol.toUpperCase()} - ${t.address}`,
      )
      .join("\n");

    const destinationTokens = destTokens
      .map(
        (t: Token, i) => `${i + 1}. ${t.symbol.toUpperCase()} - ${t.address}`,
      )
      .join("\n");

    return `
      Stricly display below token data for user to select source and destination tokens 
      from the list below which they want to bridge.

      - Source Tokens:
      ${sourceTokens}

      - Destination Tokens:
      ${destinationTokens}

      If the token you want to bridge to isn't on the list, kindly paste the token address.
    `;
  }

  /**
   * Generate a confirmation message for the user
   */
  private generateConfirmationMessage(
    preparedData: PrepareTxResponse,
    args: any,
    wasExpired: boolean = false,
  ) {
    const expiryMessage = wasExpired
      ? "⚠️ Your previous transaction has expired. Please review and confirm the updated transaction details."
      : "Note: This transaction will expire in 30 seconds if not confirmed.";

    return {
      message: `
        Strictly display this entire confirmation message to user:

        ${wasExpired ? expiryMessage : ""}

        Confirm the transaction details below to proceed with bridging.

        Transaction Details:
        Send: 
         - Amount: ${args.amount} ${preparedData.sourceToken.symbol.toUpperCase()}
         - Usd Value: ${preparedData.amountInUsd} USD
         - Token: ${preparedData.sourceToken.address}
         - Network: ${args.sourceChain}
        Recieve: 
         - Amount: ${preparedData.takeAmountInUint} ${preparedData.destToken.symbol.toUpperCase()}
         - Usd Value: ${preparedData.estTakeValueInUsd} USD
         - Token: ${preparedData.destToken.address}
         - Recipient: ${args.to}
         - Network: ${args.destinationChain}
        Fees: 
         - Protocol Fee: ${preparedData.fees.fixedFee} ${preparedData.fees.symbol} + ${preparedData.fees.protocolFee} USD
            
        ${!wasExpired ? expiryMessage : ""}
      `,
    };
  }

  /**
   * Execute the bridge transaction
   */
  private async executeTransaction(
    account: ViemAccount,
    preparedData: PrepareTxResponse,
    validatedData: ValidateChainResponse,
    fromChain: Chain,
    args: z.infer<typeof bridgeTokenSchema>,
  ) {
    // Clear the timeout since we're proceeding
    if (this.transactionTimeout) {
      clearTimeout(this.transactionTimeout);
      this.transactionTimeout = null;
    }

    // Get protocol fee
    const protocolFee = (await account.readContract({
      address: evmDLNContracts[DLN.SOURCE] as Hex,
      abi: dlnSourceAbi,
      functionName: "globalFixedNativeFee",
      chain: getChain(ChainById[fromChain].toString()),
    })) as bigint;

    // Encode transaction data
    const encodedData = encodeFunctionData({
      abi: dlnSourceAbi,
      functionName: "createOrder",
      args: [
        {
          giveTokenAddress: preparedData.giveTokenAddress as Hex,
          giveAmount: preparedData.giveAmount,
          takeTokenAddress: preparedData.takeTokenAddress,
          takeAmount: preparedData.takeAmount,
          takeChainId: validatedData.takeChainId as unknown as bigint,
          receiverDst: preparedData.receiverDst,
          givePatchAuthoritySrc: account.getAddress() as Hex,
          orderAuthorityAddressDst: preparedData.orderAuthorityAddressDst,
          allowedTakerDst: validatedData.allowedTakerDst as Hex,
          externalCall: validatedData.externalCall as Hex,
          allowedCancelBeneficiarySrc: encodeAbiParameters(
            [{ type: "address" }],
            [account.getAddress() as Hex],
          ),
        },
        preparedData.affiliateFee as Hex,
        validatedData.referralCode,
        preparedData.permitEnvelope as Hex,
      ],
    });

    // Handle token approval if needed
    const isNative = preparedData.giveTokenAddress === zeroAddress;
    if (!isNative) {
      await this.handleTokenApproval(
        account,
        preparedData.giveTokenAddress,
        preparedData.giveAmount,
        fromChain,
      );
    }

    // Send the bridge transaction
    await account.sendTransaction({
      data: encodedData,
      to: evmDLNContracts[DLN.SOURCE] as Hex,
      value: protocolFee,
      chain: getChain(ChainById[fromChain].toString()),
    });

    // Reset bridge state after successful transaction
    this.resetBridgeState(args);
    return { success: true, data: "Bridge transaction submitted successfully" };
  }

  /**
   * Handle token approval if needed
   */
  private async handleTokenApproval(
    account: ViemAccount,
    tokenAddress: Hex,
    amount: bigint,
    fromChain: Chain,
  ) {
    const chain = getChain(ChainById[fromChain].toString());
    const allowance = (await account.readContract({
      address: tokenAddress,
      abi: erc20Abi,
      functionName: "allowance",
      args: [account.getAddress(), evmDLNContracts[DLN.SOURCE] as Hex],
      chain,
    })) as bigint;

    if (allowance < amount) {
      const approvalHash = await account.sendTransaction({
        to: tokenAddress,
        data: encodeFunctionData({
          abi: erc20Abi,
          functionName: "approve",
          args: [evmDLNContracts[DLN.SOURCE] as Hex, amount],
        }),
        chain,
      });
      await account.waitForTransactionReceipt(approvalHash);
    }
  }
}

/**
 * Factory function to create a new DeBridgeLiquidityAdapterProvider instance.
 * @returns A new instance of DeBridgeLiquidityAdapterProvider.
 */
export const dlnAdapterProvider = () => new DeBridgeLiquidityAdapterProvider();
