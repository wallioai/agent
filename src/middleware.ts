import { NextRequest, NextResponse } from "next/server";
import { CookieKeys } from "./enums/cookie.enum";
import { protectedRoutes, routes, publicRoutes } from "./lib/routes";
import { jwtDecode } from "jwt-decode";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Get the token from cookies
  const token = request.cookies.get(CookieKeys.ACCESS_TOKEN)?.value;

  // Authentication logic (from Middleware 2)
  const isPublicPage = publicRoutes.includes(pathname);
  const isProtectedRoute =
    protectedRoutes.includes(pathname) ||
    (/^\/[^/]+$/.test(pathname) && !publicRoutes.includes(pathname));

  // If the user is on a protected route, check for a valid token
  if (isProtectedRoute) {
    if (!token) {
      return NextResponse.redirect(new URL(routes.auth.login, request.url));
    }

    try {
      const parsedCookie: any = jwtDecode(token);
      const expires = new Date(parsedCookie.exp * 1000);
      if (expires < new Date()) {
        return NextResponse.redirect(new URL(routes.auth.login, request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL(routes.auth.login, request.url));
    }
  }

  // If no special handling is needed, proceed normally
  return NextResponse.next();
}

// Combine both matchers to create a more specific one
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
