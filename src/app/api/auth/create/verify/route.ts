import { ORIGIN, RP_ID } from "@/config/env.config";
import { LoginWebAuthSchema as VerifyWebAuthSchema } from "@/schemas/login.schema";
import { NextRequest, NextResponse } from "next/server";
import {
  RegistrationResponseJSON,
  verifyRegistrationResponse,
} from "@simplewebauthn/server";
import { isoBase64URL } from "@simplewebauthn/server/helpers";
import { createSession, encrypt } from "@/lib/session";
import { CookieKeys } from "@/enums/cookie.enum";
import { z } from "zod";
import webAuthService from "@/db/repo/webAuthService";
import userService from "@/db/repo/userService";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, options } = VerifyWebAuthSchema.parse(body);

    if (!RP_ID || !ORIGIN) {
      return NextResponse.json(
        { error: "rpId and origin is required" },
        { status: 401 },
      );
    }

    const [webAuth, user] = await Promise.all([
      webAuthService.findOne({ email: email.toLowerCase() }),
      userService.findOne({ email: email.toLowerCase() }),
    ]);

    if (!webAuth || !user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    const parseOptions = JSON.parse(options) as RegistrationResponseJSON;
    const response = await verifyRegistrationResponse({
      response: parseOptions,
      expectedChallenge: webAuth.challenge ?? "",
      expectedOrigin: ORIGIN,
      expectedRPID: RP_ID,
    });

    if (!response.verified || !response.registrationInfo) {
      return NextResponse.json(
        { error: "Invalid registration data" },
        { status: 401 },
      );
    }

    const publicKey = isoBase64URL.fromBuffer(
      response.registrationInfo.credential.publicKey,
    );
    await webAuthService.update(
      { email: email.toLowerCase() },
      {
        id: response.registrationInfo.credential.id,
        publicKey,
        challenge: null,
        attestationObject: isoBase64URL.fromBuffer(
          response.registrationInfo.attestationObject,
          "base64url",
        ),
        deviceType: response.registrationInfo.credentialDeviceType,
        counter: response.registrationInfo.credential.counter,
        credentialBackedUp: response.registrationInfo.credentialBackedUp,
        transports: response.registrationInfo.credential.transports as [string],
      },
    );

    const payload = {
      id: user._id.toString(),
      email: user.email,
      name: user.name,
      username: user.username,
      emailVerified: user.emailVerified,
    };

    const accessToken = await encrypt(payload);
    return NextResponse.json({
      accessToken,
      message: "Webauth verified successfully",
      verified: response.verified,
      registrationInfo: {
        ...response.registrationInfo,
      },
    });
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
