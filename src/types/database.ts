export interface Translation {
    id: string;
    key: string;
    language: 'pl' | 'en' | 'de';
    value: string;
    created_at: string;
    updated_at: string;
    updated_by: string | null;
}

export interface TranslationKey {
    id: string;
    key: string;
    description: string | null;
    category: string;
    created_at: string;
}

export interface Profile {
    id: string;
    email: string | null;
    role: 'user' | 'admin';
    created_at: string;
    updated_at: string;
}

export interface GroupedTranslations {
    [key: string]: {
        [language: string]: Translation;
    };
}