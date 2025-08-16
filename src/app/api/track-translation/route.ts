import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/../lib/supabase/server';

export async function POST(request: NextRequest) {
    try {
        const { key, language, url } = await request.json();

        if (!key || !language) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const supabase = await createServerSupabaseClient();

        // Insert or update usage tracking (you might want to implement rate limiting)
        await supabase.from('translation_usage').upsert({
            key,
            language,
            url,
            last_used: new Date().toISOString(),
            usage_count: 1
        }, {
            onConflict: 'key,language,url',
            ignoreDuplicates: false
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Translation tracking error:', error);
        return NextResponse.json({ error: 'Failed to track translation' }, { status: 500 });
    }
}