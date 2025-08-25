import React from 'react';
import { GraduationCap, Users, User } from 'lucide-react';
import OfferSectionHeader from "@/components/offer/OfferSectionHeader";
import OfferServiceCard from "@/components/offer/OfferServiceCard";

export default function MaturaExamTrainingOffer() {
    const maturaServices = [
        {
            cardTitle: "Kurs indywidualny",
            cardDescription: "Pełne skupienie na Twoich potrzebach i celach maturalnych",
            icon: <User size={24} />,
            slug: "kursy-maturalne/indywidualne"
        },
        {
            cardTitle: "Kurs dwuosobowy",
            cardDescription: "Ucz się efektywnie w duecie – taniej i motywująco",
            icon: <Users size={24} />,
            slug: "kursy-maturalne/dwojki"
        },
        {
            cardTitle: "Kurs trzyosobowy",
            cardDescription: "Idealna równowaga między ceną a indywidualnym podejściem",
            icon: <Users size={24} />,
            slug: "kursy-maturalne/trojki"
        },
        {
            cardTitle: "Kurs czteroosobowy",
            cardDescription: "Więcej interakcji, świetna dynamika i niższa cena za osobę",
            icon: <Users size={24} />,
            slug: "kursy-maturalne/czworki"
        }
    ];

    return (
        <section className="py-16 bg-white" id="kursy-maturalne">
            <div className="container mx-auto px-6">
                <OfferSectionHeader
                    title="Kursy maturalne"
                    subtitle="Przygotowanie do matury z języka angielskiego – poziom podstawowy i rozszerzony"
                    icon={<GraduationCap size={32} />}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {maturaServices.map((service, index) => (
                        <OfferServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
