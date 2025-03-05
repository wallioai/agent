import { isoBase64URL } from "@simplewebauthn/server/helpers";
import { PublicKey } from "ox";
import ShortUniqueId from "short-unique-id";
import mongoose from "mongoose";

export const generateId = ({
  isUUID = false,
  length = 6,
  ...prop
}: Partial<ShortUniqueId.ShortUniqueIdOptions> & { isUUID?: boolean }) => {
  const uid = new ShortUniqueId({ length, ...prop });
  return isUUID ? uid.stamp(32) : uid.randomUUID();
};

export async function base64URLStringToPublicKey(
  base64PubKeyOrAttestation: string,
  isAttestation: boolean,
): Promise<`0x${string}` | undefined> {
  const uint8ArrayKey = isoBase64URL.toBuffer(
    base64PubKeyOrAttestation,
    "base64url",
  );
  const publicKeyBytes = new Uint8Array(uint8ArrayKey);
  let publicKey: `0x${string}`;

  if (!isAttestation) {
    const cryptoKey = await crypto.subtle.importKey(
      "spki",
      new Uint8Array(publicKeyBytes),
      {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: "SHA-256",
      },
      true,
      ["verify"],
    );
    const publicKeyBuffer = new Uint8Array(
      await crypto.subtle.exportKey("raw", cryptoKey),
    );
    const credentialPubK = PublicKey.from(publicKeyBuffer);
    publicKey = PublicKey.toHex(credentialPubK, {
      includePrefix: false,
    });
  } else {
    const coordinateLength = 0x20;
    const cborPrefix = 0x58;

    const findStart = (key: number) => {
      const coordinate = new Uint8Array([key, cborPrefix, coordinateLength]);
      for (let i = 0; i < publicKeyBytes.length - coordinate.length; i++)
        if (coordinate.every((byte, j) => publicKeyBytes[i + j] === byte))
          return i + coordinate.length;
      throw new Error("Credentials creation failed");
    };

    const xStart = findStart(0x21);
    const yStart = findStart(0x22);

    const credPubKey = PublicKey.from(
      new Uint8Array([
        0x04,
        ...publicKeyBytes.slice(xStart, xStart + coordinateLength),
        ...publicKeyBytes.slice(yStart, yStart + coordinateLength),
      ]),
    );
    publicKey = PublicKey.toHex(credPubKey, {
      includePrefix: false,
    });
  }

  return publicKey;
}

export function toObjectId(value: string) {
  return new mongoose.Types.ObjectId(value);
}

export const isDev = process.env.NODE_ENV === "development";

export function formatWalletAddress(
  walletAddress: string,
  separator?: string,
  startAt?: number,
  endAt?: number,
) {
  if (typeof walletAddress !== "string" || walletAddress.length < 6) {
    return "Invalid wallet address";
  }

  const prefix = startAt
    ? walletAddress.substring(0, startAt)
    : walletAddress.substring(0, 5);
  const suffix = endAt
    ? walletAddress.substring(walletAddress.length - endAt)
    : walletAddress.substring(walletAddress.length - 4);
  const div = separator ? separator : "...";

  return `${prefix}${div}${suffix}`;
}

export function getRandomItem<T>(arr: T[]) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array");
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
