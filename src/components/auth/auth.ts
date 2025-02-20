import { postApi } from "@/actions/api.action";
import { verifyRegistration } from "@/actions/auth.action";
import { base64URLStringToPublicKey } from "@/lib/helpers";
import { apiRoutes } from "@/lib/routes";
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

export const initWebAuthLoginProcess = async (
  options: PublicKeyCredentialRequestOptionsJSON,
  email: string,
) => {
  const authJson = await startAuthentication({
    optionsJSON: options,
  });

  const response = await postApi<VerifiedAuthenticationResponseJSON>(
    apiRoutes.auth.verifyAuthentication,
    {
      options: JSON.stringify(authJson),
      email,
    },
  );
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

  const verifyRes = await verifyRegistration(JSON.stringify(regRes), email);

  if (verifyRes.status) {
    const webAuthData = verifyRes.data as WebAuthVerification;
    const publicKey = await base64URLStringToPublicKey(
      regRes.response.publicKey,
      false,
    );
    if (!publicKey) return;

    return {
      status: verifyRes.status,
      credentials: {
        id: webAuthData.registrationInfo?.credential.id ?? "",
        publicKey,
        rpId: webAuthData.registrationInfo?.rpID,
      },
    };

    // const account = toWebAuthnAccount({
    //   credential: {
    //     id: webAuthData.registrationInfo?.credential.id ?? "",
    //     publicKey,
    //   },
    //   rpId: webAuthData.registrationInfo?.rpID,
    // });
    // return account;
  }
};
