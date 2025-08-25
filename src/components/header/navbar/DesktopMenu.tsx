'use client'

import Link from 'next/link'
import LanguageToggle from "@/components/header/LanguageToggle";
import OfferDropdown from './OfferDropdown';

export default function DesktopMenu({t}: { t: (key: string) => string }) {
    return (
        <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
                <div className="flex items-baseline space-x-4">
                    <Link
                        href="/"
                        className="text-gray-700 hover:text-sky-700 px-3 py-3 text-md font-medium transition-colors duration-300 relative group"
                    >
                        {t('nav.home')}
                        <span
                            className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                    </Link>
                    <Link
                        href="/o-firmie"
                        className="text-gray-700 hover:text-sky-700 px-3 py-3 text-md font-medium transition-colors duration-300 relative group"
                    >
                        {t('nav.about')}
                        <span
                            className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                    </Link>

                    <OfferDropdown t={t}/>

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

                    {/*
                    <Link
                        href="/blog"
                        className="text-gray-700 hover:text-sky-700 px-3 py-3 text-md font-medium transition-colors duration-300 relative group"
                    >
                        {t('nav.blog')}
                        <span
                            className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                    </Link>*/}

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

            </div>
        </div>
    );
}
