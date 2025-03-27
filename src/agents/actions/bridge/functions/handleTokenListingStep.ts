import { z } from "zod";
import { bridgeTokenSchema } from "../schemas/bridge.schema";
import { Chain } from "wallioai-kit";
import { fetchTokens } from "../utils";
import { LRUCache } from "lru-cache";
import { type DeBridgeTokens } from "../type";
import { type BridgeStep } from "..";
import { zeroAddress } from "viem";

/**
 * Fetches tokens and updates the cache if necessary.
 */
async function fetchAndCacheTokens(
  chain: Chain,
  cacheKey: string,
  tokenCache: LRUCache<string, DeBridgeTokens[]>,
  updateCache: (tokens?: DeBridgeTokens[]) => void,
) {
  let tokens = tokenCache.get(cacheKey);
  if (!tokens) {
    const tokenList = await fetchTokens({ chain });
    if (!tokenList.success) {
      return { success: false, errorMessage: tokenList.errorMessage };
    }
    tokens = tokenList.tokens;
    updateCache(tokens);
  }
  return { success: true, tokens };
}

/**
 * Handle the token listing step of the bridging process
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
  // Fetch and cache tokens for both chains
  const srcResult = await fetchAndCacheTokens(
    fromChain,
    args.sourceChain,
    tokenCache,
    (tokens) => updateCache(tokens),
  );
  if (!srcResult.success)
    return {
      success: false,
      errorMessage: srcResult.errorMessage,
      next: false,
    };

  const dstResult = await fetchAndCacheTokens(
    toChain,
    args.destinationChain,
    tokenCache,
    (tokens) => updateCache(undefined, tokens),
  );
  if (!dstResult.success)
    return {
      success: false,
      errorMessage: dstResult.errorMessage,
      next: false,
    };

  const srcTokens = srcResult.tokens;
  const destTokens = dstResult.tokens;

  // Handle different bridge intents
  switch (args.intent) {
    case "NATIVE-TO-NATIVE":
      if (args.sourceTokenAddress === args.destinationTokenAddress) {
        updateStep("confirmation");
        return {
          success: true,
          data: {
            sourceToken: args.sourceTokenAddress,
            destinationToken: args.destinationTokenAddress,
          },
          next: true,
        };
      }
      break;

    case "NATIVE-TO-ERC20":
      if (args.destinationTokenAddress !== zeroAddress) {
        const destToken = destTokens?.find(
          (t) =>
            t.address.toLowerCase() ===
            args?.destinationTokenAddress?.toLowerCase(),
        );
        if (!destToken) {
          return {
            success: false,
            errorMessage: `Token not found for ${args.destinationTokenAddress}`,
            next: false,
          };
        }
        updateStep("confirmation");
        return {
          success: true,
          data: {
            sourceToken: zeroAddress,
            destinationToken: destToken.address,
          },
          next: true,
        };
      }
      break;

    case "ERC20-TO-NATIVE":
      if (args.sourceTokenAddress !== zeroAddress) {
        const srcToken = srcTokens?.find(
          (t) =>
            t.address.toLowerCase() === args?.sourceTokenAddress?.toLowerCase(),
        );
        if (!srcToken) {
          return {
            success: false,
            errorMessage: `Token not found for ${args.sourceTokenAddress}`,
            next: false,
          };
        }
        updateStep("confirmation");
        return {
          success: true,
          data: {
            sourceToken: srcToken.address,
            destinationToken: zeroAddress,
          },
          next: true,
        };
      }
      break;

    case "ERC20-TO-ERC20":
      if (
        args.sourceTokenAddress !== zeroAddress &&
        args.destinationTokenAddress !== zeroAddress
      ) {
        const srcToken = srcTokens?.find(
          (t) =>
            t.address.toLowerCase() === args?.sourceTokenAddress?.toLowerCase(),
        );
        const destToken = destTokens?.find(
          (t) =>
            t.address.toLowerCase() ===
            args?.destinationTokenAddress?.toLowerCase(),
        );
        if (!srcToken || !destToken) {
          return {
            success: false,
            errorMessage: `Token not found for ${!srcToken ? args.sourceTokenAddress : args.destinationTokenAddress}`,
            next: false,
          };
        }
        updateStep("confirmation");
        return {
          success: true,
          data: {
            sourceToken: srcToken.address,
            destinationToken: destToken.address,
          },
          next: true,
        };
      }
      break;
  }

  // Move to next step
  updateStep("confirmation");

  // Format token lists for display
  const filteredSourceTokens = filterTokens(srcTokens, args.sourceTokenSymbol);
  const filteredDestinationTokens = filterTokens(
    destTokens,
    args.destinationTokenSymbol,
  );

  const sourceTokens = formatTokenList(
    filteredSourceTokens,
    args.sourceTokenSymbol,
  );
  const destinationTokens = formatTokenList(
    filteredDestinationTokens,
    args.destinationTokenSymbol,
  );

  console.log(sourceTokens?.actualToken, destinationTokens?.actualToken);
  if (sourceTokens?.actualToken && destinationTokens?.actualToken) {
    return {
      success: true,
      data: {
        sourceToken: sourceTokens?.actualToken.address,
        destinationToken: destinationTokens?.actualToken.address,
      },
      next: true,
    };
  }

  return {
    success: true,
    data: {
      sourceTokens,
      destinationTokens,
    },
    next: false,
  };
}

/**
 * Filters tokens based on the symbol.
 */
function filterTokens(tokens?: DeBridgeTokens[], symbol?: string) {
  if (!tokens || !symbol) return tokens;
  const searchLower = symbol.toLowerCase();
  return tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchLower) ||
      token.symbol.toLowerCase().includes(searchLower),
  );
}

/**
 * Formats the token list for display.
 */
function formatTokenList(tokens?: DeBridgeTokens[], symbol?: string) {
  if (!tokens) return;
  const findActualToken = tokens.find(
    (t) => t.symbol.toLowerCase() === symbol?.toLowerCase(),
  );
  let tokenList = "";
  if (findActualToken) {
    tokenList = [findActualToken]
      .map((t, i) => `${i + 1}. ${t.symbol.toUpperCase()} - ${t.address}`)
      .join("\n");
  } else {
    tokenList = tokens
      .slice(0, 5)
      .map((t, i) => `${i + 1}. ${t.symbol.toUpperCase()} - ${t.address}`)
      .join("\n");
  }
  return { tokenList, actualToken: findActualToken };
}
