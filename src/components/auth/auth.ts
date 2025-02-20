import { verifyAuthenication, verifyRegistration } from "@/actions/auth.action";
import { base64URLStringToPublicKey } from "@/lib/helpers";
import {
  startAuthentication,
  startRegistration,
  type PublicKeyCredentialRequestOptionsJSON,
  type PublicKeyCredentialCreationOptionsJSON,
} from "@simplewebauthn/browser";

export const initWebAuthLoginProcess = async (
  options: PublicKeyCredentialRequestOptionsJSON,
  email: string,
) => {
  const authJson = await startAuthentication({
    optionsJSON: options,
  });

  const response = await verifyAuthenication(authJson, email);
  if (response) {
    const authInfo = response.authenticationInfo;
    const publicKey = await base64URLStringToPublicKey(
      authInfo.attestationObject,
      true,
    );
    if (!publicKey) return;

    return {
      status: true,
      credentials: {
        id: authInfo.id,
        publicKey,
        rpId: authInfo.rpID,
      },
    };
  }
};

export const initWebAuthRegistration = async (
  options: PublicKeyCredentialCreationOptionsJSON,
  email: string,
) => {
  const regRes = await startRegistration({
    optionsJSON: options,
  });
  if (!regRes.response.publicKey || !regRes.response.attestationObject) return;

  const response = await verifyRegistration(JSON.stringify(regRes), email);
  if (response) {
    const publicKey = await base64URLStringToPublicKey(
      regRes.response.publicKey,
      false,
    );
    if (!publicKey) return;

    return {
      status: response.verified,
      credentials: {
        id: response.registrationInfo?.credential.id ?? "",
        publicKey,
        rpId: response.registrationInfo?.rpID,
      },
    };
  }
};
