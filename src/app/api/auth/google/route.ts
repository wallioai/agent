import { GOOGLE_CALLBACK_URL, GOOGLE_CLIENT_ID } from "@/config/env.config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const redirectUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  const searchParams = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID ?? "",
    redirect_uri: GOOGLE_CALLBACK_URL ?? "",
    response_type: "code",
    scope: "openid email profile",
    access_type: "offline",
    prompt: "consent",
  });
  redirectUrl.search = searchParams.toString();
  return NextResponse.redirect(redirectUrl);
}
