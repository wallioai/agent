import {
  isAddress,
  parseUnits,
  zeroAddress,
  encodeAbiParameters,
  Hex,
} from "viem";
import { Chain, ChainById, supportedChains } from "./constants";
import { z } from "zod";
import { bridgeTokenSchema } from "./schemas/bridge.schema";
import {
  CoingeckoChainCategoryId,
  CoingeckoPlatformId,
} from "../coingecko/constants";
import { Token } from "../coingecko/type";
import { LRUCache } from "lru-cache";
import { getChain } from "dexai";

export const validateDLNInputs = ({
  sourceChain,
  destinationChain,
  amount,
  to,
}: z.infer<typeof bridgeTokenSchema>) => {
  const srcChain = supportedChains.find((c) => c == sourceChain);
  const dstChain = supportedChains.find((c) => c == destinationChain);

  if (!srcChain) {
    return {
      success: false,
      errorMessage: `Unsupport source chain provided ${sourceChain}`,
    };
  }

  if (!dstChain) {
    return {
      success: false,
      errorMessage: `Unsupport destination chain provided ${sourceChain}`,
    };
  }

  if (!isAddress(to)) {
    return {
      success: false,
      errorMessage: `Invalid recievers wallet address`,
    };
  }

  if (parseInt(amount) <= 0) {
    return {
      success: false,
      errorMessage: `Enter a valid token amount to bridge`,
    };
  }

  return {
    success: true,
    data: {
      takeChainId: ChainById[dstChain],
      allowedTakerDst: "0x",
      externalCall: "0x",
      allowedCancelBeneficiarySrc: "0x",
      givePatchAuthoritySrc: "0x",
      referralCode: 31565,
      fromChain: srcChain,
      toChain: dstChain,
    },
  };
};

export const fetchSrcDestTokens = async ({
  toChain,
  fromChain,
}: {
  toChain: Chain;
  fromChain: Chain;
}) => {
  const fromCategory = CoingeckoChainCategoryId[fromChain];
  const toCategory = CoingeckoChainCategoryId[toChain];
  if (!fromCategory || !toCategory) {
    return {
      success: false,
      errorMessage: "Error getting chain category, please try again",
    };
  }

  const srcPlatformId = CoingeckoPlatformId[fromChain];
  const dstPlatformId = CoingeckoPlatformId[toChain];

  const chainTokeList = (id: string) =>
    `https://tokens.coingecko.com/${id}/all.json`;
  const tokensMetadata = (category: string) =>
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${category}&order=market_cap_desc&per_page=10&page=1`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const [srcTokens, destTokens, srcList, destList] = await Promise.all([
      fetch(tokensMetadata(fromCategory)).then((tokens) => tokens.json()),
      fetch(tokensMetadata(toCategory)).then((tokens) => tokens.json()),
      fetch(chainTokeList(srcPlatformId)).then((tokens) => tokens.json()),
      fetch(chainTokeList(dstPlatformId)).then((tokens) => tokens.json()),
    ]);
    clearTimeout(timeoutId);

    const srcChain = getChain(ChainById[fromChain].toString());
    const mappedSrcTokens = srcTokens.map(
      ({ id, symbol, name, current_price, market_cap }: Token) => {
        const cleanSymbol = symbol.replace(/[^a-zA-Z]/g, "");
        const token = srcList.tokens.find(
          (t) => t.symbol.toLowerCase() == cleanSymbol.toLowerCase(),
        );
        const isNative =
          cleanSymbol.toLowerCase() ==
          srcChain.nativeCurrency.symbol.toLowerCase();

        return {
          id,
          symbol: cleanSymbol,
          name,
          current_price,
          market_cap,
          address: isNative ? zeroAddress : (token?.address ?? ""),
          decimal: isNative
            ? srcChain.nativeCurrency.decimals
            : token?.decimals,
        } as Partial<Token>;
      },
    );

    const dstChain = getChain(ChainById[toChain].toString());
    console.log(dstChain);
    const mappedDestTokens = destTokens.map(
      ({ id, symbol, name, current_price, market_cap }: Token) => {
        const cleanSymbol = symbol.replace(/[^a-zA-Z]/g, "");
        const token = destList.tokens.find(
          (t) => t.symbol.toLowerCase() == cleanSymbol.toLowerCase(),
        );
        const isNative =
          cleanSymbol.toLowerCase() ==
          dstChain.nativeCurrency.symbol.toLowerCase();
        return {
          id,
          symbol: cleanSymbol,
          name,
          current_price,
          market_cap,
          address: isNative ? zeroAddress : (token?.address ?? ""),
          decimal: isNative
            ? dstChain.nativeCurrency.decimals
            : token?.decimals,
        } as Partial<Token>;
      },
    );

    return {
      success: true,
      data: {
        mappedSrcTokens,
        mappedDestTokens,
        srcTokens,
        destTokens,
      },
    };
  } catch (error) {
    if (error.name === "AbortError") {
      return {
        success: false,
        errorMessage: "Request timed out. Please try again.",
      };
    }
    return {
      success: false,
      errorMessage: `Error fetching token data: ${error.message}`,
    };
  }
};

export const validateSrcDestInput = async (
  args: z.infer<typeof bridgeTokenSchema> & {
    tokensCache: LRUCache<string, Token[]>;
    fromChain: Chain;
    toChain: Chain;
  },
) => {
  const destTokenId = args.tokensCache
    .get(args.destinationChain)
    .find((t) => t.address == args.destinationTokenAddress);
  if (!destTokenId) {
    return {
      success: false,
      errorMessage: "Select a destination token",
    };
  }

  const sourceTokenId = args.tokensCache
    .get(args.sourceChain)
    .find((t) => t.address == args.sourceTokenAddress);
  if (!sourceTokenId) {
    return {
      success: false,
      errorMessage: "Select a source token",
    };
  }

  const url = (id: string) => `https://api.coingecko.com/api/v3/coins/${id}`;
  const [srcToken, destToken] = await Promise.all([
    fetch(url(sourceTokenId.id)).then((tokens) => tokens.json()),
    fetch(url(destTokenId.id)).then((tokens) => tokens.json()),
  ]);

  if (!srcToken || !destToken) {
    return {
      success: false,
      errorMessage: "Error fetching token data",
    };
  }

  const srcPlatformId = CoingeckoPlatformId[args.fromChain];
  const dstPlatformId = CoingeckoPlatformId[args.toChain];
  const sourceCoinAddress = srcToken.platforms[srcPlatformId];
  const destinationCoinAddress = destToken.platforms[dstPlatformId];

  return {
    success: true,
    data: {
      sourceCoinAddress,
      destinationCoinAddress,
    },
  };
};

export const prepareTransaction = (
  args: z.infer<typeof bridgeTokenSchema> & {
    tokensCache: LRUCache<string, Token[]>;
  },
) => {
  try {
    const sourceObj = args.tokensCache.get(args.sourceChain);
    const destObj = args.tokensCache.get(args.destinationChain);

    console.log(sourceObj);
    console.log(destObj);

    const sourceToken = sourceObj?.find(
      (t) => t.address == args.sourceTokenAddress,
    );
    const destToken = destObj?.find(
      (t) => t.address == args.destinationTokenAddress,
    );

    if (!sourceToken || !destToken) {
      console.log("token not found");
      return {
        success: false,
        errorMessage: "Token not found",
      };
    }

    const amountInUsd =
      parseFloat(args.amount) *
      parseFloat(sourceToken.current_price.toString());

    const estTakeValueInUsd = (amountInUsd * (10000 - 8)) / 10000 - 6;

    const takeAmountInUint = estTakeValueInUsd / destToken.current_price;

    return {
      success: true,
      data: {
        giveTokenAddress: sourceToken.address,
        giveAmount: parseUnits(args.amount, sourceToken.decimal),
        takeTokenAddress: encodeAbiParameters(
          [{ type: "address" }],
          [destToken.address as Hex],
        ),
        takeAmount: parseUnits(takeAmountInUint.toString(), destToken.decimal),
        receiverDst: encodeAbiParameters(
          [{ type: "address" }],
          [args.to as Hex],
        ),
        orderAuthorityAddressDst: encodeAbiParameters(
          [{ type: "address" }],
          [args.to as Hex],
        ),
        amountInUsd,
        estTakeValueInUsd,
        takeAmountInUint,
        destToken,
        sourceToken,
        affiliateFee: "0x",
        permitEnvelope: "0x",
      },
    };
  } catch (error) {
    console.log(error);
    return { success: false, errorMessage: error.message };
  }
};
