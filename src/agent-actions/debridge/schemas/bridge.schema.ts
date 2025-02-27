import { z } from "zod";
import { Chain, supportedChains } from "../constants";
import { zeroAddress } from "viem";

// Define token addresses for each chain
const tokenAddressesByChain = {
  [Chain.BNBCHAIN]: {
    BNB: zeroAddress,
    USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  },
  [Chain.POLYGON]: {
    MATIC: zeroAddress,
    USDC: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    DAI: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  },
};

/**
 * Input schema for bridging tokens on deBridge
 */
export const bridgeTokenSchema = z
  .object({
    sourceChain: z
      .enum(supportedChains.map((sc) => sc) as [string, ...string[]])
      .describe("Chain name from where to execute the transaction"),
    destinationChain: z
      .enum(supportedChains.map((sc) => sc) as [string, ...string[]])
      .describe("Chain name to where the source chain sends transaction"),
    to: z
      .string()
      .optional()
      .default(zeroAddress)
      .describe(`The address of the receiver`),
    tokenAddress: z
      .string()
      .default(zeroAddress)
      .optional()
      .describe("The token address that is involved in the transaction."),
    amount: z.string().describe("Amount of tokens in decimal format"),
  })
  // .refine(
  //   (data) => {
  //     console.log("Data Here", data);
  //     // Get the token addresses for the selected sourceChain
  //     const tokenAddresses = tokenAddressesByChain[data.sourceChain];
  //     if (!tokenAddresses) {
  //       throw new Error(`Unsupported chain: ${data.sourceChain}`);
  //     }

  //     // If tokenAddress is provided, validate it against the chain's token addresses
  //     if (data.tokenAddress) {
  //       return Object.values(tokenAddresses).includes(data.tokenAddress);
  //     }

  //     // If tokenAddress is not provided, it's valid
  //     return true;
  //   },
  //   {
  //     message: "Invalid token address for the selected chain",
  //     path: ["tokenAddress"],
  //   },
  // )
  // .transform((data) => {
  //   // If tokenAddress is not provided, set a default token address for the chain
  //   if (!data.tokenAddress) {
  //     const tokenAddresses = tokenAddressesByChain[data.sourceChain];
  //     if (tokenAddresses) {
  //       data.tokenAddress = tokenAddresses.USDC; // Default to USDC
  //     } else {
  //       data.tokenAddress = zeroAddress; // Fallback to zeroAddress
  //     }
  //   }
  //   return data;
  // });
