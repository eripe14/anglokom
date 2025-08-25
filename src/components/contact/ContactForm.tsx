'use client';

import React, { useState } from 'react';

type SubmitStatus = '' | 'success' | 'error';

const MAX_TOTAL_SIZE_MB = 20; // limit łączny (Gmail ≈ 25MB)
const ALLOWED_TYPES = [
    'application/pdf',
    'image/png',
    'image/jpeg',
    'image/jpg',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: '',
    });
    const [files, setFiles] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('');
    const [errorMsg, setErrorMsg] = useState<string>('');

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = Array.from(e.target.files ?? []);
        if (!selected.length) return;

        // walidacja typu i rozmiaru (łączna)
        const merged = [...files, ...selected];
        const invalidType = merged.find(f => !ALLOWED_TYPES.includes(f.type));
        if (invalidType) {
            setErrorMsg(`Niedozwolony typ pliku: ${invalidType.name} (${invalidType.type})`);
            return;
        }

        const totalSizeMB = merged.reduce((sum, f) => sum + f.size, 0) / (1024 * 1024);
        if (totalSizeMB > MAX_TOTAL_SIZE_MB) {
            setErrorMsg(`Łączny rozmiar załączników przekracza ${MAX_TOTAL_SIZE_MB} MB`);
            return;
        }

        setErrorMsg('');
        setFiles(merged);
        // reset inputa, aby można było dodać ten sam plik ponownie po usunięciu
        e.currentTarget.value = '';
    };

    const removeFile = (index: number) => {
        const next = [...files];
        next.splice(index, 1);
        setFiles(next);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');
        setErrorMsg('');

        try {
            const fd = new FormData();
            Object.entries(formData).forEach(([k, v]) => fd.append(k, v));
            files.forEach(file => fd.append('attachments', file));

            const res = await fetch('/api/contact', {
                method: 'POST',
                body: fd, // WAŻNE: bez Content-Type — przeglądarka ustawi multipart/form-data
            });

            if (!res.ok) throw new Error('Wysyłka nie powiodła się');

            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '', service: '' });
            setFiles([]);
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Napisz do nas</h2>
            <p className="text-gray-600 mb-8">
                Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Imię i nazwisko *
                        </label>
                        <input
                            id="name"
                            name="name"
                            required
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Jan Kowalski"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                        </label>
                        <input
                            id="email"
                            name="email"
                            required
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="jan@example.com"
                        />
                    </div>
                </div>

                {/* Phone & Service */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Telefon
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="+48 123 456 789"
                        />
                    </div>
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                            Wybierz usługę *
                        </label>
                        <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleInputChange}
                            className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                            <option value="">Wybierz usługę</option>
                            <option value="szkolenia-jezykowe">Szkolenia językowe</option>
                            <option value="szkolenia-biznesowe">Szkolenia biznesowe</option>
                            <option value="kursy-maturalne">Kursy maturalne</option>
                            <option value="tlumaczenia">Tłumaczenia</option>
                            <option value="audyty">Audyty</option>
                            <option value="inne">Inne</option>
                        </select>
                    </div>
                </div>

                {/* Subject */}
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Temat *
                    </label>
                    <input
                        id="subject"
                        name="subject"
                        required
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                        placeholder="Zapytanie o szkolenia"
                    />
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Wiadomość *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="Opisz swoje potrzeby szkoleniowe..."
                    />
                </div>

                {/* Attachments */}
                <div>
                    <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-2">
                        Załączniki (opcjonalnie)
                    </label>
                    <input
                        id="attachments"
                        name="attachments"
                        type="file"
                        multiple
                        accept={ALLOWED_TYPES.join(',')}
                        onChange={handleFileChange}
                        className="block w-full text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0
                       file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
                    />
                    {!!files.length && (
                        <ul className="mt-3 space-y-2">
                            {files.map((f, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center justify-between text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2"
                                >
                                    <span className="truncate">{f.name} <span className="text-gray-400">({(f.size/1024/1024).toFixed(2)} MB)</span></span>
                                    <button
                                        type="button"
                                        onClick={() => removeFile(idx)}
                                        className="text-red-600 hover:text-red-700 font-medium"
                                    >
                                        Usuń
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                    <p className="mt-2 text-xs text-gray-500">
                        Dozwolone: PDF, JPG, PNG, DOC, DOCX. Limit łączny {MAX_TOTAL_SIZE_MB} MB.
                    </p>
                </div>

                {/* Submit */}
                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-cyan-600 py-4 px-6 rounded-lg font-semibold hover:bg-gradient-to-r from-cyan-600 to-sky-700 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                    >
                        {isSubmitting ? (
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Wysyłanie...
                            </div>
                        ) : (
                            'Wyślij wiadomość'
                        )}
                    </button>
                </div>

                {/* Alerts */}
                {errorMsg && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-sm font-medium text-red-800">{errorMsg}</p>
                    </div>
                )}

                {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-sm font-medium text-green-800">
                            Dziękujemy! Twoja wiadomość została wysłana. Odpowiemy w ciągu 24 godzin.
                        </p>
                    </div>
                )}
                {submitStatus === 'error' && !errorMsg && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-sm font-medium text-red-800">
                            Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się telefonicznie.
                        </p>
                    </div>
                )}
            </form>
        </div>
    );
}
