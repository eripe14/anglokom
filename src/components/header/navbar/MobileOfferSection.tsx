'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { BookOpen, ChevronDown } from "lucide-react";
import { offerItems, scrollToSection } from './offerData';

export default function MobileOfferSection({ isOpen, closeMenu, t }: { isOpen: boolean; closeMenu: () => void; t: (key: string) => string }) {
    const router = useRouter();

    const handleOfferClick = (sectionId: string) => {
        scrollToSection(sectionId, router);
        closeMenu();
    };

    return (
        <div className="bg-gradient-to-r from-cyan-50 to-sky-50 rounded-xl p-4 border border-cyan-100">
            <div className="text-gray-800 font-semibold text-base mb-3 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-sky-600" />
                {t('nav.offer') || 'Nasza oferta'}
            </div>
            <div className="space-y-2">
                {offerItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <button
                            key={item.section}
                            onClick={() => handleOfferClick(item.section)}
                            className={`w-full text-left p-3 rounded-lg bg-white hover:bg-gradient-to-r hover:from-white hover:to-sky-50 transition-all duration-300 group border border-transparent hover:border-sky-200 hover:shadow-sm ${
                                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                            }`}
                            style={{
                                transitionDelay: isOpen ? `${(index + 2) * 80}ms` : '0ms'
                            }}
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-gray-800 font-medium text-sm group-hover:text-sky-700 transition-colors duration-300">
                                        {item.label}
                                    </div>
                                    <div className="text-gray-500 text-xs mt-0.5">
                                        {item.description}
                                    </div>
                                </div>
                                <ChevronDown className="h-4 w-4 text-gray-400 rotate-[-90deg] group-hover:text-sky-500 transition-colors duration-300" />
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Mobile footer link */}
            <Link
                href="/oferta"
                className="block w-full text-center py-2.5 px-4 mt-3 text-sm font-medium text-sky-700 hover:text-sky-800 bg-white hover:bg-sky-50 rounded-lg transition-all duration-300 border border-sky-200"
                onClick={closeMenu}
            >
                Zobacz całą ofertę →
            </Link>
        </div>
    );
}