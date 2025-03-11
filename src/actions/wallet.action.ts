"use server";

import { Wallet, Mnemonic, HDNodeWallet } from "ethers";
import crypto from "crypto";
import { verifySession } from "@/lib/dal";
import { decodeString, encodeString } from "@/lib/encrypt";
import { WALLET_SECRET, ENCRYPTION_KEY } from "@/config/env.config";
import { Hex, toHex } from "viem";
import {
  SavedWallet,
  WalletCredential,
  WallioWallet,
} from "@/types/wallet.type";
import { generateId, getRandomItem } from "@/lib/helpers";
import { avatarMap } from "@/assets/avatar";
import { isoBase64URL } from "@simplewebauthn/server/helpers";

export const generateMasterSeed = async (cred: WalletCredential) => {
  const { isAuth, userId } = await verifySession();

  if (!isAuth) {
    throw new Error("User is not authenticated");
  }

  const salt = toHex(
    crypto
      .createHash("sha256")
      .update(`${userId}-${cred.pubKey}`)
      .digest("hex"),
  );
  const keyToEncode = JSON.stringify({
    id: userId,
    salt,
    cred,
    secret: WALLET_SECRET,
  });
  const key = encodeString(keyToEncode, true, ENCRYPTION_KEY);
  const cryptoData = JSON.stringify({ id: userId, key, salt });
  const seed = crypto.createHash("sha256").update(cryptoData).digest();
  const base64Url = isoBase64URL.fromBuffer(seed);
  return base64Url;
};

export const createWallet = async () => {
  const { isAuth, userId } = await verifySession();

  if (!isAuth) {
    throw new Error("User is not authenticated");
  }

  const salt = toHex(
    crypto.createHash("sha256").update(`${userId}`).digest("hex"),
  );
  const keyToEncode = JSON.stringify({
    id: userId,
    salt,
    secret: WALLET_SECRET,
  });
  const key = encodeString(keyToEncode, true, ENCRYPTION_KEY);
  const cryptoData = JSON.stringify({ id: userId, key, salt });

  const seed = crypto.createHash("sha256").update(cryptoData).digest();
  const phrase = Mnemonic.entropyToPhrase(Uint8Array.from(seed));
  const wallet = Wallet.fromPhrase(phrase);
  const encryptedWallet = await encryptWallet(wallet, seed.toString("hex"));
  const encodedWallet = await encodeWallet(encryptedWallet.wallet, salt);

  return {
    encodedWallet,
    encryptedWallet: encryptedWallet.wallet,
    seed: seed.toString("hex"),
    address: wallet.address,
    salt,
  };
};

export const encryptWallet = async (wallet: HDNodeWallet, key: string) => {
  const encryptedWallet = await wallet.encrypt(key);
  return { wallet: encryptedWallet };
};

export const decryptWallet = async (encryptedWallet: string, key: string) => {
  return Wallet.fromEncryptedJsonSync(encryptedWallet, key);
};

export const encodeWallet = async (encryptedWallet: string, salt: string) => {
  const walletString = JSON.stringify({ encryptedWallet, salt });
  const encodedWallet = await encodeString(walletString, true, ENCRYPTION_KEY);
  return encodedWallet;
};

export const decodeWallet = async (encodedWallet: string) => {
  const { isAuth, userId } = await verifySession();
  if (!isAuth) {
    throw new Error("Unauthorized access");
  }

  const decodedWallet = await decodeString(encodedWallet, true, ENCRYPTION_KEY);
  const { encryptedWallet, salt } = JSON.parse(decodedWallet);
  const keyToEncode = JSON.stringify({
    id: userId,
    salt,
    secret: WALLET_SECRET,
  });
  const key = encodeString(keyToEncode, true, ENCRYPTION_KEY);
  const cryptoData = JSON.stringify({
    id: userId,
    key,
    salt,
  });

  const seed = crypto.createHash("sha256").update(cryptoData).digest();
  const wallet = await decryptWallet(encryptedWallet, seed.toString("hex"));
  return { decryptedWallet: JSON.stringify(wallet) };
};

export async function encodedData<T>(data: T): Promise<string> {
  const encodedData = await encodeString(
    JSON.stringify(data),
    true,
    ENCRYPTION_KEY,
  );
  return encodedData;
}

export async function encryptWalletData(
  data: WallioWallet,
): Promise<SavedWallet> {
  let key: string;
  if (data.type == "smart-wallet") {
    key = await encodeString(JSON.stringify(data.cred), true, ENCRYPTION_KEY);
    delete data.cred;
  } else if (data.type == "defi-wallet") {
    key = await encodeString(
      JSON.stringify(data.derivedFrom),
      true,
      ENCRYPTION_KEY,
    );
    delete data.derivedFrom;
  } else if (data.type == "imported") {
    key = await encodeString(
      JSON.stringify(data.privateKey),
      true,
      ENCRYPTION_KEY,
    );
    delete data.privateKey;
  }
  return { ...data, key };
}

export async function decryptWalletData(
  data: SavedWallet,
): Promise<WallioWallet> {
  const decodedKey = await decodeString(data.key, true, ENCRYPTION_KEY);
  delete data.key;
  const newData = {
    ...data,
    cred: undefined,
    derivedFrom: undefined,
    privateKey: undefined,
  };
  if (data.type == "smart-wallet") {
    newData.cred = JSON.parse(decodedKey);
  } else if (data.type == "defi-wallet") {
    newData.derivedFrom = JSON.parse(decodedKey);
  } else if (data.type == "imported") {
    newData.privateKey = JSON.parse(decodedKey);
  }
  return newData;
}

export async function makeNewWallet(
  data: Omit<Partial<WallioWallet>, "id" | "avatar" | "lastActiveAt">,
) {
  const { name, address, type, master, ...props } = data;
  const newWallet: WallioWallet = {
    id: generateId({ isUUID: true }),
    name,
    address,
    type,
    master,
    ...props,
    avatar: getRandomItem<string>(avatarMap),
    lastActiveAt: new Date(),
  };
  console.log(newWallet);
  return await encryptWalletData(newWallet);
}
