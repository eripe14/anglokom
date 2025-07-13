import { BookOpen, Users, Globe, Award } from 'lucide-react';
import OfferSectionHeader from "@/components/offer/OfferSectionHeader";

export default function Features() {
    const features = [
        {
            icon: <Users size={24} />,
            title: "Doświadczeni trenerzy",
            description: "Zespół certyfikowanych specjalistów z wieloletnim doświadczeniem"
        },
        {
            icon: <BookOpen size={24} />,
            title: "Autorskie programy",
            description: "Materiały szkoleniowe opracowane przez naszych ekspertów"
        },
        {
            icon: <Globe size={24} />,
            title: "Międzynarodowe standardy",
            description: "Szkolenia zgodne z najwyższymi standardami europejskimi"
        },
        {
            icon: <Award size={24} />,
            title: "Certyfikaty",
            description: "Potwierdzenie ukończenia szkolenia i zdobytych kompetencji"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <OfferSectionHeader
                    title="Dlaczego ANGLOKOM?"
                    subtitle="Poznaj nasze mocne strony i zobacz, co nas wyróżnia na rynku szkoleń"
                    icon={<Award size={32} />}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-gradient-to-r from-cyan-600 to-sky-700 rounded-full text-white">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}