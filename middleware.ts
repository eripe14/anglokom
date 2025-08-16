import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Check if language is set in cookie
    const language = request.cookies.get('preferred-language')?.value;

    if (!language || !['pl', 'en', 'de'].includes(language)) {
        // Set default language cookie
        const response = NextResponse.next();
        response.cookies.set('preferred-language', 'pl', {
            path: '/',
            maxAge: 60 * 60 * 24 * 365, // 1 year
            httpOnly: false, // Allow client-side access
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax'
        });
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};