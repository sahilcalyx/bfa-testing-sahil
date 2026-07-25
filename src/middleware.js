import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

/**
 * Route protection:
 * - /jury/* requires an authenticated jury session (OTP login)
 * - unauthenticated users are sent to /jury-login
 * - non-jury authenticated users are kept out of the jury portal
 * - jury users hitting /admin/* (except login) are sent to the jury portal
 */
export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Public jury login page — never treat as protected /jury portal
  if (pathname === "/jury-login" || pathname.startsWith("/jury-login/")) {
    return NextResponse.next();
  }

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET || "fallback_secret_for_dev_only",
  });

  const isJuryPath = pathname === "/jury" || pathname.startsWith("/jury/");
  const isAdminApp =
    pathname.startsWith("/admin") && pathname !== "/admin/login";

  // Protect jury portal — OTP session required + jury role only
  if (isJuryPath) {
    const hasSession =
      !!token &&
      !!(token.id || token.sub) &&
      token.error !== "SessionInvalid";

    if (!hasSession) {
      const url = req.nextUrl.clone();
      url.pathname = "/jury-login";
      url.searchParams.set("next", pathname);
      url.searchParams.set("required", "otp");
      return NextResponse.redirect(url);
    }
    if (token.role !== "jury") {
      const url = req.nextUrl.clone();
      url.pathname = "/admin";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // Keep jury out of the admin app UI
  if (isAdminApp && token?.role === "jury") {
    const url = req.nextUrl.clone();
    url.pathname = "/jury/nominations";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/jury", "/jury/:path*", "/admin", "/admin/:path*"],
};
