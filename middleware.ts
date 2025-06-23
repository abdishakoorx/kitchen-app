import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
 
export async function middleware(request: NextRequest) {
    const sessionCookie = getSessionCookie(request);
 
    if (!sessionCookie) {
        // Preserve the original URL the user was trying to access
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("callbackUrl", request.url);
        return NextResponse.redirect(loginUrl);
    }
 
    return NextResponse.next();
}
 
export const config = {
    matcher: ["/dashboard", "/dashboard/:path*"],
};