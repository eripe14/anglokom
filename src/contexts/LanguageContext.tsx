'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { TranslationDict } from '@/../lib/translations-server';

interface LanguageContextType {
    language: 'pl' | 'en' | 'de';
    setLanguage: (lang: 'pl' | 'en' | 'de') => void;
    toggleLanguage: () => void;
    t: (key: string, fallback?: string) => string;
    isLoading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

interface LanguageProviderProps {
    children: React.ReactNode;
    initialTranslations: TranslationDict;
    initialLanguage: 'pl' | 'en' | 'de';
}

export const LanguageProvider = ({
                                     children,
                                     initialTranslations,
                                     initialLanguage
                                 }: LanguageProviderProps) => {
    const [language, setLanguageState] = useState<'pl' | 'en' | 'de'>(initialLanguage);
    const [translations, setTranslations] = useState<TranslationDict>(initialTranslations);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    // Load translations when language changes
    const loadTranslations = async (newLanguage: string) => {
        if (newLanguage === initialLanguage && Object.keys(translations).length > 0) {
            return; // Already have initial translations
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/translations?lang=${newLanguage}`);
            if (!response.ok) throw new Error('Failed to fetch translations');

            const newTranslations = await response.json();
            setTranslations(newTranslations);

            // Cache in localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem(`translations_cache_${newLanguage}`, JSON.stringify({
                    timestamp: Date.now(),
                    data: newTranslations
                }));
            }
        } catch(err) {
            setError(err instanceof Error ? err.message : String(err));
            console.error('Failed to load translations:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const setLanguage = async (newLanguage: 'pl' | 'en' | 'de') => {
        if (newLanguage === language) return;

        // Set cookie for server-side
        if (typeof document !== 'undefined') {
            document.cookie = `preferred-language=${newLanguage}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
        }

        // Update localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('preferred-language', newLanguage);
        }

        setLanguageState(newLanguage);
        await loadTranslations(newLanguage);
    };

    const toggleLanguage = async () => {
        const nextLang = language === 'pl' ? 'en' : language === 'en' ? 'de' : 'pl';
        await setLanguage(nextLang);
    };

    const refetch = async () => {
        await loadTranslations(language);
    };

    const t = (key: string, fallback?: string): string => {
        const value = translations[key] || fallback || key;

        // Track usage for CMS (only after hydration to avoid SSR issues)
        if (isHydrated && typeof window !== 'undefined') {
            // Debounced tracking to avoid spam
            const trackingKey = `${key}_${language}`;
            if (!window._translationTracking) {
                window._translationTracking = new Set();
            }

            if (!window._translationTracking.has(trackingKey)) {
                window._translationTracking.add(trackingKey);

                // Use setTimeout to avoid blocking render
                setTimeout(() => {
                    fetch('/api/track-translation', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            key,
                            language,
                            url: window.location.pathname
                        })
                    }).catch(console.error);
                }, 100);
            }
        }

        return value;
    };

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            toggleLanguage,
            t,
            isLoading,
            error,
            refetch
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Extend Window interface for tracking
declare global {
    interface Window {
        _translationTracking?: Set<string>;
    }
}