import { type VerifiedRegistrationResponse } from "@simplewebauthn/server";

export type WebAuthVerification = VerifiedRegistrationResponse & {
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
