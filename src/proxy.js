import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export default async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  // console.log("proxy:", request);
  const { pathname } = request.nextUrl;
  // if path is product/id
  if (
    !session &&
    pathname.startsWith("/products/") &&
    pathname !== "/products"
  ) {
    return NextResponse.redirect(
      new URL(`/login?redirectTo=${pathname}`, request.url),
    );
  }
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/products/:path+", "/my-profile/:path*"],
};
