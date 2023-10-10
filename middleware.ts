import { NextFetchEvent, NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    if (userAgent(req).isBot) {
        return new Response("A bot cannot access to this website!", { status: 403 });
    }

    if(!req.url.includes("/api")) {
        if (!req.cookies.has("carrotsession") && !req.url.includes("/enter")) {
            return NextResponse.redirect(`${req.nextUrl.origin}/enter`);
        }
    }

    // return NextResponse.json({ ok: true });
}

export const config = {
    matcher: ["/((?!_next|api/auth).*)(.+)"],
};