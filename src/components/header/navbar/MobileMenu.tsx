'use client'

import Link from 'next/link'
import MobileOfferSection from './MobileOfferSection';

export default function MobileMenu({ isOpen, setIsOpen, t }: { isOpen: boolean; setIsOpen: (value: boolean) => void; t: (key: string) => string }) {
    const closeMenu = () => setIsOpen(false);

    const basicMenuItems = [
        { href: '/', label: t('nav.home') || 'Strona Główna' },
        { href: '/o-firmie', label: t('nav.about') || 'O firmie' }
    ];

    const otherMenuItems = [
        { href: '/biuro-tlumaczen', label: t('nav.translations') || 'Biuro tłumaczeń' },
        { href: '/audyty', label: t('nav.audits') || 'Audyty' }

    ];

    {/*{ href: '/blog', label: t('nav.blog') || 'Blog' }*/}

    return (
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
            <div className="px-2 pt-4 pb-6 space-y-3 sm:px-3 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 shadow-lg">

                {/* Basic Menu Items */}
                {basicMenuItems.map((item, index) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`text-gray-700 hover:text-sky-700 hover:bg-sky-50 block px-4 py-3 text-base font-medium transition-all duration-300 relative group transform rounded-lg ${
                            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`}
                        style={{
                            transitionDelay: isOpen ? `${index * 60}ms` : '0ms'
                        }}
                        onClick={closeMenu}
                    >
                        {item.label}
                        <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>
                    </Link>
                ))}

                {/* Offer Section */}
                <MobileOfferSection
                    isOpen={isOpen}
                    closeMenu={closeMenu}
                    t={t}
                />

                {/* Other Menu Items */}
                {otherMenuItems.map((item, index) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`text-gray-700 hover:text-sky-700 hover:bg-sky-50 block px-4 py-3 text-base font-medium transition-all duration-300 relative group transform rounded-lg ${
                            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`}
                        style={{
                            transitionDelay: isOpen ? `${(index + 6) * 60}ms` : '0ms'
                        }}
                        onClick={closeMenu}
                    >
                        {item.label}
                        <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>
                    </Link>
                ))}

                {/* Contact Button */}
                <div className="pt-4 border-t border-gray-200 mx-2">
                    <Link
                        href="/kontakt"
                        className={`bg-gradient-to-r from-cyan-600 to-sky-700 hover:from-cyan-700 hover:to-sky-800 text-white block px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center relative overflow-hidden group ${
                            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`}
                        style={{
                            transitionDelay: isOpen ? '600ms' : '0ms'
                        }}
                        onClick={closeMenu}
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
    );
}