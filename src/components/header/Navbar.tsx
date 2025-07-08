'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from "@/components/header/Logo"
import { colors, colorCombinations } from '@/styles/colors'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const { navbar } = colorCombinations

    return (
        <nav
            className="shadow-lg sticky top-0 z-50"
            style={{
                backgroundColor: navbar.background,
                borderBottom: `1px solid ${navbar.border}`
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Logo />

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {[
                                { href: '/', label: 'Strona Główna' },
                                { href: '/about-us', label: 'O firmie' },
                                { href: '/oferta', label: 'Oferta szkoleń' },
                                { href: '/biuro-tlumaczen', label: 'Biuro tłumaczeń' },
                                { href: '/audyty', label: 'Audyty' },
                                { href: '/blog', label: 'Blog' }
                            ].map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-3 py-2 text-md font-medium transition-all duration-300 relative group"
                                    style={{ color: navbar.text }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = navbar.textHover
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = navbar.text
                                    }}
                                >
                                    {item.label}
                                    <span
                                        className="absolute bottom-0 left-3 w-0 h-0.5 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"
                                        style={{ backgroundColor: navbar.underline }}
                                    />
                                </Link>
                            ))}

                            <Link
                                href="/contact"
                                className="px-6 py-2 rounded-md text-md font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                                style={{
                                    backgroundColor: colorCombinations.primaryButton.background,
                                    color: colorCombinations.primaryButton.text,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = colorCombinations.primaryButton.hover
                                    e.currentTarget.style.transform = 'translateY(-1px) scale(1.02)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = colorCombinations.primaryButton.background
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                                }}
                            >
                                Zadzwoń
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none transition-colors duration-200"
                            style={{ color: navbar.text }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = navbar.textHover
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = navbar.text
                            }}
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
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div
                        className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t"
                        style={{
                            backgroundColor: navbar.background,
                            borderColor: navbar.border
                        }}
                    >
                        {[
                            { href: '/', label: 'Strona Główna' },
                            { href: '/about-us', label: 'O firmie' },
                            { href: '/oferta', label: 'Oferta szkoleń' },
                            { href: '/biuro-tlumaczen', label: 'Biuro tłumaczeń' },
                            { href: '/audyty', label: 'Audyty' },
                            { href: '/blog', label: 'Blog' }
                        ].map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-3 py-2 text-base font-medium transition-all duration-300 relative group transform rounded-md ${
                                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                                    color: navbar.text,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = navbar.textHover
                                    e.currentTarget.style.backgroundColor = colors.background.gray
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = navbar.text
                                    e.currentTarget.style.backgroundColor = 'transparent'
                                }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                                <span
                                    className="absolute bottom-1 left-3 w-0 h-0.5 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"
                                    style={{ backgroundColor: navbar.underline }}
                                />
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className={`block px-3 py-2 rounded-md text-base font-medium mx-3 transition-all duration-300 transform hover:scale-105 shadow-md ${
                                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                            }`}
                            style={{
                                transitionDelay: isOpen ? '300ms' : '0ms',
                                backgroundColor: colorCombinations.primaryButton.background,
                                color: colorCombinations.primaryButton.text,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = colorCombinations.primaryButton.hover
                                e.currentTarget.style.transform = 'scale(1.02)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = colorCombinations.primaryButton.background
                                e.currentTarget.style.transform = 'scale(1)'
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