import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  console.log("Logging req object in middleware:", req);
  console.log("Env type:", process.env.NODE_ENV);

  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });
  const role = token?.role;
  const path = req.nextUrl.pathname;
  console.log("Got token in middleware: ", token);
  console.log("Got role in middleware: ", role);

  if (path === "/") {
    return NextResponse.next();
  }
  const isPublicPath = path === "/signin" || path === "/signup";
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/signin", req.url), { status: 308 });
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
    console.log("This /dashborad access cond is triggered from middleware");

    return NextResponse.redirect(new URL(`/dashboard`, req.url), {
      status: 308,
    });
  }
  return new NextResponse("Forbidden", { status: 403 });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|model).*)"],
};
