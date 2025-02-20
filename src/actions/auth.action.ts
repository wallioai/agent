"use server";

import { postApi, getApi } from "./api.action";
import {
  AccountCredentials,
  VerifiedAuthenticationResponseJSON,
  WebAuthVerification,
} from "@/types/webauthn.type";
import { transformError } from "@/types/api-response.type";
import { AuthenticationResponseJSON } from "@simplewebauthn/browser";
import { apiRoutes, routes } from "@/lib/routes";
import { CookieKeys } from "@/enums/cookie.enum";
import { createSession } from "@/lib/session";
import {
  REFRESH_SESSION_DURATION,
  REFRESH_SESSION_MAXAGE,
} from "@/config/session.config";
import { decodeString, encodeString } from "@/lib/encrypt";
import { ENCRYPTION_KEY } from "@/config/env.config";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

type InitRegType = {
  name: string;
  email: string;
  fromGoogle: boolean;
};

export async function initRegistration(data: InitRegType) {
  try {
    const response = await postApi<PublicKeyCredentialCreationOptionsJSON>(
      apiRoutes.auth.initRegistration,
      data,
    );
    return response;
  } catch (error) {
    return transformError(error);
  }
}

export async function verifyRegistration(options: string, email: string) {
  try {
    const response = await postApi<WebAuthVerification>(
      apiRoutes.auth.verifyRegistration,
      {
        options,
        email,
      },
    );
    return response;
  } catch (error) {
    return transformError(error);
  }
}

export async function initAuthentication(email: string) {
  try {
    const response = await getApi<PublicKeyCredentialRequestOptionsJSON>(
      apiRoutes.auth.initAuthentication(email),
    );
    return response;
  } catch (error) {
    return error;
  }
}

export async function verifyAuthenication(
  options: AuthenticationResponseJSON,
  email: string,
) {
  try {
    const response = await postApi<VerifiedAuthenticationResponseJSON>(
      apiRoutes.auth.verifyAuthentication,
      {
        options: JSON.stringify(options),
        email,
      },
    );
    return response;
  } catch (error) {
    return transformError(error);
  }
}

export async function encodeAccountCredentials(cred: AccountCredentials) {
  const encodedCredentials = await encodeString(
    JSON.stringify(cred),
    true,
    ENCRYPTION_KEY,
  );
  return encodedCredentials;
}

export async function decodeAccountCredentials(encodedCredentials: string) {
  const decodedCredentials = await decodeString(
    encodedCredentials,
    true,
    ENCRYPTION_KEY,
  );
  const data = JSON.parse(decodedCredentials);
  return data as AccountCredentials;
}

export async function isAuthenticated() {
  const cookie = (await cookies()).get(CookieKeys.ACCESS_TOKEN)?.value;

  if (!cookie) {
    redirect(routes.auth.login);
  }

  try {
    const parsedCookie: any = jwtDecode(cookie);
    const expires = new Date(parsedCookie.exp * 1000);
    if (expires < new Date()) {
      redirect(routes.auth.login);
    }
    return true;
  } catch (error) {
    redirect(routes.auth.login);
  }
}
