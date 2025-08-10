'use client'

import React from 'react';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import Footer from '@/components/footer/Footer';
import {useLanguage} from "@/contexts/LanguageContext";
import Navbar from "@/components/header/navbar/Navbar";
import {Element, Link as ScrollLink} from "react-scroll";
import Image from "next/image";

interface AuditCard {
    title: string;
    description: string;
    image: string;
    slug: string;
}

export default function AuditsPage() {
    const {t} = useLanguage();

    const audits: AuditCard[] = [
        {
            title: t('audits.language.title'),
            description: t('audits.language.description'),
            image: "/images/audits/audyty-jezykowe.jpg",
            slug: "audyty-jezykowe",
        },
        {
            title: t('audits.communication.title'),
            description: t('audits.communication.description'),
            image: "/images/audits/audyty-komunikacji.jpg",
            slug: "audyty-procesow-komunikacyjnych",
        },
        {
            title: t('audits.competence.title'),
            description: t('audits.competence.description'),
            image: "/images/audits/audyty-kompetencyjne.jpg",
            slug: "audyty-kompetencyjne",
        },
        {
            title: t('audits.amendments.title'),
            description: t('audits.amendments.description'),
            image: "/images/audits/audyty-poprawki.jpg",
            slug: "audyty-czytelnosci-dokumentow",
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar/>

            <div className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto px-6 py-20 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            {t('audits.hero.title')}
                        </h1>
                        <p className="text-xl text-sky-100 max-w-4xl mx-auto leading-relaxed text-justify">
                            {t('audits.hero.description')}
                        </p>
                    </div>
                    <div className="text-center mt-4">
                        <ScrollLink
                            to="audits-section"
                            smooth={true}
                            duration={500}
                            offset={-60}
                        >
                            <button
                                className="bg-transparent border-2 cursor-pointer border-white text-white hover:bg-white hover:text-sky-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Poznaj naszą ofertę
                            </button>
                        </ScrollLink>
                    </div>
                </div>

                <div
                    className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
                <div
                    className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
            </div>

            {/* Audits Grid */}
            <Element name="audits-section">
                <section className="py-20 bg-gray-50" id="oferta">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                {t('audits.section.title')}
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                {t('audits.section.subtitle')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch">
                            {audits.map((audit, index) => (
                                <div key={index} className="group">
                                    <div
                                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                                        {/* Image */}
                                        <div className="aspect-[16/10] overflow-hidden relative">
                                            <Image
                                                className="w-full h-full object-cover"
                                                src={audit.image}
                                                alt={audit.title}
                                                fill
                                            >
                                            </Image>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="flex items-center mb-6 min-h-[60px]">
                                                <h3 className="text-2xl font-bold text-gray-900">
                                                    {audit.title}
                                                </h3>
                                            </div>

                                            {/* CTA Button */}
                                            <div className="mt-auto">
                                                <Link href={`/audyty/${audit.slug}`}>
                                                    <button
                                                        className="w-full bg-gradient-to-r from-cyan-600 to-sky-700 text-white py-4 px-6 rounded-xl font-semibold text-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">
                                                        <span className="flex items-center justify-center">
                                                            {t('audits.card.learnMore')}
                                                            <ArrowRight size={20}
                                                                        className="ml-2 group-hover:translate-x-1 transition-transform"/>
                                                        </span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            </Element>
            {/* CTA Section */}
            <section className="py-16 mt-12 bg-gradient-to-r from-cyan-600 to-sky-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('audits.cta.title')}
                        </h2>
                        <p className="text-xl text-sky-50 mb-8 leading-relaxed">
                            {t('audits.cta.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact">
                                <button
                                    className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    {t('audits.cta.contactButton')}
                                </button>
                            </Link>
                            <Link href="/oferta">
                                <button
                                    className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                                    {t('audits.cta.offerButton')}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Decorative background */}
                <div
                    className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
                <div
                    className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-40 -translate-x-40"></div>
            </section>

            <Footer/>
        </div>
    );
}