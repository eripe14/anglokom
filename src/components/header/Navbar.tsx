'use client'

import {useState} from 'react'
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import Link from 'next/link'
import Logo from "@/components/header/Logo";
import LanguageToggle from "@/components/header/LanguageToggle";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { t, language, toggleLanguage } = useLanguage();

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center text-lg h-20">
                    <Logo/>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <div className="flex items-baseline space-x-4">
                                <Link
                                    href="/o-firmie"
                                    className="text-gray-700 hover:text-sky-700 px-3 py-3 text-md font-medium transition-colors duration-300 relative group"
                                >
                                    {t('nav.about')}
                                    <span
                                        className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                                </Link>
                                <Link
                                    href="/oferta"
                                    className="text-gray-700 hover:text-sky-700 px-3 py-3 text-md font-medium transition-colors duration-300 relative group"
                                >
                                    {t('nav.offer')}
                                    <span
                                        className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                                </Link>
                                <Link
                                    href="/biuro-tlumaczen"
                                    className="text-gray-700 hover:text-sky-700 px-3 py-3 text-md font-medium transition-colors duration-300 relative group"
                                >
                                    {t('nav.translations')}
                                    <span
                                        className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                                </Link>
                                <Link
                                    href="/audyty"
                                    className="text-gray-700 hover:text-sky-700 px-3 py-3 text-md font-medium transition-colors duration-300 relative group"
                                >
                                    {t('nav.audits')}
                                    <span
                                        className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                                </Link>
                                <Link
                                    href="/blog"
                                    className="text-gray-700 hover:text-sky-700 px-3 py-3 text-md font-medium transition-colors duration-300 relative group"
                                >
                                    {t('nav.blog')}
                                    <span
                                        className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                                </Link>
                                <Link
                                    href="/kontakt"
                                    className="text-gray-700 hover:text-sky-700 px-3 py-3 text-md font-medium transition-colors duration-300 relative group"
                                >
                                    {t('nav.contact')}
                                    <span
                                        className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                                </Link>
                            </div>

                            {/* Language Toggle - separated for better visual hierarchy */}
                            <div className="border-l border-gray-300 pl-4">
                                <LanguageToggle/>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button and language toggle */}
                    <div className="md:hidden flex items-center space-x-3">
                        {/* Mobile Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="group relative flex items-center justify-center h-9 px-2.5 py-1.5
                                       bg-gradient-to-r from-cyan-600 to-sky-700
                                       hover:from-cyan-700 hover:to-sky-800
                                       text-white rounded-md transition-all duration-300
                                       transform hover:scale-105
                                       focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1"
                            aria-label={`Switch language to ${language === 'pl' ? 'English' : 'Polish'}`}
                        >
                            <Languages className="h-3.5 w-3.5 mr-1.5 transition-transform duration-300 group-hover:rotate-12" />
                            <span className="text-xs font-medium uppercase tracking-wide">
                                {language}
                            </span>
                        </button>

                        {/* Hamburger Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-sky-700 focus:outline-none focus:text-sky-700 transition-colors duration-200 p-2 rounded-md hover:bg-gray-100"
                            aria-label="Toggle navigation menu"
                        >
                            <svg
                                className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Animated */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className="px-2 pt-4 pb-6 space-y-2 sm:px-3 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 shadow-lg">
                        {[
                            { href: '/', label: t('nav.home') || 'Strona Główna' },
                            { href: '/o-firmie', label: t('nav.about') || 'O firmie' },
                            { href: '/oferta', label: t('nav.offer') || 'Nasza oferta' },
                            { href: '/biuro-tlumaczen', label: t('nav.translations') || 'Biuro tłumaczeń' },
                            { href: '/audyty', label: t('nav.audits') || 'Audyty' },
                            { href: '/blog', label: t('nav.blog') || 'Blog' }
                        ].map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-gray-700 hover:text-sky-700 hover:bg-sky-50 block px-4 py-3 text-base font-medium transition-all duration-300 relative group transform rounded-lg ${
                                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: isOpen ? `${index * 60}ms` : '0ms'
                                }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                                <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>
                            </Link>
                        ))}

                        {/* Contact Button with enhanced styling */}
                        <div className="pt-4 border-t border-gray-200 mx-2">
                            <Link
                                href="/kontakt"
                                className={`bg-gradient-to-r from-cyan-600 to-sky-700 hover:from-cyan-700 hover:to-sky-800 text-white block px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center relative overflow-hidden group ${
                                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: isOpen ? '400ms' : '0ms'
                                }}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    {t('nav.contact')}
                                </span>

                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                                               translate-x-[-100%] group-hover:translate-x-[100%]
                                               transition-transform duration-700 ease-in-out rounded-lg"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}