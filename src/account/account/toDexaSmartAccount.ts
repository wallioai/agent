import {
  BaseError,
  decodeFunctionData,
  encodeAbiParameters,
  encodeFunctionData,
  Hash,
  hashMessage,
  hashTypedData,
  Hex,
  LocalAccount,
  pad,
  parseEther,
  stringToHex,
  TypedData,
  TypedDataDefinition,
} from "viem";
import type { Address } from "abitype";
import {
  ToDexaSmartAccountParameters,
  ToDexaSmartAccountReturnType,
} from "../types/toDexaSmartAccount.type";
import {
  entryPoint07Abi,
  entryPoint07Address,
  getUserOperationHash,
  toSmartAccount,
  WebAuthnAccount,
} from "viem/account-abstraction";
import factoryAbi from "../abis/factory.abi";
import abi from "../abis/account.abi";
import { readContract } from "viem/actions";
import * as Signature from "ox/Signature";
import type * as WebAuthnP256 from "ox/WebAuthnP256";

export async function toDexaSmartAccount(
  parameters: ToDexaSmartAccountParameters
): Promise<ToDexaSmartAccountReturnType> {
  const { client, owner: account, nonce = parseEther("0") } = parameters;

  let address = parameters.address;

  const entryPoint = {
    abi: entryPoint07Abi,
    address: entryPoint07Address,
    version: "0.7",
  } as const;
  const factory = {
    abi: factoryAbi,
    address: "0x141631a377A18AcbcFC365fFd8F9d97232034502",
  } as const;

  const owners_byte = (() => {
    if (typeof account === "string") return pad(account);
    if (account.type === "webAuthn") return account.publicKey;
    if (account.type === "local") return pad(account.address);
    throw new BaseError("invalid owner type");
  })();

  const owner = (() => {
    const owner = account;
    if (typeof owner === "string")
      return { address: owner, type: "address" } as const;
    return owner;
  })();

  return toSmartAccount({
    client,
    entryPoint,
    extend: { abi, factory },

    async decodeCalls(data) {
      const result = decodeFunctionData({
        abi,
        data,
      });

      if (result.functionName === "execute")
        return [
          { to: result.args[0], value: result.args[1], data: result.args[2] },
        ];
      if (result.functionName === "executeBatch") {
        const [dests, values, funcs] = result.args;
        return dests.map((dest, i) => ({
          to: dest,
          value: values[i],
          data: funcs[i],
        }));
      }
      throw new BaseError(
        `unable to decode calls for "${result.functionName}"`
      );
    },

    async encodeCalls(calls) {
      if (calls.length === 1)
        return encodeFunctionData({
          abi,
          functionName: "execute",
          args: [
            calls[0].to,
            calls[0].value ?? BigInt(0),
            calls[0].data ?? "0x",
          ],
        });
      return encodeFunctionData({
        abi,
        functionName: "executeBatch",
        args: [
          calls.map((call) => call.to),
          calls.map((call) => call.value ?? BigInt(0)),
          calls.map((call) => call.data ?? "0x"),
        ],
      });
    },

    async getAddress() {
      address ??= await readContract(client, {
        ...factory,
        functionName: "getAddress",
        args: [owners_byte, nonce],
      });
      return address;
    },

    async getFactoryArgs() {
      const factoryData = encodeFunctionData({
        abi: factory.abi,
        functionName: "createAccount",
        args: [owners_byte, nonce],
      });
      return { factory: factory.address, factoryData };
    },

    async getStubSignature() {
      if (owner.type === "webAuthn")
        return "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000170000000000000000000000000000000000000000000000000000000000000001949fc7c88032b9fcb5f6efc7a7b8c63668eae9871b765e23123bb473ff57aa831a7c0d9276168ebcc29f2875a0239cffdf2a9cd1c2007c5c77c071db9264df1d000000000000000000000000000000000000000000000000000000000000002549960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a7b2274797065223a22776562617574686e2e676574222c226368616c6c656e6765223a2273496a396e6164474850596759334b7156384f7a4a666c726275504b474f716d59576f4d57516869467773222c226f726967696e223a2268747470733a2f2f7369676e2e636f696e626173652e636f6d222c2263726f73734f726967696e223a66616c73657d00000000000000000000000000000000000000000000";
      return "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c" as Hex;
    },

    async sign(parameters) {
      const address = await this.getAddress();

      const hash = toReplaySafeHash({
        address,
        chainId: client.chain!.id,
        hash: parameters.hash,
      });

      if (owner.type === "address") throw new Error("owner cannot sign");
      const signature = await sign({ hash, owner });
      return signature;
    },

    async signMessage(parameters) {
      const { message } = parameters;
      const address = await this.getAddress();

      const hash = toReplaySafeHash({
        address,
        chainId: client.chain!.id,
        hash: hashMessage(message),
      });

      if (owner.type === "address") throw new Error("owner cannot sign");
      const signature = await sign({ hash, owner });

      return signature;
    },

    async signTypedData(parameters) {
      const { domain, types, primaryType, message } =
        parameters as TypedDataDefinition<TypedData, string>;
      const address = await this.getAddress();

      const hash = toReplaySafeHash({
        address,
        chainId: client.chain!.id,
        hash: hashTypedData({
          domain,
          message,
          primaryType,
          types,
        }),
      });

      if (owner.type === "address") throw new Error("owner cannot sign");
      const signature = await sign({ hash, owner });

      return signature;
    },

    async signUserOperation(parameters) {
      const { chainId = client.chain!.id, ...userOperation } = parameters;

      const address = await this.getAddress();
      const hash = getUserOperationHash({
        chainId,
        entryPointAddress: entryPoint.address,
        entryPointVersion: entryPoint.version,
        userOperation: {
          ...(userOperation as any),
          sender: address,
        },
      });

      if (owner.type === "address") throw new Error("owner cannot sign");
      const signature = await sign({ hash, owner });
      return signature;
    },

    userOperation: {
      async estimateGas(userOperation) {
        if (owner.type !== "webAuthn") return;

        // Accounts with WebAuthn owner require a minimum verification gas limit of 800,000.
        return {
          verificationGasLimit: BigInt(
            Math.max(
              Number(userOperation.verificationGasLimit ?? parseEther("0")),
              800_000
            )
          ),
        };
      },
    },
  });
}

/** @internal */
export async function sign({
  hash,
  owner,
}: {
  hash: Hash;
  owner: LocalAccount | WebAuthnAccount;
}) {
  // WebAuthn Account (Passkey)
  if (owner.type === "webAuthn") {
    const { signature, webauthn } = await owner.sign({
      hash,
    });
    return toWebAuthnSignature({ signature, webauthn });
  }

  if (owner.sign) return owner.sign({ hash });

  throw new BaseError("`owner` does not support raw sign.");
}

/** @internal */
export function toReplaySafeHash({
  address,
  chainId,
  hash,
}: {
  address: Address;
  chainId: number;
  hash: Hash;
}) {
  return hashTypedData({
    domain: {
      chainId,
      name: "Dexa Smart Wallet",
      verifyingContract: address,
      version: "1",
    },
    types: {
      DexaSmartWalletMessage: [
        {
          name: "hash",
          type: "bytes32",
        },
      ],
    },
    primaryType: "DexaSmartWalletMessage",
    message: {
      hash,
    },
  });
}

/** @internal */
export function toWebAuthnSignature({
  webauthn,
  signature,
}: {
  webauthn: WebAuthnP256.SignMetadata;
  signature: Hex;
}) {
  const { r, s } = Signature.fromHex(signature);
  return encodeAbiParameters(
    [
      {
        components: [
          {
            name: "authenticatorData",
            type: "bytes",
          },
          { name: "clientDataJSON", type: "bytes" },
          { name: "challengeIndex", type: "uint256" },
          { name: "typeIndex", type: "uint256" },
          {
            name: "r",
            type: "uint256",
          },
          {
            name: "s",
            type: "uint256",
          },
        ],
        type: "tuple",
      },
    ],
    [
      {
        authenticatorData: webauthn.authenticatorData,
        clientDataJSON: stringToHex(webauthn.clientDataJSON),
        challengeIndex: BigInt(webauthn.challengeIndex),
        typeIndex: BigInt(webauthn.typeIndex),
        r,
        s,
      },
    ]
  );
}
