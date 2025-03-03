import { z } from "zod";
import { supportedChains } from "../constants";
import { zeroAddress } from "viem";

/**
 * Input schema for bridging tokens on deBridge
 */
export const bridgeTokenSchema = z.object({
  sourceChain: z
    .enum(supportedChains.map((sc) => sc) as [string, ...string[]])
    .describe("Chain name from where to execute the transaction"),
  sourceTokenAddress: z
    .string()
    .default(zeroAddress)
    .optional()
    .describe(
      "The token address that will be bridged. use default address if not provided",
    ),
  destinationChain: z
    .enum(supportedChains.map((sc) => sc) as [string, ...string[]])
    .describe("Chain name to where the source chain sends transaction"),
  destinationTokenAddress: z
    .string()
    .default(zeroAddress)
    .optional()
    .describe(
      "The token address that will be recieved after the bridge. use default address if not provided",
    ),
  to: z
    .string()
    .optional()
    .default(zeroAddress)
    .describe(`The address of the receiver. use default address if not provided.`),
  amount: z.string().describe("Amount of tokens in decimal format"),
  isConfirmed: z
    .boolean()
    .default(false)
    .describe("Never ask for confirmation except if I ask you to"),
});
