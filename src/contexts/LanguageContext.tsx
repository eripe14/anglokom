'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
    language: 'pl' | 'en' | 'de';
    toggleLanguage: () => void;
    setLanguage: (lang: 'pl' | 'en' | 'de') => void;
    t: (key: string) => string;
}

const translations = {
    pl: {
        'nav.home': 'Strona główna',
        'nav.about': 'O firmie',
        'nav.offer': 'Nasza oferta',
        'nav.translations': 'Biuro tłumaczeń',
        'nav.audits': 'Audyty',
        'nav.blog': 'Blog',
        'nav.contact': 'Kontakt',
        'nav.call': 'Zadzwoń',

        'about.team.title': 'Nasza kadra',
        'about.team.paragraph.one': 'Naszą największą siłą jest doświadczony i w pełni wykwalifikowany zespół lektorów, trenerów i tłumaczy. W skład kadry wchodzą:',
        'about.team.list.one': 'lektorzy z tytułem magistra filologii, specjalizujący się w języku zawodowym i biznesowym,',
        'about.team.list.two': 'nauczyciele akademiccy, w tym z tytułem doktora nauk humanistycznych,',
        'about.team.list.three': 'native speakerzy z przygotowaniem metodycznym,',
        'about.team.list.four': 'tłumacze przysięgli i specjalistyczni - z uprawnieniami i wieloletnim doświadczeniem.',
        'about.team.paragraph.two': 'Nie zatrudniamy studentów ani osób bez przygotowania pedagogicznego i doświadczenia w nauczaniu - zarówno stacjonarnym, jak i zdalnym.',
        'about.team.paragraph.three': 'Organizację wszystkich kursów nadzoruje metodyk z ponad 20-letnim doświadczeniem w edukacji językowej',
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About us',
        'nav.offer': 'Our offer',
        'nav.translations': 'Translation office',
        'nav.audits': 'Audits',
        'nav.blog': 'Blog',
        'nav.contact': 'Contact',
        'nav.call': 'Call',

        'about.team.title': 'Nasza kadra',
        'about.team.paragraph.one': 'Naszą największą siłą jest doświadczony i w pełni wykwalifikowany zespół lektorów, trenerów i tłumaczy. W skład kadry wchodzą:',
        'about.team.list.one': 'lektorzy z tytułem magistra filologii, specjalizujący się w języku zawodowym i biznesowym,',
        'about.team.list.two': 'nauczyciele akademiccy, w tym z tytułem doktora nauk humanistycznych,',
        'about.team.list.three': 'native speakerzy z przygotowaniem metodycznym,',
        'about.team.list.four': 'tłumacze przysięgli i specjalistyczni - z uprawnieniami i wieloletnim doświadczeniem.',
        'about.team.paragraph.two': 'Nie zatrudniamy studentów ani osób bez przygotowania pedagogicznego i doświadczenia w nauczaniu - zarówno stacjonarnym, jak i zdalnym.',
        'about.team.paragraph.three': 'Organizację wszystkich kursów nadzoruje metodyk z ponad 20-letnim doświadczeniem w edukacji językowej',
    },
    de: {
        'nav.home': 'Startseite',
        'nav.about': 'Über uns',
        'nav.offer': 'Unser Angebot',
        'nav.translations': 'Übersetzungsbüro',
        'nav.audits': 'Audits',
        'nav.blog': 'Blog',
        'nav.contact': 'Kontakt',
        'nav.call': 'Anrufen',

        'about.team.title': 'Nasza kadra',
        'about.team.paragraph.one': 'Naszą największą siłą jest doświadczony i w pełni wykwalifikowany zespół lektorów, trenerów i tłumaczy. W skład kadry wchodzą:',
        'about.team.list.one': 'lektorzy z tytułem magistra filologii, specjalizujący się w języku zawodowym i biznesowym,',
        'about.team.list.two': 'nauczyciele akademiccy, w tym z tytułem doktora nauk humanistycznych,',
        'about.team.list.three': 'native speakerzy z przygotowaniem metodycznym,',
        'about.team.list.four': 'tłumacze przysięgli i specjalistyczni - z uprawnieniami i wieloletnim doświadczeniem.',
        'about.team.paragraph.two': 'Nie zatrudniamy studentów ani osób bez przygotowania pedagogicznego i doświadczenia w nauczaniu - zarówno stacjonarnym, jak i zdalnym.',
        'about.team.paragraph.three': 'Organizację wszystkich kursów nadzoruje metodyk z ponad 20-letnim doświadczeniem w edukacji językowej',
    }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

// Helper function to get stored language or default
const getStoredLanguage = (): 'pl' | 'en' | 'de' => {
    if (typeof window === 'undefined') return 'pl'; // SSR safety

    try {
        const stored = localStorage.getItem('preferred-language');
        if (stored && ['pl', 'en', 'de'].includes(stored)) {
            return stored as 'pl' | 'en' | 'de';
        }
    } catch (error) {
        console.warn('Failed to read from localStorage:', error);
    }

    return 'pl'; // Default fallback
};

// Helper function to store language
const storeLanguage = (language: 'pl' | 'en' | 'de') => {
    if (typeof window === 'undefined') return; // SSR safety

    try {
        localStorage.setItem('preferred-language', language);
    } catch (error) {
        console.warn('Failed to write to localStorage:', error);
    }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguageState] = useState<'pl' | 'en' | 'de'>('pl');
    const [isHydrated, setIsHydrated] = useState(false);

    // Initialize language from localStorage after hydration
    useEffect(() => {
        const storedLanguage = getStoredLanguage();
        setLanguageState(storedLanguage);
        setIsHydrated(true);
    }, []);

    // Store language whenever it changes (but only after hydration)
    useEffect(() => {
        if (isHydrated) {
            storeLanguage(language);
        }
    }, [language, isHydrated]);

    const setLanguage = (newLanguage: 'pl' | 'en' | 'de') => {
        setLanguageState(newLanguage);
    };

    const toggleLanguage = () => {
        setLanguageState(prev => (prev === 'pl' ? 'en' : prev === 'en' ? 'de' : 'pl'));
    };

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations['pl']] || key;
    };

    // Prevent hydration mismatch by showing loading state
    if (!isHydrated) {
        return (
            <LanguageContext.Provider value={{
                language: 'pl',
                toggleLanguage: () => {},
                setLanguage: () => {},
                t: (key: string) => key
            }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}