'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslations } from '@/hooks/useTranslation';

interface LanguageContextType {
    language: 'pl' | 'en' | 'de';
    setLanguage: (lang: 'pl' | 'en' | 'de') => void;
    toggleLanguage: () => void;
    t: (key: string) => string;
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

// Helper function to get stored language
const getStoredLanguage = (): 'pl' | 'en' | 'de' => {
    if (typeof window === 'undefined') return 'pl';

    try {
        const stored = localStorage.getItem('preferred-language');
        if (stored && ['pl', 'en', 'de'].includes(stored)) {
            return stored as 'pl' | 'en' | 'de';
        }
    } catch (error) {
        console.warn('Failed to read from localStorage:', error);
    }

    return 'pl';
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguageState] = useState<'pl' | 'en' | 'de'>('pl');
    const [isHydrated, setIsHydrated] = useState(false);

    const { t, loading, error, refetch } = useTranslations(language);

    // Initialize language from localStorage after hydration
    useEffect(() => {
        const storedLanguage = getStoredLanguage();
        setLanguageState(storedLanguage);
        setIsHydrated(true);
    }, []);

    // Store language whenever it changes
    useEffect(() => {
        if (isHydrated) {
            try {
                localStorage.setItem('preferred-language', language);
            } catch (error) {
                console.warn('Failed to save language preference:', error);
            }
        }
    }, [language, isHydrated]);

    const setLanguage = (newLanguage: 'pl' | 'en' | 'de') => {
        setLanguageState(newLanguage);
    };

    const toggleLanguage = () => {
        setLanguageState(prev => (prev === 'pl' ? 'en' : prev === 'en' ? 'de' : 'pl'));
    }

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            toggleLanguage,
            t,
            isLoading: loading || !isHydrated,
            error,
            refetch
        }}>
            {children}
        </LanguageContext.Provider>
    );
};