import { createServerSupabaseClient } from '@/../lib/supabase/server';
import { cookies } from 'next/headers';

export interface Translation {
    key: string;
    value: string;
}

export interface TranslationDict {
    [key: string]: string;
}

// Server-side translation loader
export async function getServerTranslations(language: string = 'pl'): Promise<TranslationDict> {
    try {
        const supabase = await createServerSupabaseClient();

        const { data, error } = await supabase
            .from('translations')
            .select('key, value')
            .eq('language', language);

        if (error) {
            console.error('Failed to load translations:', error);
            return {};
        }

        return Object.fromEntries(data.map((row: { key: string; value: string }) => [row.key, row.value]));
    } catch (error) {
        console.error('Translation loading error:', error);
        return {};
    }
}

// Get language from cookies or headers
export async function getServerLanguage(): Promise<string> {
    try {
        const cookieStore = await cookies();
        const langCookie = cookieStore.get('preferred-language');

        if (langCookie && ['pl', 'en', 'de'].includes(langCookie.value)) {
            return langCookie.value;
        }
    } catch (error) {
        console.warn('Could not read language cookie:', error);
    }

    return 'pl'; // Default fallback
}