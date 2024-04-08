'use server'
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";

export function middleware(request) {
    const authTokens = cookies(request).get('laravel_session')?.value;

    if (request.nextUrl.pathname.startsWith("/admin") && !authTokens) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    
    // if (authTokens && request.nextUrl.pathname.startsWith("/")) {
    //     return NextResponse.redirect(new URL("/admin", request.url));
    // }
    // if (authTokens && request.nextUrl.pathname.startsWith("/register")) {
    //     return NextResponse.redirect(new URL("/admin", request.url));
    // }

    return null;
}
    
    export const config = {
        matcher: ["/admin/:path*", "/login", "/register"],
}