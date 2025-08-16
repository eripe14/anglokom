import { NextRequest, NextResponse } from 'next/server';
import { getServerTranslations } from '@/../lib/translations-server';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const lang = searchParams.get('lang') || 'pl';

        if (!['pl', 'en', 'de'].includes(lang)) {
            return NextResponse.json({ error: 'Invalid language' }, { status: 400 });
        }

        const translations = await getServerTranslations(lang);

        return NextResponse.json(translations, {
            headers: {
                'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
            },
        });
    } catch (error) {
        console.error('Translation API error:', error);
        return NextResponse.json({ error: 'Failed to load translations' }, { status: 500 });
    }
}