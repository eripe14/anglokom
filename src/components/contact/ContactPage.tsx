'use client'

import Navbar from '../header/navbar/Navbar'
import Footer from '../footer/Footer'
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <section className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white py-16 overflow-hidden relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Skontaktuj się z nami
                        </h1>
                        <p className="text-xl md:text-2xl text-sky-50 max-w-3xl mx-auto">
                            Jesteśmy gotowi pomóc Ci rozwinąć umiejętności językowe i biznesowe.
                            Napisz do nas już dziś!
                        </p>
                    </div>
                </div>
                <div
                    className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
                <div
                    className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                                            Biuro tłumaczeń:
                                            <a href="tel:+48606622736"
                                               className="hover:text-green-600 transition-colors">
                                                 +48 606 622 736
                                            </a>

                                        </p>
                                        <p className="text-gray-600">
                                            Szkolenia, audyty:
                                            <a href="tel:+48600238340"
                                               className="hover:text-green-600 transition-colors">
                                                +48 600 238 340
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
                                    <a href="#" className="bg-cyan-600 text-white p-3 rounded-lg hover:bg-cyan-700 transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-cyan-800 text-white p-3 rounded-lg hover:bg-cyan-900 transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-cyan-500 text-white p-3 rounded-lg hover:bg-cyan-600 transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-cyan-600 to-sky-700 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Gotowy na rozwój?
                    </h2>
                    <p className="text-xl text-sky-50 mb-8">
                        Skontaktuj się z nami już dziś i rozpocznij swoją przygodę z językami i biznesem
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+48606622736"
                            className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Zadzwoń: +48 606 622 736
                        </a>
                        <a
                            href="mailto:idronia@anglokom.pl"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors"
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