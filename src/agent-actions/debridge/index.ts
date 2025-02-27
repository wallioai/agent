import z from "zod";
import { bridgeTokenSchema } from "./schemas/bridge.schema";
import { evm } from "@debridge-finance/desdk";
import { parseEther, zeroAddress } from "viem";
import { Flags } from "@debridge-finance/desdk/lib/evm";
import { debridgeAbi } from "./abis/deBridgeAbi";
import { bscGreenfield } from "viem/chains";
import { AdapterProvider, UseFunction } from "dexai/adapters";
import { ViemAccount, BaseAccount } from "dexai/accounts";

/**
 * DeBridgeAdapterProvider is an adapter provider that enables user seamlessly bridge tokens.
 * This provider provides the ability for user to bridge token from one chain to another.
 */
export class DeBridgeAdapterProvider extends AdapterProvider<BaseAccount> {
  constructor() {
    super("debridge", []);
  }

  @UseFunction({
    name: "bridge_token",
    description: `
    Bridge a token from one network chain to another.
    
    Required Inputs:
    - sourceChain
    - destinationChain
    - to : default address is ${zeroAddress}
    - tokenAddress : default address is ${zeroAddress}
    - amount
    `,
    schema: bridgeTokenSchema,
  })
  async bridgeToken(
    account: ViemAccount,
    args: z.infer<typeof bridgeTokenSchema>,
  ) {
    try {
      console.log("bridgeToken", args.sourceChain);
      console.log(args.tokenAddress);

      if (args.to == zeroAddress) {
        args.to = account.getAddress();
      }

      if (!args.tokenAddress) {
        console.log("no token found");
        return "no token";
      }

      const message = new evm.Message({
        tokenAddress: args.tokenAddress,
        amount: parseEther(args.amount),
        chainIdTo: "56",
        receiver: args.to,
        autoParams: new evm.SendAutoParams({
          executionFee: "0",
          fallbackAddress: args.to,
          flags: new Flags(),
          data: "0x",
        }),
      });
      const argsForSend = message.getEncodedArgs();
      console.log(argsForSend);
      return argsForSend;
      // account.writeContract({
      //   abi: debridgeAbi,
      //   functionName: "send",
      //   args: argsForSend,
      //   address: "0x",
      //   chain: bscGreenfield,
      // });
    } catch (error) {
      console.log(error);
    }
  }
}

/**
 * Factory function to create a new DeBridgeAdapterProvider instance.
 * @returns A new instance of DeBridgeAdapterProvider.
 */
export const deBridgetAdapterProvider = () => new DeBridgeAdapterProvider();
