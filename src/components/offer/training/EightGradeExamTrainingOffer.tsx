import React from 'react';
import { GraduationCap, Users, User, School } from 'lucide-react';
import OfferSectionHeader from "@/components/offer/OfferSectionHeader";
import OfferServiceCard from "@/components/offer/OfferServiceCard";

export default function EightGradeExamTrainingOffer() {
    const maturaServices = [
        {
            cardTitle: "Kurs indywidualny",
            cardDescription: "Pełne skupienie na Twoich potrzebach i celach w przygotowaniu do egzaminu ósmoklasisty",
            icon: <User size={24} />,
            slug: "kontakt"
        },
        {
            cardTitle: "Kurs dwuosobowy",
            cardDescription: "Ucz się efektywnie w duecie – taniej i motywująco",
            icon: <Users size={24} />,
            slug: "kontakt"
        },
        {
            cardTitle: "Kurs trzyosobowy",
            cardDescription: "Idealna równowaga między ceną a indywidualnym podejściem",
            icon: <Users size={24} />,
            slug: "kontakt"
        },
        {
            cardTitle: "Kurs czteroosobowy",
            cardDescription: "Więcej interakcji, świetna dynamika i niższa cena za osobę",
            icon: <Users size={24} />,
            slug: "kontakt"
        }
    ];

    return (
        <section className="py-16 bg-white" id="kursy-dla-8klasistow">
            <div className="container mx-auto px-6">
                <OfferSectionHeader
                    title="Kursy dla ósmoklasistów"
                    subtitle="Przygotowanie do egzaminu ośmoklasity z języków obcych"
                    icon={<School size={32} />}
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
