import { isAddress } from "viem";
import { DLNInternalId, supportedChains } from "./constants";
import { z } from "zod";
import { bridgeTokenSchema } from "./schemas/bridge.schema";
import { Chain, ChainById } from "wallioai-kit";
import { type DeBridgeTokenResponse, type DeBridgeTokens } from "./type";

export const validateDLNInputs = ({
  sourceChain,
  destinationChain,
  amount,
  to,
}: z.infer<typeof bridgeTokenSchema>) => {
  const srcChain = supportedChains.find(c => c == sourceChain);
  const dstChain = supportedChains.find(c => c == destinationChain);

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

export const fetchTokens = async ({ chain }: { chain: Chain }) => {
  const debridgeId = DLNInternalId[chain];
  if (!debridgeId) {
    return {
      success: false,
      errorMessage: "Error getting chain category, please try again",
    };
  }

  const chainTokeList = (id: string) =>
    `https://dln.debridge.finance/v1.0/token-list?chainId=${id}`;

  try {
    const tokenList = await fetch(chainTokeList(debridgeId)).then(
      tokens => tokens.json() as Promise<DeBridgeTokenResponse>,
    );

    const tokenObject = tokenList.tokens;
    const mappedTokens = Object.keys(tokenObject).map((key, i) => {
      const value = tokenObject[key];
      return transformToken(value);
    });

    return {
      success: true,
      tokens: mappedTokens,
    };
  } catch (error: any) {
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
    symbol: value.symbol.replace(/[^a-zA-Z]/g, "").toUpperCase(),
    name: value.name,
    address: value.address,
    decimals: value.decimals,
    logoURI: value.logoURI,
  } as DeBridgeTokens;
}
