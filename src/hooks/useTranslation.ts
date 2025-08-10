'use client';
import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/../lib/supabase/client';

interface UseTranslationsReturn {
    t: (key: string, options?: TranslationOptions) => string;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

interface TranslationOptions {
    fallback?: string;
    component?: string;
    context?: string;
}

export function useTranslations(language: string = 'pl'): UseTranslationsReturn {
    const [translations, setTranslations] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const supabase = createClient();

    const CACHE_KEY = `translations_cache_${language}`;
    const CACHE_TTL = 5 * 60 * 1000; // 5 min

    const getFromCache = useCallback(() => {
        try {
            const cached = localStorage.getItem(CACHE_KEY);
            if (!cached) return null;

            const parsed = JSON.parse(cached);
            if (Date.now() - parsed.timestamp > CACHE_TTL) {
                localStorage.removeItem(CACHE_KEY);
                return null;
            }

            return parsed.data;
        } catch {
            return null;
        }
    }, [CACHE_KEY]);

    const saveToCache = useCallback((data: Record<string, string>) => {
        try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({
                timestamp: Date.now(),
                data
            }));
        } catch {}
    }, [CACHE_KEY]);

    const loadTranslations = useCallback(async () => {
        setLoading(true);
        try {
            const cached = getFromCache();
            if (cached) {
                setTranslations(cached);
                return;
            }

            const { data, error } = await supabase
                .from('translations')
                .select('key, value')
                .eq('language', language);

            if (error) throw error;

            const result = Object.fromEntries(data.map((row: any) => [row.key, row.value]));
            setTranslations(result);
            saveToCache(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [language, supabase, getFromCache, saveToCache]);

    useEffect(() => {
        loadTranslations();
    }, [loadTranslations]);

    const refetch = useCallback(() => loadTranslations(), [loadTranslations]);

    const t = useCallback((key: string, options?: TranslationOptions): string => {
        const value = translations[key] || options?.fallback || key;

        // rejestracja użycia tłumaczenia
        if (typeof window !== 'undefined') {
            const url = window.location.pathname;

            supabase.from('translation_usage').insert({
                key,
                language,
                component: options?.component ?? '',
                context: options?.context ?? '',
                url
            }).then(({ error }) => {
                if (error) {
                    console.error(error);
                }
            });
        }

        return value;
    }, [translations, language, supabase]);

    return { t, loading, error, refetch };
}
