import { type VerifiedRegistrationResponse } from "@simplewebauthn/server";

export type WebAuthVerification = VerifiedRegistrationResponse & {
  message: string;
};
