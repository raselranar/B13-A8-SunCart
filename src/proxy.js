import { NextResponse } from "next/server";

export default function proxy(request) {
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/products/:path+",
};
