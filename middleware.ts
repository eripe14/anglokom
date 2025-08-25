// middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const supabaseResponse = NextResponse.next({
        request,
    })

    // Obsługa języków
    const language = request.cookies.get('preferred-language')?.value
    if (!language || !['pl', 'en', 'de'].includes(language)) {
        supabaseResponse.cookies.set('preferred-language', 'pl', {
            path: '/',
            maxAge: 60 * 60 * 24 * 365, // 1 year
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax'
        })
    }

    // Supabase auth handling
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        request.cookies.set(name, value)
                        supabaseResponse.cookies.set(name, value, options)
                    })
                },
            },
        }
    )

    const {} = await supabase.auth.getUser()

    // Opcjonalne: przekierowania na podstawie autoryzacji
    // if (!user && request.nextUrl.pathname.startsWith('/dashboard')) {
    //   const url = request.nextUrl.clone()
    //   url.pathname = '/login'
    //   return NextResponse.redirect(url)
    // }

    return supabaseResponse
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}