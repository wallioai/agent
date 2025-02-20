import { postApi } from "@/actions/api.action";
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

  const response = await postApi<WebAuthVerification>(
    apiRoutes.auth.verifyRegistration,
    {
      options: JSON.stringify(regRes),
      email,
    },
  );
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
