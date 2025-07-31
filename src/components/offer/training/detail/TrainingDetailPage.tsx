import React from 'react';
import Link from 'next/link';
import {ArrowLeft, Clock, Users, MapPin, Award, CheckCircle, GraduationCap, Star} from 'lucide-react';
import {TrainingDetail, ContentSection} from "@/components/offer/training/detail/TrainingDetail";
import Navbar from "@/components/header/navbar/Navbar";
import Footer from "@/components/footer/Footer";

interface TrainingDetailPageProps {
    training: TrainingDetail;
}

export default function TrainingDetailPage({training}: TrainingDetailPageProps) {
    const renderContent = (section: ContentSection) => {
        switch (section.type) {
            case 'list':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(section.content as string[]).map((item, index) => (
                            <div key={index} className="flex items-start">
                                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20}/>
                                <span className="text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                );
            case 'grid':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(section.content as { title: string; description: string }[]).map((item, index) => (
                            <div key={index} className="bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                <h4 className="font-semibold text-gray-800 text-lg mb-2">{item.title}</h4>
                                <p className="text-gray-700 text-md text-justify">{item.description}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'custom':
                return section.content as React.ReactNode;
            case 'schedule':
                return (
                    <div className="overflow-x-auto">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <table className="min-w-full">
                                <thead>
                                <tr className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white">
                                    <th className="px-6 py-4 text-left font-semibold text-lg">
                                        <div className="flex items-center">
                                            <Clock className="mr-2" size={20}/>
                                            Godzina
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 text-left font-semibold text-lg">
                                        <div className="flex items-center">
                                            <GraduationCap className="mr-2" size={20}/>
                                            Opis
                                        </div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {(section.content as { time: string; description: string }[]).map((row, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full font-bold text-sm">
                                                    {row.time}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-gray-700 leading-relaxed font-medium">
                                                {row.description}
                                            </p>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed text-justify">{section.content as string}</p>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white">
                <div className="container mx-auto px-6 py-16">
                    <Link
                        href="/oferta"
                        className="inline-flex items-center text-white text-2xl hover:text-white mb-6 transition-colors duration-300 group"
                    >
                        <ArrowLeft size={26} className="mr-2 group-hover:-translate-x-1 transition-transform"/>
                        Powrót do oferty
                    </Link>
                    <div className="flex items-center mb-6">
                        <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm mr-4">
                            {training.icon}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold">{training.title}</h1>
                    </div>
                    <p className="text-xl text-sky-50 max-w-3xl leading-relaxed">
                        {training.subtitle}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">O szkoleniu</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                                    {training.description}
                                </p>
                            </div>
                        </div>

                        {/* Features */}
                        {training.features.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Co oferujemy?</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {training.features.map((feature, index) => (
                                        <div key={index} className="flex items-start">
                                            <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20}/>
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Dynamic Content Sections */}
                        {training.content.sections.map((section, index) => (
                            <div key={index}>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">{section.title}</h3>
                                {renderContent(section)}
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-100 rounded-xl p-6 top-6 shadow-lg hover:shadow-2xl duration-500 transition-shadow">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Szczegóły szkolenia</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Clock className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={20}/>
                                    <div>
                                        <p className="font-semibold text-gray-800">Czas trwania</p>
                                        <p className="text-gray-700">{training.details.duration}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Users className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={20}/>
                                    <div>
                                        <p className="font-semibold text-gray-800">Wielkość grupy</p>
                                        <p className="text-gray-700">{training.details.groupSize}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={20}/>
                                    <div>
                                        <p className="font-semibold text-gray-800">Miejsce</p>
                                        <p className="text-gray-700">{training.details.location}</p>
                                    </div>
                                </div>
                                {training.details.level && (
                                    <div className="flex items-start">
                                        <Star className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={20}/>
                                        <div>
                                            <p className="font-semibold text-gray-800">Poziom</p>
                                            <p className="text-gray-700">{training.details.level}</p>
                                        </div>
                                    </div>
                                )}
                                {training.details.certificate && (
                                    <div className="flex items-start">
                                        <Award className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={20}/>
                                        <div>
                                            <p className="font-semibold text-gray-800">Certyfikat</p>
                                            <p className="text-gray-700">Tak, po ukończeniu</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 pt-6 border-t space-y-3">
                                <Link
                                    href={training.cta.primaryButtonLink || '/contact'}
                                >
                                    <button
                                        className="w-full bg-gradient-to-r from-cyan-600 to-sky-700 text-white py-3 px-6 my-5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                        {training.cta.primaryButton}
                                    </button>
                                </Link>
                                {training.cta.secondaryButton && (
                                    <button
                                        className="w-full border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                                        {training.cta.secondaryButton}
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Additional Info Card */}
                        <div className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white rounded-xl p-6 mt-6 shadow-lg hover:shadow-2xl duration-500 transition-shadow">
                            <div className="flex items-center mb-4">
                                <GraduationCap className="mr-3" size={24}/>
                                <h4 className="text-lg font-bold">Dlaczego ANGLOKOM?</h4>
                            </div>
                            <ul className="space-y-2 text-md text-sky-50">
                                <li>• Ponad 20 lat doświadczenia</li>
                                <li>• Certyfikowani trenerzy</li>
                                <li>• Autorskie materiały</li>
                                <li>• Elastyczne terminy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}