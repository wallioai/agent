import { toDexaSmartAccount } from "@/account/account/toDexaSmartAccount";
import { ToDexaSmartAccountReturnType } from "@/account/types/toDexaSmartAccount.type";
import { decryptWalletData, generateMasterSeed } from "@/actions/wallet.action";
import { SavedWallet } from "@/types/wallet.type";
import { isoUint8Array } from "@simplewebauthn/server/helpers";
import { HDAccount, Hex, PrivateKeyAccount, http } from "viem";
import { sepolia } from "viem/chains";
import {
  toWebAuthnAccount,
  toCoinbaseSmartAccount,
  type ToCoinbaseSmartAccountReturnType,
} from "viem/account-abstraction";
import { HDKey, hdKeyToAccount, privateKeyToAccount } from "viem/accounts";
import { publicClient, createCustomClient } from "@/clients/viem.client";

export const accountFromWallet = async (
  savedWallet: SavedWallet,
): Promise<
  ToCoinbaseSmartAccountReturnType | HDAccount | PrivateKeyAccount
> => {
  const wallet = await decryptWalletData(savedWallet);
  if (wallet.type == "smart-wallet") {
    return await toCoinbaseSmartAccount({
      client: createCustomClient(),
      owners: [
        toWebAuthnAccount({
          credential: {
            id: wallet.cred.id,
            publicKey: wallet.cred.pubKey as Hex,
          },
          rpId: wallet.cred.rpId,
        }),
      ],
    });
  } else if (wallet.type == "defi-wallet") {
    const base64Seed = await generateMasterSeed(wallet.derivedFrom);
    const masterSeed = isoUint8Array.fromUTF8String(base64Seed);
    const hdKey = HDKey.fromMasterSeed(masterSeed);
    return hdKeyToAccount(hdKey, { accountIndex: wallet.index });
  } else {
    return privateKeyToAccount(wallet.privateKey as Hex);
  }
};
