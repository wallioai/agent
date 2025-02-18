"use server";

import { toHex, toBytes, fromHex } from "viem";
import * as crypto from "crypto";
import * as argon2 from "argon2";

export async function encodeString(
  value: string,
  withCredentials: boolean = false,
  key?: string
): Promise<string> {
  const data = btoa(toHex(toBytes(value)));
  return withCredentials && key ? await encrypt(data, key) : data;
}

export async function decodeString(
  value: string,
  withCredentials: boolean = false,
  key?: string
): Promise<string> {
  const decode = (value: string) =>
    fromHex(atob(value) as `0x${string}`, "string");
  if (withCredentials && key) {
    const decryptedValue = await decrypt(value, key);
    return decode(decryptedValue);
  }
  return decode(value);
}

// Generate a random 16-byte IV
function generateIv(): Buffer {
  return crypto.randomBytes(16);
}

// Generate a random 32-byte key
export async function generateKey(
  password: string,
  salt: string
): Promise<Buffer> {
  const hash = await argon2.hash(password, {
    salt: Buffer.from(salt, "hex"),
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    hashLength: 32,
    raw: true, // Return raw bytes instead of the encoded hash
  });
  return Buffer.from(hash);
}

export async function encrypt(text: string, password: string): Promise<string> {
  const iv = generateIv();
  const salt = crypto.randomBytes(16).toString("hex");
  const key = await generateKey(password, salt);
  const cipher = crypto.createCipheriv(
    "aes-256-gcm",
    Uint8Array.from(key),
    Uint8Array.from(iv)
  );
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  const tag = cipher.getAuthTag().toString("hex");
  return `${iv.toString("hex")}:${salt}:${encrypted}:${tag}`; // Combine IV and encrypted text
}

export const decrypt = async (
  encryptedData: string,
  password: string
): Promise<string> => {
  const [ivHex, salt, encrypted, tag] = encryptedData.split(":");
  const iv = Uint8Array.from(Buffer.from(ivHex, "hex"));
  const key = await generateKey(password, salt);
  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    Uint8Array.from(key),
    iv
  );
  decipher.setAuthTag(Uint8Array.from(Buffer.from(tag, "hex")));
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};
