import { createRouteMatcher, clerkMiddleware } from '@clerk/nextjs/server';

/// we can adjust this later and add pages that need to be protected
const isProtectedRoute = createRouteMatcher([
  '/pages(.*)',
])

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth.protect();
});




export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};