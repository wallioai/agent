import type { Address } from "abitype";
import { Assign, LocalAccount, Prettify, WalletClient } from "viem";
import {
  entryPoint07Abi,
  SmartAccount,
  SmartAccountImplementation,
  WebAuthnAccount,
} from "viem/account-abstraction";
import abi from "../abis/account.abi";
import factoryAbi from "../abis/factory.abi";

export type ToDexaSmartAccountParameters = {
  address?: Address | undefined;
  client: WalletClient;
  nonce?: bigint | undefined;
  owner: Address | LocalAccount | WebAuthnAccount;
};

export type ToDexaSmartAccountReturnType = Prettify<
  SmartAccount<DexaSmartAccountImplementation>
>;

export type DexaSmartAccountImplementation = Assign<
  SmartAccountImplementation<
    typeof entryPoint07Abi,
    "0.7",
    {
      abi: typeof abi;
      factory: { abi: typeof factoryAbi; address: Address };
    }
  >,
  {
    decodeCalls: NonNullable<SmartAccountImplementation["decodeCalls"]>;
  }
>;
