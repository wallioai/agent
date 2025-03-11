import { isAddress } from "viem";
import { Chain, ChainById, DLNInternalId, supportedChains } from "./constants";
import { z } from "zod";
import { bridgeTokenSchema } from "./schemas/bridge.schema";
import { DeBridgeTokenResponse, DeBridgeTokens } from "./type";

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

  if (!(parseFloat(amount) > 0)) {
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
  filter,
}: {
  toChain: Chain;
  fromChain: Chain;
  filter?: {
    srcAddress?: string;
    dstAddress?: string;
  };
}) => {
  const debridgeIdSrc = DLNInternalId[fromChain];
  const debridgeIdDst = DLNInternalId[toChain];
  if (!debridgeIdDst || !debridgeIdSrc) {
    return {
      success: false,
      errorMessage: "Error getting chain category, please try again",
    };
  }

  const chainTokeList = (id: string) =>
    `https://dln.debridge.finance/v1.0/token-list?chainId=${id}`;

  console.log("HERE");

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const [srcTokens, destTokens] = await Promise.all([
      fetch(chainTokeList(debridgeIdSrc)).then(
        (tokens) => tokens.json() as Promise<DeBridgeTokenResponse>,
      ),
      fetch(chainTokeList(debridgeIdDst)).then(
        (tokens) => tokens.json() as Promise<DeBridgeTokenResponse>,
      ),
    ]);
    clearTimeout(timeoutId);

    const srcTokenObject = srcTokens.tokens;
    const sourceFilter = srcTokenObject[filter?.srcAddress];
    const mappedSrcTokens = sourceFilter
      ? [transformToken(sourceFilter)]
      : Object.keys(srcTokenObject)
          .map((key, i) => {
            const value = srcTokenObject[key];
            return transformToken(value);
          })
          .slice(0, 5);

    const dstTokenObject = destTokens.tokens;
    const dstFilter = dstTokenObject[filter?.dstAddress];
    const mappedDestTokens = dstFilter
      ? [transformToken(dstFilter)]
      : Object.keys(dstTokenObject)
          .map((key, i) => {
            const value = dstTokenObject[key];
            return transformToken(value);
          })
          .slice(0, 5);

    return {
      success: true,
      data: {
        mappedSrcTokens,
        mappedDestTokens,
      },
    };
  } catch (error: any) {
    console.log(error);
    if (error.name === "AbortError") {
      return {
        success: false,
        errorMessage: "Request timed out. Please try again.",
      };
    }
    return {
      success: false,
      errorMessage: `Error fetching token data`,
    };
  }
};

function transformToken(value: DeBridgeTokens) {
  return {
    symbol: value.symbol.toUpperCase(),
    name: value.name,
    address: value.address,
    decimals: value.decimals,
    logoURI: value.logoURI,
  } as DeBridgeTokens;
}
