import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims, redirectToSignIn } = await auth();

  // 🔓 Allow public routes
  if (isPublicRoute(req)) {
    return;
  }

  // 🔐 Require authentication
  if (!userId) {
    return redirectToSignIn();
  }

  // 👑 Admin-only routes
  if (
    isAdminRoute(req) &&
    sessionClaims?.metadata?.role !== "admin"
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
