'use client';
import {useState, useEffect, useMemo} from 'react';
import {useRouter} from 'next/navigation';
import {createClient} from '@/../lib/supabase/client';
import {
    Edit2,
    Save,
    X,
    Search,
    Filter,
    LogOut,
    Plus,
    Trash2,
    RefreshCw,
    Globe,
    Eye,
    ChevronDown,
    ChevronUp,
    MapPin,
    Code,
    ExternalLink
} from 'lucide-react';
import type {Translation, GroupedTranslations, Profile} from '@/types/database';

// Hook do śledzenia użycia tłumaczeń
const useTranslationUsage = () => {
    const [usageMap, setUsageMap] = useState<Record<string, Array<{
        component: string;
        file: string;
        line?: number;
        context?: string;
        url?: string;
    }>>>({});

    useEffect(() => {
        // Funkcja do skanowania DOM-u w poszukiwaniu elementów z data-translation-key
        const scanForTranslations = () => {
            const elements = document.querySelectorAll('[data-translation-key]');
            const newUsageMap: typeof usageMap = {};

            elements.forEach(element => {
                const key = element.getAttribute('data-translation-key');
                if (!key) return;

                const component = element.getAttribute('data-component') || 'Unknown';
                const file = element.getAttribute('data-file') || 'Unknown';
                const context = element.getAttribute('data-context') || element.textContent?.slice(0, 50) + '...';

                if (!newUsageMap[key]) {
                    newUsageMap[key] = [];
                }

                newUsageMap[key].push({
                    component,
                    file,
                    context,
                    url: window.location.pathname
                });
            });

            setUsageMap(newUsageMap);
        };

        // Skanuj po załadowaniu i przy zmianach
        scanForTranslations();

        // Observer do śledzenia zmian w DOM
        const observer = new MutationObserver(scanForTranslations);
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['data-translation-key']
        });

        return () => observer.disconnect();
    }, []);

    return usageMap;
};

// Komponent pokazujący szczegóły użycia
const TranslationUsageDetails = ({ translationKey, isOpen, onToggle }: {
    translationKey: string;
    isOpen: boolean;
    onToggle: () => void;
}) => {
    const usageMap = useTranslationUsage();
    const usage = usageMap[translationKey] || [];

    return (
        <div className="mt-2">
            <button
                onClick={onToggle}
                className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800"
            >
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                <Eye className="h-4 w-4" />
                <span>Gdzie używane ({usage.length})</span>
            </button>

            {isOpen && (
                <div className="mt-3 p-4 bg-gray-50 rounded-lg border">
                    {usage.length === 0 ? (
                        <div className="text-sm text-gray-500 flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            Nie znaleziono użycia tego tłumaczenia na aktualnie załadowanej stronie
                        </div>
                    ) : (
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-900 flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                Znalezione użycia:
                            </h4>
                            {usage.map((item, index) => (
                                <div key={index} className="border-l-2 border-blue-200 pl-3">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2 text-sm">
                                                <Code className="h-3 w-3 text-gray-400" />
                                                <span className="font-medium text-gray-700">{item.component}</span>
                                                <span className="text-gray-400">•</span>
                                                <span className="text-gray-500">{item.file}</span>
                                            </div>
                                            {item.context && (
                                                <div className="mt-1 text-xs text-gray-600 bg-white px-2 py-1 rounded border">
                                                    {item.context}
                                                </div>
                                            )}
                                            {item.url && (
                                                <div className="mt-1 flex items-center text-xs text-blue-600">
                                                    <ExternalLink className="h-3 w-3 mr-1" />
                                                    {item.url}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                        <div className="text-xs text-blue-800">
                            <strong>Wskazówka:</strong> Aby śledzić więcej użyć, dodaj atrybut <code className="bg-blue-100 px-1 rounded">data-translation-key={translationKey}</code> do swoich komponentów.
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default function CMSPage() {
    const [translations, setTranslations] = useState<Translation[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editValue, setEditValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [user, setUser] = useState<Profile | null>(null);
    const [saving, setSaving] = useState<string | null>(null);
    const [expandedUsage, setExpandedUsage] = useState<Record<string, boolean>>({});

    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        checkAuthAndLoadData();
    }, []);

    const checkAuthAndLoadData = async () => {
        try {
            // Sprawdź autoryzację
            const {data: {user: authUser}, error: authError} = await supabase.auth.getUser();

            if (authError || !authUser) {
                router.push('/admin/login');
                return;
            }

            // Sprawdź uprawnienia
            const {data: profile, error: profileError} = await supabase
                .from('profiles')
                .select('*')
                .eq('id', authUser.id)
                .single();

            if (profileError || profile?.role !== 'admin') {
                router.push('/admin/login');
                return;
            }

            setUser(profile);
            await loadTranslations();
        } catch (error) {
            console.error('Auth check failed:', error);
            router.push('/admin/login');
        }
    };

    const loadTranslations = async () => {
        try {
            const {data, error} = await supabase
                .from('translations')
                .select(`
          *,
          profiles:updated_by(email)
        `)
                .order('key', {ascending: true});

            if (error) throw error;

            setTranslations(data || []);
        } catch (error) {
            console.error('Failed to load translations:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
    };

    const updateTranslation = async (id: string | undefined, newValue: string, lang: string, key: string) => {
        if (!newValue.trim()) {
            alert('Translation value cannot be empty');
            return;
        }

        setSaving(id || 'new');
        try {
            if (id) {
                // Istniejący wpis
                const {error} = await supabase
                    .from('translations')
                    .update({value: newValue.trim(), updated_by: user?.id})
                    .eq('id', id);

                if (error) throw error;
            } else {
                // Nowy wpis
                const {error} = await supabase
                    .from('translations')
                    .insert({
                        key,
                        language: lang,
                        value: newValue.trim(),
                        updated_by: user?.id
                    });

                if (error) throw error;
            }

            setEditingId(null);
            await loadTranslations();
            localStorage.removeItem(`translations_cache_${lang}`);
        } catch (error) {
            console.error('Failed to save translation:', error);
            alert('Failed to save translation');
        } finally {
            setSaving(null);
        }
    };

    const addNewTranslation = async () => {
        const key = prompt('Enter translation key (e.g., "nav.home"):');
        if (!key) return;

        const value = prompt('Enter Polish translation:');
        if (!value) return;

        try {
            // Add key to translation_keys if it doesn't exist
            const {error: keyError} = await supabase
                .from('translation_keys')
                .upsert({key, description: `Added via CMS`}, {onConflict: 'key'});

            if (keyError) throw keyError;

            // Add translations for all languages
            const newTranslations = [
                {key, language: 'pl', value, updated_by: user?.id},
                {key, language: 'en', value: value, updated_by: user?.id}, // Initially same as Polish
                {key, language: 'de', value: value, updated_by: user?.id}  // Initially same as Polish
            ];

            const {error} = await supabase
                .from('translations')
                .insert(newTranslations);

            if (error) throw error;

            await loadTranslations();

            // Clear all language caches
            ['pl', 'en', 'de'].forEach(lang => {
                localStorage.removeItem(`translations_cache_${lang}`);
            });

        } catch (error) {
            console.error('Failed to add translation:', error);
            alert('Failed to add translation');
        }
    };

    const deleteTranslationKey = async (key: string) => {
        if (!confirm(`Are you sure you want to delete all translations for "${key}"?`)) {
            return;
        }

        try {
            // Delete all translations for this key
            const {error: translationsError} = await supabase
                .from('translations')
                .delete()
                .eq('key', key);

            if (translationsError) throw translationsError;

            // Delete the key
            const {error: keyError} = await supabase
                .from('translation_keys')
                .delete()
                .eq('key', key);

            if (keyError) throw keyError;

            await loadTranslations();

            // Clear all language caches
            ['pl', 'en', 'de'].forEach(lang => {
                localStorage.removeItem(`translations_cache_${lang}`);
            });

        } catch (error) {
            console.error('Failed to delete translation:', error);
            alert('Failed to delete translation');
        }
    };

    const toggleUsageExpansion = (key: string) => {
        setExpandedUsage(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    // Group translations by key
    const groupedTranslations: GroupedTranslations = useMemo(() => {
        return translations.reduce((acc, translation) => {
            if (!acc[translation.key]) {
                acc[translation.key] = {};
            }
            acc[translation.key][translation.language] = translation;
            return acc;
        }, {} as GroupedTranslations);
    }, [translations]);

    // Filter translations based on search term
    const filteredKeys = useMemo(() => {
        const keys = Object.keys(groupedTranslations);

        if (!searchTerm) return keys;

        return keys.filter(key =>
            key.toLowerCase().includes(searchTerm.toLowerCase()) ||
            Object.values(groupedTranslations[key]).some(translation =>
                translation.value.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [groupedTranslations, searchTerm]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Zarządzaj tłumaczeniami</h1>
                            <p className="text-sm text-gray-600">
                                Witaj spowrotem, {user?.email} • załadowano {translations.length} tłumaczeń
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={loadTranslations}
                                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                            >
                                <RefreshCw className="h-4 w-4 mr-2"/>
                                Odśwież
                            </button>
                            <button
                                onClick={handleLogout}
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                <LogOut className="h-4 w-4 mr-2"/>
                                Wyloguj się
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-3"/>
                                <input
                                    type="text"
                                    placeholder="Szukaj tłumaczeń..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="text-gray-700 w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                            </div>
                        </div>

                        {/* Add New Button */}
                        <button
                            onClick={addNewTranslation}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                        >
                            <Plus className="h-4 w-4 mr-2"/>
                            Dodaj tłumaczenie
                        </button>
                    </div>
                </div>

                {/* Translations Table */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">
                            Tłumaczenia ({filteredKeys.length})
                        </h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Klucz
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="flex items-center">
                                        <Globe className="h-4 w-4 mr-1"/>
                                        Polski
                                    </div>
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="flex items-center">
                                        <Globe className="h-4 w-4 mr-1"/>
                                        Angielski
                                    </div>
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="flex items-center">
                                        <Globe className="h-4 w-4 mr-1"/>
                                        Niemiecki
                                    </div>
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Akcje
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {filteredKeys.map((key) => {
                                const keyTranslations = groupedTranslations[key];
                                return (
                                    <tr key={key} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-gray-900 mb-1">{key}</div>
                                            <TranslationUsageDetails
                                                translationKey={key}
                                                isOpen={expandedUsage[key] || false}
                                                onToggle={() => toggleUsageExpansion(key)}
                                            />
                                        </td>

                                        {/* Polish */}
                                        <td className="px-6 py-4">
                                            {editingId === `${key}_pl` ? (
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="text"
                                                        value={editValue}
                                                        onChange={(e) => setEditValue(e.target.value)}
                                                        onKeyPress={(e) => {
                                                            if (e.key === 'Enter') {
                                                                updateTranslation(keyTranslations.pl?.id, editValue, 'pl', key);
                                                            }
                                                        }}
                                                        className="text-gray-700 flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                                    />
                                                    <button
                                                        onClick={() => updateTranslation(keyTranslations.pl?.id, editValue, 'pl', key)}
                                                        disabled={saving === keyTranslations.pl?.id}
                                                        className="p-1 text-green-600 hover:text-green-700"
                                                    >
                                                        <Save className="h-4 w-4"/>
                                                    </button>
                                                    <button
                                                        onClick={() => setEditingId(null)}
                                                        className="p-1 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <X className="h-4 w-4"/>
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex items-center space-x-2">
                                                    <span
                                                        className="text-sm text-gray-900">{keyTranslations.pl?.value || 'Brak'}</span>
                                                    <button
                                                        onClick={() => {
                                                            setEditingId(`${key}_pl`);
                                                            setEditValue(keyTranslations.pl?.value || '');
                                                        }}
                                                        className="p-1 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <Edit2 className="h-4 w-4"/>
                                                    </button>
                                                </div>
                                            )}
                                        </td>

                                        {/* English */}
                                        <td className="px-6 py-4">
                                            {editingId === `${key}_en` ? (
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="text"
                                                        value={editValue}
                                                        onChange={(e) => setEditValue(e.target.value)}
                                                        onKeyPress={(e) => {
                                                            if (e.key === 'Enter') {
                                                                updateTranslation(keyTranslations.en?.id, editValue, 'en', key);
                                                            }
                                                        }}
                                                        className="text-gray-700 flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                                    />
                                                    <button
                                                        onClick={() => updateTranslation(keyTranslations.en?.id, editValue, 'en', key)}
                                                        disabled={saving === keyTranslations.en?.id}
                                                        className="p-1 text-green-600 hover:text-green-700"
                                                    >
                                                        <Save className="h-4 w-4"/>
                                                    </button>
                                                    <button
                                                        onClick={() => setEditingId(null)}
                                                        className="p-1 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <X className="h-4 w-4"/>
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex items-center space-x-2">
                                                    <span
                                                        className="text-sm text-gray-900">{keyTranslations.en?.value || 'Brak'}</span>
                                                    <button
                                                        onClick={() => {
                                                            setEditingId(`${key}_en`);
                                                            setEditValue(keyTranslations.en?.value || '');
                                                        }}
                                                        className="p-1 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <Edit2 className="h-4 w-4"/>
                                                    </button>
                                                </div>
                                            )}
                                        </td>

                                        {/* German */}
                                        <td className="px-6 py-4">
                                            {editingId === `${key}_de` ? (
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="text"
                                                        value={editValue}
                                                        onChange={(e) => setEditValue(e.target.value)}
                                                        onKeyPress={(e) => {
                                                            if (e.key === 'Enter') {
                                                                updateTranslation(keyTranslations.de?.id, editValue, 'de', key);
                                                            }
                                                        }}
                                                        className="text-gray-700 flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                                    />
                                                    <button
                                                        onClick={() => updateTranslation(keyTranslations.de?.id, editValue, 'de', key)}
                                                        disabled={saving === keyTranslations.de?.id}
                                                        className="p-1 text-green-600 hover:text-green-700"
                                                    >
                                                        <Save className="h-4 w-4"/>
                                                    </button>
                                                    <button
                                                        onClick={() => setEditingId(null)}
                                                        className="p-1 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <X className="h-4 w-4"/>
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex items-center space-x-2">
                                                    <span
                                                        className="text-sm text-gray-900">{keyTranslations.de?.value || 'Brak'}</span>
                                                    <button
                                                        onClick={() => {
                                                            setEditingId(`${key}_de`);
                                                            setEditValue(keyTranslations.de?.value || '');
                                                        }}
                                                        className="p-1 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <Edit2 className="h-4 w-4"/>
                                                    </button>
                                                </div>
                                            )}
                                        </td>

                                        {/* Actions */}
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => deleteTranslationKey(key)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                <Trash2 className="h-4 w-4"/>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>

                    {filteredKeys.length === 0 && (
                        <div className="text-center py-12">
                            <Search className="mx-auto h-12 w-12 text-gray-400"/>
                            <h3 className="mt-4 text-sm font-medium text-gray-900">Nie znaleziono tłumaczeń</h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Spróbuj zmienić kryteria wyszukiwania lub dodaj nowe tłumaczenie.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}