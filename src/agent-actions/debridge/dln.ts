import z from "zod";
import { bridgeTokenSchema } from "./schemas/bridge.schema";
import { encodeAbiParameters, Hex, zeroAddress } from "viem";
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
import { ChainById, DLN, evmDLNContracts } from "./constants";
import { getChain } from "dexai";

/**
 * DeBridgeLiquidityAdapterProvider is an adapter provider that enables user seamlessly bridge tokens.
 * This provider provides the ability for user to bridge token from one chain to another.
 */
export class DeBridgeLiquidityAdapterProvider extends AdapterProvider<BaseAccount> {
  private tokensCache: LRUCache<string, Token[]>;
  private bridgeStep: number;

  constructor() {
    super("dln", []);
    this.bridgeStep = 0;

    this.tokensCache = new LRUCache({
      max: 100,
      ttl: 1000 * 60 * 60,
      updateAgeOnGet: true,
    });
  }

  @UseFunction({
    name: "fetch_bridge_info",
    description: "",
    schema: bridgeTokenSchema,
  })
  async prepareBridgeDetails() {}

  @UseFunction({
    name: "bridge_token",
    description: `
    Bridge a token from one network chain to another network chain or token
    
    Strict Rules:
    - Do not respond without querying bridge_token function
    `,
    schema: bridgeTokenSchema,
  })
  async bridgeToken(
    account: ViemAccount,
    args: z.infer<typeof bridgeTokenSchema>,
  ) {
    try {
      console.log(args);
      if (args.to == zeroAddress) {
        args.to = account.getAddress();
      }

      const isValidChain = validateDLNInputs(args);
      if (!isValidChain.success)
        return {
          success: isValidChain.success,
          data: isValidChain.errorMessage,
        };

      console.log("HERE");
      let srcTokens = this.tokensCache.get(args.sourceChain);
      let destTokens = this.tokensCache.get(args.destinationChain);
      if (this.bridgeStep == 0) {
        if (!srcTokens || !destTokens) {
          const fetchedTokens = await fetchSrcDestTokens({
            fromChain: isValidChain.data.fromChain,
            toChain: isValidChain.data.toChain,
          });
          if (!fetchedTokens.success)
            return {
              success: fetchedTokens.success,
              data: fetchedTokens.errorMessage,
            };

          srcTokens = fetchedTokens.data.mappedSrcTokens;
          destTokens = fetchedTokens.data.mappedDestTokens;

          this.tokensCache.set(args.sourceChain, srcTokens);
          this.tokensCache.set(args.destinationChain, destTokens);

          const cached = this.tokensCache.get(args.sourceChain);
          console.log(cached.length);
        }
        this.bridgeStep++;

        const sourceTokens = srcTokens.map((t: Token, i) => {
          return `${i + 1}. ${t.symbol.toUpperCase()} - ${t.address} \n`;
        });
        const destinationTokens = destTokens.map((t: Token, i) => {
          return `${i + 1}. ${t.symbol.toUpperCase()} - ${t.address} \n`;
        });

        return `
            Stricly display below token data for user to select source and destination tokens 
            from the list below which they want to bridge.

            - Source Tokens:
            ${sourceTokens} \n\n
            - Destination Tokens:
            ${destinationTokens} \n\n

            If the token you want to bridge to isn't on the list, kindly paste the token address.
        `;
      }

      console.log(this.tokensCache.get(args.sourceChain));
      const prepareTx = prepareTransaction({
        ...args,
        tokensCache: this.tokensCache,
      });
      if (!prepareTx.success)
        return {
          success: false,
          data: prepareTx.errorMessage,
        };

      if (!args.isConfirmed) {
        return {
          message: `
            Strictly display this entire confirmation message to user:

            Confirm the transaction details below to proceed with bridging.\n\n
            Transaction Details:\n
            Send: \n
                - Amount: ${args.amount} ${prepareTx.data.sourceToken.symbol.toUpperCase()} \n
                - Usd Value: ${prepareTx.data.amountInUsd} USD \n
                - Token: ${prepareTx.data.sourceToken.address} \n\n
            Recieve: \n
                - Amount: ${prepareTx.data.takeAmountInUint} ${prepareTx.data.destToken.symbol.toUpperCase()} \n
                - Usd Value: ${prepareTx.data.estTakeValueInUsd} USD \n
                - Token: ${prepareTx.data.destToken.address} \n
                - Recipient: ${args.to}
            `,
        };
      }

      const protocolFee = await account.readContract({
        address: evmDLNContracts[DLN.SOURCE] as Hex,
        abi: dlnSourceAbi,
        functionName: "globalFixedNativeFee",
      });

      // Request approval if it's not zero address:

      const tx = await account.writeContract({
        address: evmDLNContracts[DLN.SOURCE] as Hex,
        abi: dlnSourceAbi,
        functionName: "createOrder",
        args: [
          {
            giveTokenAddress: prepareTx.data.giveTokenAddress,
            giveAmount: prepareTx.data.giveAmount,
            takeTokenAddress: prepareTx.data.takeTokenAddress,
            takeAmount: prepareTx.data.takeAmount,
            takeChainId: isValidChain.data.takeChainId,
            receiverDst: prepareTx.data.receiverDst,
            givePatchAuthoritySrc: account.getAddress(),
            orderAuthorityAddressDst: prepareTx.data.orderAuthorityAddressDst,
            allowedTakerDst: isValidChain.data.allowedTakerDst,
            externalCall: isValidChain.data.externalCall,
            allowedCancelBeneficiarySrc: encodeAbiParameters(
              [{ type: "address" }],
              [account.getAddress() as Hex],
            ),
          },
          prepareTx.data.affiliateFee,
          isValidChain.data.referralCode,
          prepareTx.data.permitEnvelope,
        ],
        value: protocolFee,
        chain: getChain(ChainById[isValidChain.data.fromChain].toString()),
      });

      return { success: true, data: "Success" };
    } catch (error) {
      console.log(error.message);
      return {
        success: false,
        data: error.message,
      };
    }
  }
}

/**
 * Factory function to create a new DeBridgeLiquidityAdapterProvider instance.
 * @returns A new instance of DeBridgeLiquidityAdapterProvider.
 */
export const dlnAdapterProvider = () => new DeBridgeLiquidityAdapterProvider();
