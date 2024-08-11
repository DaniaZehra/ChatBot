import { clerkMiddleware } from '@clerk/nextjs/server'

export default function customMiddleware(req, res) {
  // Log the request details
  console.log("Request received:");
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Headers:", req.headers);

  // Call the original Clerk middleware
  return clerkMiddleware()(req, res);
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
