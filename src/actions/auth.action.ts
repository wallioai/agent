"use server";

import { postApi, getApi } from "./api.action";
import {
  VerifiedAuthenticationResponseJSON,
  WebAuthVerification,
} from "@/types/webauthn.type";
import { transformError } from "@/types/api-response.type";
import { AuthenticationResponseJSON } from "@simplewebauthn/browser";
import { apiRoutes } from "@/lib/routes";
import { APP_KEY } from "@/config/env.config";
import { CookieKeys } from "@/enums/cookie.enum";
import { createSession } from "@/lib/session";
import {
  REFRESH_SESSION_DURATION,
  REFRESH_SESSION_MAXAGE,
} from "@/config/session.config";

type InitRegType = {
  name: string;
  email: string;
  fromGoogle: boolean;
};

export async function initRegistration(data: InitRegType) {
  try {
    const response = await postApi<PublicKeyCredentialCreationOptionsJSON>(
      apiRoutes.auth.initRegistration,
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
      apiRoutes.auth.verifyRegistration,
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
      apiRoutes.auth.initAuthentication(email)
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
    const response = await postApi<VerifiedAuthenticationResponseJSON>(
      apiRoutes.auth.verifyAuthentication,
      {
        options: JSON.stringify(options),
        email,
      }
    );
    if (response.status && response.statusCode === 201 && response.data) {
      const { accessToken, refreshToken } = response.data;
      await createSession(accessToken, CookieKeys.ACCESS_TOKEN);
      await createSession(
        refreshToken,
        CookieKeys.REFRESH_TOKEN,
        false,
        REFRESH_SESSION_MAXAGE,
        new Date(Date.now() + REFRESH_SESSION_DURATION)
      );
    }
    return response;
  } catch (error) {
    return transformError(error);
  }
}
