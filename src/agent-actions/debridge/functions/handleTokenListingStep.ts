import { z } from "zod";
import { bridgeTokenSchema } from "../schemas/bridge.schema";
import { fetchSrcDestTokens } from "../utils";
import { LRUCache } from "lru-cache";
import { DeBridgeTokens } from "../type";
import { BridgeStep } from "../dln";
import { toResult } from "@heyanon/sdk";
import { Chain, ChainById } from "../constants";
import { zeroAddress } from "viem";

/**
 * Handle the token listing step of the bridging process
 * @param args
 * @param fromChain
 * @param toChain
 * @param tokenCache
 * @param updateCache
 * @param updateStep
 * @returns
 */
export async function handleTokenListingStep(
  args: z.infer<typeof bridgeTokenSchema>,
  fromChain: Chain,
  toChain: Chain,
  tokenCache: LRUCache<string, DeBridgeTokens[]>,
  updateCache: (
    srcTokens?: DeBridgeTokens[],
    dstTokens?: DeBridgeTokens[],
  ) => void,
  updateStep: (step: BridgeStep) => void,
) {
  // Check cache first
  let srcTokens = tokenCache.get(args.sourceChain);
  let destTokens = tokenCache.get(args.destinationChain);

  if (!srcTokens || !destTokens) {
    //let filter = { srcAddress: null, dstAddress: null };
    // if (args.intent == "NATIVE-TO-NATIVE") {
    //   // Directly proceed to confirmation as no token list is needed
    //   filter.dstAddress = args.destinationTokenAddress;
    //   filter.srcAddress = args.sourceTokenAddress;
    //   updateStep("confirmation");
    // } else if (
    //   args.intent === "ERC20-TO-ERC20" &&
    //   args.sourceTokenAddress !== zeroAddress &&
    //   args.destinationTokenAddress !== zeroAddress
    // ) {
    //   // Both addresses provided for ERC20-ERC20, skip token listing
    //   filter.dstAddress = args.destinationTokenAddress;
    //   filter.srcAddress = args.sourceTokenAddress;
    //   updateStep("confirmation");
    // }

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
    srcTokens = fetchedTokens?.data?.mappedSrcTokens;
    destTokens = fetchedTokens?.data?.mappedDestTokens;

    updateCache(srcTokens, destTokens);
  }

  // Move to next step
  updateStep("confirmation");

  // Format token lists for display
  const sourceTokens = srcTokens
    ?.map(
      (t: DeBridgeTokens, i) =>
        `${i + 1}. ${t.symbol.toUpperCase()} - ${t.address}`,
    )
    .join("\n");

  const destinationTokens = destTokens
    ?.map(
      (t: DeBridgeTokens, i) =>
        `${i + 1}. ${t.symbol.toUpperCase()} - ${t.address}`,
    )
    .join("\n");
  const chainId = ChainById[fromChain];

  return toResult(
    `
      Stricly display below token data for user to select source and destination tokens 
      from the list below which they want to bridge.

      - Source Tokens:
      ${sourceTokens}

      - Destination Tokens:
      ${destinationTokens}

      If the token you want to bridge to isn't on the list, kindly paste the token address.
      You can view all tokens at [view tokens]('https://wallio.xyz/tokens?chain=${chainId}')
    `,
    false,
  );
}
