import { type VerifiedRegistrationResponse } from "@simplewebauthn/server";
import { Hex } from "viem";

export type WebAuthVerification = VerifiedRegistrationResponse & {
  accessToken: string;
  refreshToken: string;
  message: string;
};

export type VerifiedAuthenticationResponseJSON = {
  accessToken: string;
  refreshToken: string;
  message: string;
  verified: boolean;
  authenticationInfo: {
    id: string;
    rpID: string;
    publicKey: string;
    attestationObject: string;
  };
};

export type AccountCredentials = {
  id: string;
  publicKey: Hex;
  rpId?: string;
};
