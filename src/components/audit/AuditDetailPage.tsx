'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import {useLanguage} from "@/contexts/LanguageContext";
import Navbar from "@/components/header/navbar/Navbar";
import Footer from "@/components/footer/Footer";

interface AuditDetailPageProps {
    audit: {
        title: string;
        description: string;
        image: string;
    };
}

export default function AuditDetailPage({ audit }: AuditDetailPageProps) {
    const { t } = useLanguage();

    return (

        <div className="min-h-screen bg-white">
            <Navbar/>
            {/* Header with back button */}
            <div className="bg-white">
                <div className="container mx-auto px-6 py-6">
                    <Link
                        href="/audyty#oferta"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600/90 to-sky-700/90 backdrop-blur-sm text-white rounded-full shadow-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group"

                    >
                        <ArrowLeft
                            size={22}
                            className="transition-transform group-hover:-translate-x-1"
                        />
                        {t('audit.backToAudits')}
                    </Link>


                </div>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Image */}
                    <div className="mb-8">
                        <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={audit.image}
                                alt={audit.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    <div className="prose prose-xl max-w-none">
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-relaxed text-justify">
                                {audit.title}
                            </h1>
                            <p className="text-gray-700 leading-relaxed text-justify text-lg">
                                {audit.description}
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <div className="bg-gradient-to-r from-cyan-600 to-sky-700 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">
                                {t('audit.interestedTitle')}
                            </h3>
                            <p className="text-sky-50 mb-6 text-lg leading-relaxed">
                                {t('audit.interestedDescription')}
                            </p>
                            <Link href="/kontakt">
                                <button
                                    className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    {t('audit.contactButton')}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}