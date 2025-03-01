import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/api/webhook",
  "/articles(.*)",
]);

// Add a specific matcher for the story route
const isStoryRoute = createRouteMatcher(["/story(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // Check if the user is trying to access the story page
  if (isStoryRoute(req)) {
    // Get authentication details
    const { userId } = await auth();

    // If not authenticated, redirect to home page
    if (!userId) {
      const homeUrl = new URL("/", req.url);
      return NextResponse.redirect(homeUrl);
    }
    // If authenticated, protect the route
    await auth.protect();
  } else if (!isPublicRoute(req)) {
    // For other non-public routes, just protect without specific redirect
    await auth.protect();
  }
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/middleware
  // for more information about configuring your middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
