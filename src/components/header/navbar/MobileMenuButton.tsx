'use client'

import {Languages} from "lucide-react";

export default function MobileMenuButton({isOpen, setIsOpen, language, toggleLanguage}: {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    language: string;
    toggleLanguage: () => void
}) {
    return (
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
                <Languages className="h-3.5 w-3.5 mr-1.5 transition-transform duration-300 group-hover:rotate-12"/>
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
    );
}
