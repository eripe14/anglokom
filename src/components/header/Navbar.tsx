'use client'

import {useState} from 'react'
import Link from 'next/link'
import Logo from "@/components/header/Logo";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Logo />

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-sky-700 px-3 py-2 text-md font-medium transition-colors duration-300 relative group"
                            >
                                Strona Główna
                                <span
                                    className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                            </Link>
                            <Link
                                href="/about-us"
                                className="text-gray-700 hover:text-sky-700 px-3 py-2 text-md font-medium transition-colors duration-300 relative group"
                            >
                                O firmie
                                <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                            </Link>
                            <Link
                                href="/oferta"
                                className="text-gray-700 hover:text-sky-700 px-3 py-2 text-md font-medium transition-colors duration-300 relative group"
                            >
                                Oferta szkoleń
                                <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                            </Link>
                            <Link
                                href="/biuro-tlumaczen"
                                className="text-gray-700 hover:text-sky-700 px-3 py-2 text-md font-medium transition-colors duration-300 relative group"
                            >
                                Biuro tłumaczeń
                                <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                            </Link>
                            <Link
                                href="/audyty"
                                className="text-gray-700 hover:text-sky-700 px-3 py-2 text-md font-medium transition-colors duration-300 relative group"
                            >
                                Audyty
                                <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                            </Link>
                            <Link
                                href="/blog"
                                className="text-gray-700 hover:text-sky-700 px-3 py-2 text-md font-medium transition-colors duration-300 relative group"
                            >
                                Blog
                                <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-cyan-600 text-white hover:bg-gradient-to-r from-cyan-600 to-sky-700 px-4 py-2 rounded-md text-md font-medium transition duration-300 ease-linear"
                            >
                                Zadzwoń
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-sky-700 focus:outline-none focus:text-sky-700 transition-colors duration-200"
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
                <div className={`md:hidden overflow-hidden transition-all duration-750 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
                        {[
                            { href: '/', label: 'Strona Główna' },
                            { href: '/o-firmie', label: 'O firmie' },
                            { href: '/oferta', label: 'Oferta szkoleń' },
                            { href: '/biuro-tlumaczen', label: 'Biuro tłumaczeń' },
                            { href: '/audyty', label: 'Audyty' },
                            { href: '/blog', label: 'Blog' }
                        ].map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-gray-700 hover:text-sky-700 block px-3 py-2 text-base font-medium transition-all duration-300 relative group transform ${
                                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                                }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                                <span className="absolute bottom-1 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className={`bg-gradient-to-r from-cyan-600 to-sky-700 text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium mx-3 transition-all duration-300 transform hover:scale-105 ${
                                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                            }`}
                            style={{
                                transitionDelay: isOpen ? '250ms' : '0ms'
                            }}
                            onClick={() => setIsOpen(false)}
                        >
                            Zadzwoń
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}