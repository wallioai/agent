import { isoBase64URL } from "@simplewebauthn/server/helpers";
import { PublicKey } from "ox";
export async function base64URLStringToPublicKey(
  base64PubKeyOrAttestation: string,
  isAttestation: boolean
): Promise<`0x${string}` | undefined> {
  const uint8ArrayKey = isoBase64URL.toBuffer(
    base64PubKeyOrAttestation,
    "base64url"
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
      ["verify"]
    );
    const publicKeyBuffer = new Uint8Array(
      await crypto.subtle.exportKey("raw", cryptoKey)
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
      ])
    );
    publicKey = PublicKey.toHex(credPubKey, {
      includePrefix: false,
    });
  }

  return publicKey;
}

export const isDev = process.env.NODE_ENV === "development";
