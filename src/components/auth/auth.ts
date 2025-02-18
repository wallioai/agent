import { verifyAuthenication, verifyRegistration } from "@/actions/auth.action";
import { base64URLStringToPublicKey } from "@/lib/helpers";
import {
  VerifiedAuthenticationResponseJSON,
  WebAuthVerification,
} from "@/types/webauthn.type";
import {
  startAuthentication,
  startRegistration,
  type PublicKeyCredentialRequestOptionsJSON,
  type PublicKeyCredentialCreationOptionsJSON,
} from "@simplewebauthn/browser";
import { toWebAuthnAccount } from "viem/account-abstraction";

export const initWebAuthLoginProcess = async (
  options: PublicKeyCredentialRequestOptionsJSON,
  email: string
) => {
  const authJson = await startAuthentication({
    optionsJSON: options,
  });

  const verifyRes = await verifyAuthenication(authJson, email);
  if (verifyRes.status) {
    const webAuthData = verifyRes.data as VerifiedAuthenticationResponseJSON;
    const authInfo = webAuthData.authenticationInfo;
    const publicKey = await base64URLStringToPublicKey(
      authInfo.attestationObject,
      true
    );
    if (!publicKey) return;

    const account = toWebAuthnAccount({
      credential: {
        id: authInfo.id,
        publicKey,
      },
      rpId: authInfo.rpID,
    });
    return account;
  }
};

export const initWebAuthRegistration = async (
  options: PublicKeyCredentialCreationOptionsJSON,
  email: string
) => {
  const regRes = await startRegistration({
    optionsJSON: options,
  });
  if (!regRes.response.publicKey || !regRes.response.attestationObject) return;

  const verifyRes = await verifyRegistration(JSON.stringify(regRes), email);

  if (verifyRes.status) {
    const webAuthData = verifyRes.data as WebAuthVerification;
    const publicKey = await base64URLStringToPublicKey(
      regRes.response.publicKey,
      false
    );
    if (!publicKey) return;

    const account = toWebAuthnAccount({
      credential: {
        id: webAuthData.registrationInfo?.credential.id ?? "",
        publicKey,
      },
      rpId: webAuthData.registrationInfo?.rpID,
    });
    return account;
  }
};
