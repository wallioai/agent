import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const BridgeTokenSchema = z.object({
  srcChainId: z.number().describe("The chainId of the token to bridge"),
  srcTokenAddress: z
    .string()
    .describe("The token address that will be bridged"),
  dstChainId: z.number().describe("The chainId of the token to recieve"),
  dstTokenAddress: z
    .string()
    .describe("The token address that will be recieved"),
});

export const bridgeSchemaResolver = zodResolver(BridgeTokenSchema);
