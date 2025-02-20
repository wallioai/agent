import { NextRequest, NextResponse } from "next/server";
import { CookieKeys } from "./enums/cookie.enum";
import { protectedRoutes, routes, publicRoutes } from "./lib/routes";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export async function middleware(request: NextRequest) {
  const token = (await cookies()).get(CookieKeys.ACCESS_TOKEN)?.value;
  const nextUrl = request.nextUrl;

  const path = nextUrl.pathname;
  const isPublicPage = publicRoutes.includes(path);
  const isProtectedRoute =
    protectedRoutes.includes(path) ||
    (/^\/[^/]+$/.test(path) && !publicRoutes.includes(path));

  if (token) {
    try {
      const parsedCookie: any = jwtDecode(token);
      const expires = new Date(parsedCookie.exp * 1000);
      if (expires < new Date()) {
        return NextResponse.redirect(new URL(routes.auth.login, nextUrl));
      }
    } catch (error) {
      return NextResponse.redirect(new URL(routes.auth.login, nextUrl));
    }

    if (isPublicPage) {
      return NextResponse.redirect(new URL(routes.app.home, nextUrl));
    }
  } else if (isProtectedRoute) {
    return NextResponse.redirect(new URL(routes.auth.login, nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
