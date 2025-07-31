'use client'

import { useState } from 'react'
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "@/components/header/Logo";
import DesktopMenu from './DesktopMenu';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { t, language, toggleLanguage } = useLanguage();

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center text-lg h-20">
                    <Logo />

                    {/* Desktop Menu */}
                    <DesktopMenu t={t} />

                    {/* Mobile menu button and language toggle */}
                    <MobileMenuButton
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        language={language}
                        toggleLanguage={toggleLanguage}
                    />
                </div>

                {/* Mobile Menu */}
                <MobileMenu
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    t={t}
                />
            </div>
        </nav>
    )
}