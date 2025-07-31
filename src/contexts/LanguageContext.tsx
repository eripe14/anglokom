'use client'

import React, {createContext, useContext, useState, useEffect} from 'react';

interface LanguageContextType {
    language: 'pl' | 'en' | 'de';
    toggleLanguage: () => void;
    setLanguage: (lang: 'pl' | 'en' | 'de') => void;
    t: (key: string) => string;
    isLoading: boolean; // Dodajemy informację o ładowaniu
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

        'about.hero.description': 'ANGLOKOM powstał w 2000 roku jako lokalna firma specjalizująca się w szkoleniach językowych, ' +
            'komunikacji biznesowej oraz tłumaczeniach. Od ponad dwóch dekad pomagamy firmom i osobom ' +
            'prywatnym skutecznie porozumiewać się w językach obcych - w Polsce i za granicą. ' +
            'Oferujemy szkolenia, audyty językowe i tłumaczenia, które wspierają rozwój kompetencji ' +
            'komunikacyjnych w realnych kontekstach zawodowych.',

        'about.team.title': 'Nasza kadra',
        'about.team.paragraph.one': 'Naszą największą siłą jest doświadczony i w pełni wykwalifikowany zespół lektorów, trenerów i tłumaczy. W skład kadry wchodzą:',
        'about.team.list.one': 'lektorzy z tytułem magistra filologii, specjalizujący się w języku zawodowym i biznesowym,',
        'about.team.list.two': 'nauczyciele akademiccy, w tym z tytułem doktora nauk humanistycznych,',
        'about.team.list.three': 'native speakerzy z przygotowaniem metodycznym,',
        'about.team.list.four': 'tłumacze przysięgli i specjalistyczni - z uprawnieniami i wieloletnim doświadczeniem.',
        'about.team.paragraph.two': 'Nie zatrudniamy studentów ani osób bez przygotowania pedagogicznego i doświadczenia w nauczaniu - zarówno stacjonarnym, jak i zdalnym.',
        'about.team.paragraph.three': 'Organizację wszystkich kursów nadzoruje metodyk z ponad 20-letnim doświadczeniem w edukacji językowej',

        'about.languages.title': 'Nasze języki',
        'about.languages.uk': 'język angielski',
        'about.languages.es': 'język hiszpański',
        'about.languages.de': 'język niemiecki',
        'about.languages.ru': 'język rosyjski',
        'about.languages.ua': 'język ukraiński',
        'about.languages.fr': 'język francuski',
        'about.languages.cr': 'język chiński',
        'about.languages.it': 'język włoski',

        'about.mission.title': 'Nasza misja',
        'about.mission.paragraph.one': 'Naszą misją jest łączenie wiedzy językowej z praktyką - tak, aby komunikacja była nie tylko poprawna, ale i skuteczna. Kładziemy szczególny nacisk na:',
        'about.mission.list.one': 'jasność i trafność przekazu,',
        'about.mission.list.two': 'budowanie pewności językowej u uczestników.',
        'about.mission.paragraph.two': 'Współpracujemy z firmami, instytucjami i klientami indywidualnymi, tworząc szyte na miarę programy nauczania.',

        'about.specializations.title': 'Nasze specjalizacje',
        'about.specializations.exam': 'Egzaminy międzynarodowe',
        'about.specializations.languages': 'Języki specjalistyczne',
        'about.specializations.languages.list.one': 'Business English',
        'about.specializations.languages.list.two': 'Terminologia energetyczna, informatyczna, medyczna',
        'about.specializations.languages.list.three': 'Słownictwo prawnicze, logistyczne',
        'about.specializations.languages.list.four': 'Finanse i bankowość',
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

        'about.hero.description': 'ANGLOKOM was founded in 2000 as a local company specializing in language training, ' +
            'business communication, and translation. For over two decades, we have been helping companies and individuals ' +
            'communicate effectively in foreign languages – in Poland and abroad. ' +
            'We offer training, language audits, and translations that support the development of communication ' +
            'skills in real professional contexts.',

        'about.team.title': 'Our team',
        'about.team.paragraph.one': 'Our greatest strength is an experienced and fully qualified team of lecturers, trainers and translators. The staff includes:',
        'about.team.list.one': 'lecturers with a master\'s degree in philology, specializing in professional and business language,',
        'about.team.list.two': 'academic teachers, including those with a doctorate in humanities,',
        'about.team.list.three': 'native speakers with methodological preparation,',
        'about.team.list.four': 'sworn and specialist translators - with qualifications and many years of experience.',
        'about.team.paragraph.two': 'We do not employ students or people without pedagogical preparation and experience in teaching - both stationary and remote.',
        'about.team.paragraph.three': 'The organization of all courses is supervised by a methodologist with over 20 years of experience in language education',

        'about.languages.title': 'Our Languages',
        'about.languages.uk': 'English',
        'about.languages.es': 'Spanish',
        'about.languages.de': 'German',
        'about.languages.ru': 'Russian',
        'about.languages.ua': 'Ukrainian',
        'about.languages.fr': 'French',
        'about.languages.cr': 'Chinese',
        'about.languages.it': 'Italian',

        'about.mission.title': 'Our mission',
        'about.mission.paragraph.one': 'Our mission is to combine language knowledge with practice – so that communication is not only correct, but also effective. We place special emphasis on:',
        'about.mission.list.one': 'clarity and accuracy of expression,',
        'about.mission.list.two': 'building linguistic confidence in participants.',
        'about.mission.paragraph.two': 'We work with companies, institutions, and individual clients, creating tailor-made learning programs.',

        'about.specializations.title': 'Our Specializations',
        'about.specializations.exam': 'International Exams',
        'about.specializations.languages': 'Specialized Languages',
        'about.specializations.languages.list.one': 'Business English',
        'about.specializations.languages.list.two': 'Energy, IT, and Medical Terminology',
        'about.specializations.languages.list.three': 'Legal and Logistics Vocabulary',
        'about.specializations.languages.list.four': 'Finance and Banking',

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

        'about.hero.description': 'ANGLOKOM wurde im Jahr 2000 als lokales Unternehmen gegründet, das sich auf Sprachtrainings, ' +
            'geschäftliche Kommunikation und Übersetzungen spezialisiert hat. Seit über zwei Jahrzehnten helfen wir Unternehmen und Privatpersonen, ' +
            'sich effektiv in Fremdsprachen zu verständigen – in Polen und im Ausland. ' +
            'Wir bieten Schulungen, Sprach-Audits und Übersetzungen an, die die Entwicklung kommunikativer Kompetenzen ' +
            'in realen beruflichen Kontexten unterstützen.',

        'about.team.title': 'Unser Team',
        'about.team.paragraph.one': 'Unsere größte Stärke ist ein erfahrenes und voll qualifiziertes Team von Lektoren, Trainern und Übersetzern. Zum Personal gehören:',
        'about.team.list.one': 'Lektoren mit einem Magisterabschluss in Philologie, spezialisiert auf Fach- und Geschäftssprache,',
        'about.team.list.two': 'Hochschullehrer, darunter solche mit einem Doktortitel in Geisteswissenschaften,',
        'about.team.list.three': 'Muttersprachler mit methodischer Vorbereitung,',
        'about.team.list.four': 'vereidigte und Fachübersetzer - mit Qualifikationen und langjähriger Erfahrung.',
        'about.team.paragraph.two': 'Wir beschäftigen keine Studenten oder Personen ohne pädagogische Vorbereitung und Erfahrung im Unterrichten - sowohl stationär als auch remote.',
        'about.team.paragraph.three': 'Die Organisation aller Kurse wird von einem Methodiker mit über 20 Jahren Erfahrung in der Sprachbildung überwacht',

        'about.languages.title': 'Unsere Sprachen',
        'about.languages.uk': 'Englisch',
        'about.languages.es': 'Spanisch',
        'about.languages.de': 'Deutsch',
        'about.languages.ru': 'Russisch',
        'about.languages.ua': 'Ukrainisch',
        'about.languages.fr': 'Französisch',
        'about.languages.cr': 'Chinesisch',
        'about.languages.it': 'Italienisch',

        'about.mission.title': 'Unsere mission',
        'about.mission.paragraph.one': 'Unsere Mission ist es, Sprachkenntnisse mit Praxis zu verbinden – damit Kommunikation nicht nur korrekt, sondern auch effektiv ist. Besonderen Wert legen wir auf:',
        'about.mission.list.one': 'Klarheit und Treffsicherheit des Ausdrucks,',
        'about.mission.list.two': 'den Aufbau sprachlicher Sicherheit bei den Teilnehmenden.',
        'about.mission.paragraph.two': 'Wir arbeiten mit Unternehmen, Institutionen und Privatkunden zusammen und erstellen maßgeschneiderte Lernprogramme.',

        'about.specializations.title': 'Unsere Spezialisierungen',
        'about.specializations.exam': 'Internationale Prüfungen',
        'about.specializations.languages': 'Fachspezifische Sprachen',
        'about.specializations.languages.list.one': 'Business English',
        'about.specializations.languages.list.two': 'Energie-, IT- und Medizinterminologie',
        'about.specializations.languages.list.three': 'Juristischer und logistischer Wortschatz',
        'about.specializations.languages.list.four': 'Finanzen und Bankwesen',

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

// Helper function to store language
const storeLanguage = (language: 'pl' | 'en' | 'de') => {
    if (typeof window === 'undefined') return;

    try {
        localStorage.setItem('preferred-language', language);
    } catch (error) {
        console.warn('Failed to write to localStorage:', error);
    }
};

export const LanguageProvider = ({children}: { children: React.ReactNode }) => {
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
        // Jeśli nie jesteśmy jeszcze zhydrowani, używamy polskiego jako domyślnego
        const currentLanguage = isHydrated ? language : 'pl';
        return translations[currentLanguage][key as keyof typeof translations['pl']] || key;
    };

    return (
        <LanguageContext.Provider value={{
            language,
            toggleLanguage,
            setLanguage,
            t,
            isLoading: !isHydrated
        }}>
            {children}
        </LanguageContext.Provider>
    );
}