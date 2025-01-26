import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });
  const role = token?.role;
  const path = req.nextUrl.pathname;

  if (path === "/") {
    return NextResponse.next();
  }
  const isPublicPath = path === "/signin" || path === "/signup";
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
  if (!token && isPublicPath) {
    return NextResponse.next();
  }
  if (
    (role === "admin" && path.startsWith("/dashboard")) ||
    (role === "farmer" && path.startsWith("/dashboard")) ||
    (role === "expert" && path.startsWith("/dashboard"))
  ) {
    return NextResponse.next();
  }
  if (
    (role === "admin" || role === "farmer" || role === "expert") &&
    isPublicPath
  ) {
    return NextResponse.redirect(new URL(`/dashboard`, req.url));
  }
  return new NextResponse("Forbidden", { status: 403 });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|model).*)"],
};
