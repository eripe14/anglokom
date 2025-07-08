'use client'

import React from 'react';
import {
    BookOpen,
    Users,
    Globe,
    Award,
    MessageCircle,
    Building,
    Plane,
    CheckCircle,
    FileText,
    Eye,
    Edit3,
    Target
} from 'lucide-react';
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import ServiceCard from "@/components/about/ServiceCard";
import Image from "next/image";

const AboutPage = () => {
    const services = [
        {
            id: 1,
            title: "Szkolenia językowe dla firm",
            shortDesc: "Szyte na miarę potrzeb Klienta zajęcia językowe",
            fullDesc: "Intensywność, termin i metoda prowadzenia dostosowana do potrzeb Klienta. Zajęcia w siedzibie Klienta w godzinach przez niego ustalonych.",
            icon: <Building className="w-8 h-8"/>
        },
        {
            id: 2,
            title: "Kurs w Londynie",
            shortDesc: "Zajęcia z języka ogólnego (General English) i biznesowego (ESP)",
            fullDesc: "Kadrę nauczycielską stanowią doświadczeni native speakers. Idealne połączenie nauki z praktyką w naturalnym środowisku językowym.",
            icon: <Plane className="w-8 h-8"/>
        },
        {
            id: 3,
            title: "Szkolenia z komunikacji",
            shortDesc: "Szkolenia z komunikacji wielokulturowej i międzypokoleniowej",
            fullDesc: "Specjalistyczne szkolenia z komunikacji interpersonalnej i biznesowej. Rozwój umiejętności komunikacyjnych w różnych kontekstach.",
            icon: <MessageCircle className="w-8 h-8"/>
        },
        {
            id: 4,
            title: "Tłumaczenia",
            shortDesc: "Nasza firma od wielu lat oferuje usługi tłumaczeń pisemnych i ustnych",
            fullDesc: "Posiadamy tłumaczy specjalizujących się w tłumaczeniach ogólnych i specjalistycznych. Tłumaczenia przysięgłe i specjalistyczne.",
            icon: <FileText className="w-8 h-8"/>
        },
        {
            id: 5,
            title: "Wsparcie dla działów szkoleniowych",
            shortDesc: "Przeprowadzamy szkolenia z metodyki organizacji szkoleń",
            fullDesc: "Wsparcie w poprawie efektywności pracy działów szkoleniowych. Optymalizacja procesów szkoleń w organizacji.",
            icon: <Users className="w-8 h-8"/>
        },
        {
            id: 6,
            title: "Szkolenia dla nauczycieli",
            shortDesc: "Metodyczne szkolenia odświerzające dla szkół językowych",
            fullDesc: "Szkolenia metodyczne rad pedagogicznych. Rozwój kompetencji metodycznych nauczycieli języków obcych.",
            icon: <BookOpen className="w-8 h-8"/>
        },
        {
            id: 7,
            title: "Audyty językowe",
            shortDesc: "Sprawdzamy poziom biegłości językowej w trakcie procesów rekrutacyjnych",
            fullDesc: "Badanie biegłości językowej w trakcie procesów rekrutacyjnych. Oceniamy poziom zaawansowania językowego kandydatów.",
            icon: <CheckCircle className="w-8 h-8"/>
        },
        {
            id: 8,
            title: "Audyty kompetencyjne",
            shortDesc: "Audyty prowadzone są zarówno w języku polskim, jak i w angielskim",
            fullDesc: "Audyty ze szczególnym uwzględnieniem kompetencji komunikacyjnych. Kompleksowa ocena umiejętności zawodowych.",
            icon: <Award className="w-8 h-8"/>
        },
        {
            id: 9,
            title: "Audyty procesów komunikacyjnych",
            shortDesc: "Tworzymy optymalną mapę procesów komunikacyjnych Firmy",
            fullDesc: "Badamy jakość komunikacji zewnętrznej i wewnętrznej Firmy. Optymalizacja przepływu informacji w organizacji.",
            icon: <Globe className="w-8 h-8"/>
        },
        {
            id: 10,
            title: "Czytelność tekstów",
            shortDesc: "Sprawdzamy czytelność dokumentów szacując ich poziom „zamglenia”",
            fullDesc: "Oferta dotyczy badania poziomu trudności tekstów zarówno w języku polskim, jak i angielskim. Analiza zrozumiałości dokumentów.",
            icon: <Eye className="w-8 h-8"/>
        },
        {
            id: 11,
            title: "Korekty językowe",
            shortDesc: "Wykonujemy korekty językowe dokumentów i artykułów naukowych",
            fullDesc: "Korekty językowe zarówno w języku polskim, jak i w angielskim. Profesjonalna redakcja tekstów różnego typu.",
            icon: <Edit3 className="w-8 h-8"/>
        },
        {
            id: 12,
            title: "Coaching językowy",
            shortDesc: "To zindywidualizowana forma nauki nastawiona na konkretne oczekiwania Klienta",
            fullDesc: "Wykonywany pod kątem rozwoju języka angielskiego i polskiego. Personalizowane podejście do rozwoju językowego.",
            icon: <Target className="w-8 h-8"/>
        }
    ];

    const languages = [
        { name: "język angielski", flag: "uk" },
        { name: "język hiszpański", flag: "es" },
        { name: "język niemiecki", flag: "de" },
        { name: "język rosyjski", flag: "ru" },
        { name: "język ukraiński", flag: "ua" },
        { name: "język francuski", flag: "fr" },
        { name: "język chiński", flag: "cr" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Navbar />
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-6 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            ANGLOKOM
                        </h1>
                        <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed text-center">
                            Od 2000 roku specjalizujemy się w organizacji i prowadzeniu szkoleń językowych,
                            biznesowych oraz tłumaczeń. Oferujemy szeroką gamę usług skierowanych na komunikację
                            biznesową i językową.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-16">

                {/* About Section */}
                <div className="mb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">Nasza Kadra</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                                <p>
                                    Na naszych grupowych i indywidualnych kursach językowych kładziemy szczególny nacisk
                                    na konwersacje.
                                    Zajęcia prowadzone są przez doświadczonych, wykwalifikowanych i przygotowanych pod
                                    kątem metodycznym
                                    nauczycieli (także akademickich i native speakers).
                                </p>
                                <p>
                                    Naszą kadrę stanowią w pełni wykwalifikowani i doświadczeni lektorzy, trenerzy i
                                    tłumacze języków obcych.
                                    Szkolenia językowe prowadzone są przez magistrów danej filologii specjalizujących
                                    się w obszarze
                                    tematycznym profilu zawodowego naszych klientów.
                                </p>
                                <p>
                                    Tłumaczenia wykonywane są przez absolwentów specjalistycznych studiów i programów
                                    tłumaczeniowych,
                                    mających uprawnienia do wykonywania wszelkiego rodzaju tłumaczeń ustnych i
                                    pisemnych, również przysięgłych.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                            <h3 className="text-4xl font-bold text-gray-800 mb-6">Nasze języki</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {languages.map((lang, index) => (
                                    <div key={index}
                                         className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 group">
                                        <div
                                            className="w-16 h-16 rounded-full mb-3 group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                                            <img
                                                className="w-full h-full object-cover"
                                                src={`/images/flags/${lang.flag}-fl.png`}
                                                alt={`Anglokom | ${lang.name}`}
                                            />
                                        </div>
                                        <span
                                            className="text-gray-700 font-medium text-sm leading-tight">{lang.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Nasze Usługi</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Oferujemy kompleksowe rozwiązania w zakresie nauki języków, tłumaczeń i komunikacji
                            biznesowej
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {services.map((service) => (
                            <div key={service.id} className="w-full h-64">
                                <ServiceCard
                                    cardTitle={service.title}
                                    cardDescription={service.shortDesc}
                                    icon={service.icon}
                                    tooltipTitle={service.title}
                                    tooltipDescription={service.fullDesc}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Specializations */}
                <div className="mb-20">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Nasze Specjalizacje</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold text-blue-800 mb-4">Egzaminy Międzynarodowe</h4>
                                <div className="flex flex-wrap gap-3">
                                    {['FCE', 'CPE', 'CAE', 'LCCI'].map((exam) => (
                                        <span key={exam}
                                              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium hover:bg-blue-200 transition-colors">
                                          {exam}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-blue-800 mb-4">Języki Specjalistyczne</h4>
                                <div className="text-gray-600 space-y-2">
                                    <p>• Business English</p>
                                    <p>• Terminologia energetyczna, informatyczna, medyczna</p>
                                    <p>• Słownictwo prawnicze, logistyczne</p>
                                    <p>• Finanse i bankowość</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coverage Area */}
                <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl shadow-xl p-8 text-white">
                    <h3 className="text-3xl font-bold mb-6 text-center">Zasięg Działania</h3>
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm mb-6">
                            <Globe className="w-12 h-12 text-white"/>
                        </div>
                        <p className="text-2xl font-semibold text-blue-100 mb-4">
                            Cała Polska
                        </p>
                        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                            Realizujemy projekty na terenie całego kraju, dostosowując się do potrzeb i lokalizacji naszych klientów
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;