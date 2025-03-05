import "server-only";

import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CookieKeys } from "@/enums/cookie.enum";
import { jwtDecode } from "jwt-decode";
import { routes } from "./routes";
import { IUser } from "@/types/user.type";

export interface IDecodedToken extends IUser {
  id: string;
  email: string;
  name: string;
  username: string;
  emailVerified: boolean;
  iat: number;
  exp: number;
};

export const verifySession = cache(async () => {
  const token = (await cookies()).get(CookieKeys.ACCESS_TOKEN)?.value;
  if (!token) redirect(routes.auth.login);

  const session = jwtDecode(token) as IDecodedToken;
  const expires = new Date(session.exp * 1000);
  if (expires < new Date()) {
    redirect(routes.auth.login);
  }

  if (!session?.id) {
    redirect(routes.auth.login);
  }
  return { isAuth: true, userId: session.id };
});
