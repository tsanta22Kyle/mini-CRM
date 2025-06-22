import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const isConnected = request.cookies.get("user-session");

  const isProtected = request.nextUrl.pathname.startsWith("/dashboard");

  if (isProtected && !isConnected) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more , les routes qui sont gérées par ce middlware
export const config = {
  matcher: ["/dashboard/:path*"],
};
