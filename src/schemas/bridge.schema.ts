import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const BridgeTokenSchema = z.object({
  srcChainId: z.number().describe("The chainId of the token to bridge"),
  srcTokenAddress: z
    .string()
    .describe("The token address that will be bridged"),
  srcAmount: z.string().describe("Amount to bridge"),
  dstChainId: z.number().describe("The chainId of the token to recieve"),
  dstTokenAddress: z
    .string()
    .describe("The token address that will be recieved"),
  dstAmount: z.string().describe("Amount recipient will get"),
  recipient: z.string().describe("Wallet address of the reciever"),
});

export const bridgeSchemaResolver = zodResolver(BridgeTokenSchema);
