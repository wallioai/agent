import "server-only";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { SESSION_DURATION, SESSION_MAXAGE } from "@/config/session.config";
import { isDev } from "./helpers";

const secretKey = process.env.AUTH_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24 hours")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function createSession(
  payload: any,
  name: string,
  withEncrypt: boolean = false,
  maxAge: number = SESSION_MAXAGE,
  expiresAt: Date = new Date(Date.now() + SESSION_DURATION)
) {
  await deleteSession(name);
  const session = withEncrypt
    ? await encrypt({ ...payload, expiresAt })
    : payload;
  (await cookies()).set(name, session, {
    httpOnly: !isDev,
    path: "/",
    expires: expiresAt,
    sameSite: "strict",
    secure: !isDev,
    maxAge: maxAge,
  });
}

export async function getSession(name: string) {
  const session = (await cookies()).get(name)?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function deleteSession(name: string) {
  const cookieStore = await cookies();
  cookieStore.delete(name);
}
