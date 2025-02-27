import { supportedChains } from "./constants";

export const validateChain = <
  Props extends {
    sourceChain: string;
    destinationChain: string;
    tokenAddress: string;
  },
>({
  sourceChain,
  destinationChain,
  tokenAddress,
}: Props) => {
  if (!supportedChains.find((c) => c == sourceChain)) {
    return {
      success: false,
      errorMessage: `Unsupport source chain provided ${sourceChain}`,
    };
  }

  if (!supportedChains.find((c) => c == destinationChain)) {
    return {
      success: false,
      errorMessage: `Unsupport destination chain provided ${sourceChain}`,
    };
  }
};
