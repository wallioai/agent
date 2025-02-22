"use server";

import { Wallet, Mnemonic, HDNodeWallet } from "ethers";
import crypto from "crypto";
import { verifySession } from "@/lib/dal";
import { decodeString, encodeString } from "@/lib/encrypt";
import { WALLET_SECRET, ENCRYPTION_KEY } from "@/config/env.config";
import { toHex } from "viem";

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
