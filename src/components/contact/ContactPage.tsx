'use client'

import React, { useState } from 'react'
import Navbar from '../header/Navbar'
import Footer from '../footer/Footer'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('')

        try {
            // Symulacja wysyłania maila - tutaj podłączyłbyś prawdziwy serwis
            await new Promise(resolve => setTimeout(resolve, 2000))

            setSubmitStatus('success')
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                service: ''
            })
        } catch {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Skontaktuj się z nami
                        </h1>
                        <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                            Jesteśmy gotowi pomóc Ci rozwinąć umiejętności językowe i biznesowe.
                            Napisz do nas już dziś!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Dane kontaktowe
                            </h2>

                            <div className="space-y-8">
                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Adres</h3>
                                        <p className="text-gray-600">
                                            ul. Poniatowskiego 28/4<br />
                                            40-055 Katowice<br />
                                            woj. śląskie
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
                                        <p className="text-gray-600">
                                            <a href="tel:+48123456789" className="hover:text-green-600 transition-colors">
                                                +48 606 622 736
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                                        <p className="text-gray-600">
                                            <a href="mailto:kontakt@anglokom.pl" className="hover:text-purple-600 transition-colors">
                                                idronia@anglokom.pl
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Working Hours */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Godziny pracy</h3>
                                        <p className="text-gray-600">
                                            Poniedziałek - Piątek: 8:00 - 17:00
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-12">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Znajdź nas w mediach społecznościowych</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-blue-800 text-white p-3 rounded-lg hover:bg-blue-900 transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    Napisz do nas
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name and Email Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Imię i nazwisko *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
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
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="jan@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone and Service Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Telefon
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="+48 123 456 789"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                                Interesująca usługa
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            >
                                                <option value="">Wybierz usługę</option>
                                                <option value="szkolenia-jezykowe">Szkolenia językowe</option>
                                                <option value="szkolenia-biznesowe">Szkolenia biznesowe</option>
                                                <option value="tlumaczenia">Tłumaczenia</option>
                                                <option value="kursy-online">Kursy online</option>
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
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
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

                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
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

                                    {/* Status Messages */}
                                    {submitStatus === 'success' && (
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-green-800">
                                                        Dziękujemy! Twoja wiadomość została wysłana. Odpowiemy w ciągu 24 godzin.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-red-800">
                                                        Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się telefonicznie.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Gotowy na rozwój?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Skontaktuj się z nami już dziś i rozpocznij swoją przygodę z językami i biznesem
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+606622736"
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Zadzwoń: +48 606 622 736
                        </a>
                        <a
                            href="mailto:idronia@anglokom.pl"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Napisz: idronia@anglokom.pl
                        </a>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}