"use server";

import { postApi, getApi } from "./api.action";
import { WebAuthVerification } from "@/types/webauthn.type";
import { transformError } from "@/types/api-response.type";
import { AuthenticationResponseJSON } from "@simplewebauthn/browser";

type InitRegType = {
  name: string;
  email: string;
  fromGoogle: boolean;
};
export async function initRegistration(data: InitRegType) {
  try {
    const response = await postApi<PublicKeyCredentialCreationOptionsJSON>(
      "auth/register/webauthn",
      data
    );
    return response;
  } catch (error) {
    return transformError(error);
  }
}

export async function verifyRegistration(options: string, email: string) {
  try {
    const response = await postApi<WebAuthVerification>(
      "auth/register/webauthn/verify",
      {
        options,
        email,
      }
    );
    return response;
  } catch (error) {
    return transformError(error);
  }
}

export async function initAuthentication(email: string) {
  try {
    const response = await getApi<PublicKeyCredentialRequestOptionsJSON>(
      `auth/login/webauthn/${email}`
    );
    return response;
  } catch (error) {
    return transformError(error);
  }
}

export async function verifyAuthenication(
  options: AuthenticationResponseJSON,
  email: string
) {
  try {
    const response = await postApi<WebAuthVerification>(
      "auth/login/webauthn/verify",
      {
        options,
        email,
      }
    );
    return response;
  } catch (error) {
    return transformError(error);
  }
}
