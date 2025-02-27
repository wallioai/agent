import {
  GOOGLE_CALLBACK_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET_ID,
  ORIGIN,
} from "@/config/env.config";
import { generateId } from "@/lib/helpers";
import { isoBase64URL } from "@simplewebauthn/server/helpers";
import { NextRequest, NextResponse } from "next/server";
import userService from "@/db/mongodb/user/user.service";
import webAuthService from "@/db/mongodb/webauth/webauth.service";

export async function GET(req: NextRequest, res: NextResponse) {
  const searchParams = req.nextUrl.searchParams;
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "Authorization code not provided!" },
      { status: 400 },
    );
  }

  try {
    // Exchange code for access token
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID ?? "",
        client_secret: GOOGLE_SECRET_ID ?? "",
        code: code as string,
        grant_type: "authorization_code",
        redirect_uri: GOOGLE_CALLBACK_URL ?? "",
      }),
    });
    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      return NextResponse.json(
        { error: "Failed to get access token" },
        { status: 400 },
      );
    }

    // Get user info using access token
    const userRes = await fetch(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
      },
    );
    const userData = await userRes.json();

    let [webAuth, existingUser] = await Promise.all([
      webAuthService.findOne({ email: userData.email.toLowerCase() }),
      userService.findOne({ email: userData.email.toLowerCase() }),
    ]);

    if (!existingUser) {
      const rawId = generateId({
        length: 32,
        dictionary: "alphanum",
        isUUID: true,
      });
      const newUser = {
        email: userData.email,
        name: userData.name,
        uniqueId: isoBase64URL.fromUTF8String(rawId),
        avatar: userData.picture,
        emailVerified: userData.verified_email,
      };
      existingUser = await userService.create(newUser);
    }

    let type: "login" | "register" = "login";
    if (existingUser && webAuth) {
      type = "login";
    } else if (existingUser && !webAuth) {
      type = "register";
    }

    return NextResponse.redirect(
      `${ORIGIN}/auth/callback#?email=${userData.email}&type=${type}&name=${userData.name}`,
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
