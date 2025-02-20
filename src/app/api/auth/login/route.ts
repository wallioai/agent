import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import { createSession } from "@/lib/session";
import { WebAuth } from "@/models/webauth.model";
import { LoginSchema, LoginWebAuthSchema } from "@/schemas/login.schema";
import {
  AuthenticationResponseJSON,
  AuthenticatorTransportFuture,
  generateAuthenticationOptions,
  verifyAuthenticationResponse,
} from "@simplewebauthn/server";
import { isoBase64URL } from "@simplewebauthn/server/helpers";
import { CookieKeys } from "@/enums/cookie.enum";
import { ORIGIN, RP_ID } from "@/config/env.config";
import { z } from "zod";
import { User } from "@/models/user.model";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const email = searchParams.get("email");

  if (!RP_ID || !email) {
    return NextResponse.json({ error: "rpId is required" }, { status: 401 });
  }

  const { db } = await clientPromise();
  const [webAuth, user] = await Promise.all([
    db.collection<WebAuth>("webauths").findOne({ email: email.toLowerCase() }),
    db.collection<User>("users").findOne({ email: email.toLowerCase() }),
  ]);
  if (!webAuth || !user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const options = await generateAuthenticationOptions({
    rpID: RP_ID,
    allowCredentials: [
      {
        id: webAuth.id,
        transports: webAuth.transports as AuthenticatorTransportFuture[],
      },
    ],
    userVerification: "required",
  });
  await db
    .collection("webauths")
    .findOneAndUpdate(
      { id: webAuth.id },
      { $set: { challenge: options.challenge } },
    );

  return NextResponse.json(options, { status: 200, statusText: "OK" });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, options } = LoginWebAuthSchema.parse(body);

    if (!RP_ID || !ORIGIN) {
      return NextResponse.json(
        { error: "rpId and origin is required" },
        { status: 401 },
      );
    }

    const { db } = await clientPromise();
    const [webAuth, user] = await Promise.all([
      db
        .collection<WebAuth>("webauths")
        .findOne({ email: email.toLowerCase() }),
      db.collection<User>("users").findOne({ email: email.toLowerCase() }),
    ]);

    if (!webAuth || !user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    const parseOptions = JSON.parse(options) as AuthenticationResponseJSON;
    const response = await verifyAuthenticationResponse({
      response: parseOptions,
      expectedChallenge: webAuth.challenge!,
      expectedOrigin: ORIGIN,
      expectedRPID: RP_ID,
      credential: {
        id: webAuth.id,
        publicKey: new Uint8Array(
          isoBase64URL.toBuffer(webAuth.publicKey!, "base64url"),
        ),
        counter: webAuth.counter,
        transports: webAuth.transports as AuthenticatorTransportFuture[],
      },
    });

    if (!response.verified) {
      return NextResponse.json(
        {
          verified: response.verified,
          message: "Webauth verification failed",
        },
        { status: 401 },
      );
    }

    await db
      .collection("webauths")
      .findOneAndUpdate({ id: webAuth.id }, { $set: { challenge: null } });

    const payload = {
      id: user._id.toString(),
      email: user.email,
      name: user.name,
      username: user.username,
      emailVerified: user.emailVerified,
    };

    await createSession(payload, CookieKeys.ACCESS_TOKEN, true);

    return NextResponse.json({
      message: "Webauth verified successfully",
      verified: response.verified,
      authenticationInfo: {
        id: response.authenticationInfo.credentialID,
        rpID: response.authenticationInfo.rpID,
        publicKey: webAuth.publicKey,
        attestationObject: webAuth.attestationObject,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
