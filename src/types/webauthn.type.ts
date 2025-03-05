import { type VerifiedRegistrationResponse } from "@simplewebauthn/server";
import { Hex } from "viem";
import { string } from "zod";

export type WebAuthVerification = VerifiedRegistrationResponse & {
  accessToken: string;
  refreshToken: string;
  message: string;
  user: {
    address: string;
    id: string;
  };
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
  user: {
    address: string;
    id: string;
  };
};

export type AccountCredentials = {
  id: string;
  publicKey: Hex;
  rpId?: string;
  user: {
    address: string;
    id: string;
  };
};
