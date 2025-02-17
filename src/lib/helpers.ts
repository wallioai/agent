import { isoBase64URL } from "@simplewebauthn/server/helpers";
import { PublicKey } from "ox";
export async function base64URLStringToPublicKey(
  value: string,
  attestationObject: string
): Promise<`0x${string}` | undefined> {
  try {
    const uint8ArrayKey = isoBase64URL.toBuffer(value, "base64url");
    const publicKeyBytes = new Uint8Array(uint8ArrayKey);
    const cryptoKey = await crypto.subtle.importKey(
      "spki",
      new Uint8Array(publicKeyBytes),
      {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: "SHA-256",
      },
      true,
      ["verify"]
    );
    const publicKeyBuffer = new Uint8Array(
      await crypto.subtle.exportKey("raw", cryptoKey)
    );
    const credentialPubK = PublicKey.from(publicKeyBuffer);
    const publicKey = PublicKey.toHex(credentialPubK, {
      includePrefix: false,
    });
    return publicKey;
  } catch (error) {
    // Fallback for 1Password Firefox Add-on restricts access to certain credential properties
    // so we need to use `attestationObject` to extract the public key.
    // https://github.com/passwordless-id/webauthn/issues/50#issuecomment-2072902094
    if ((error as Error).message !== "Permission denied to access object")
      throw error;

    const obj = isoBase64URL.toBuffer(attestationObject, "base64url");
    const data = new Uint8Array(obj);
    const coordinateLength = 0x20;
    const cborPrefix = 0x58;

    const findStart = (key: number) => {
      const coordinate = new Uint8Array([key, cborPrefix, coordinateLength]);
      for (let i = 0; i < data.length - coordinate.length; i++)
        if (coordinate.every((byte, j) => data[i + j] === byte))
          return i + coordinate.length;
      throw new Error("Credentials creation failed");
    };

    const xStart = findStart(0x21);
    const yStart = findStart(0x22);

    const credPubKey = PublicKey.from(
      new Uint8Array([
        0x04,
        ...data.slice(xStart, xStart + coordinateLength),
        ...data.slice(yStart, yStart + coordinateLength),
      ])
    );
    const publicKey = PublicKey.toHex(credPubKey, {
      includePrefix: false,
    });
    return publicKey;
  }
}

export const isDev = process.env.NODE_ENV === "development";
