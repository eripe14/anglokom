import React from 'react';
import { Monitor, Languages, Building, MapPin, UserCheck } from 'lucide-react';
import OfferSectionHeader from "@/components/offer/OfferSectionHeader";
import OfferServiceCard from "@/components/offer/OfferServiceCard";

export default function LanguageTrainingOffer() {
    const languageServices = [
        {
            cardTitle: "Szkolenia językowe dla firm",
            cardDescription: "Dedykowane programy językowe dopasowane do specyfiki Twojej branży",
            icon: <Building size={24} />,
            slug: "szkolenia-jezykowe/szkolenia-dla-firm"
        },
        {
            cardTitle: "Szkolenia językowe w Londynie",
            cardDescription: "Intensywne kursy językowe w sercu Wielkiej Brytanii",
            icon: <MapPin size={24} />,
            slug: "szkolenia-jezykowe/szkolenia-londyn"
        },
        {
            cardTitle: "Szkolenia dla obcokrajowców",
            cardDescription: "Specjalistyczne kursy języka polskiego i integracji kulturowej",
            icon: <UserCheck size={24} />,
            slug: "szkolenia-jezykowe/szkolenia-dla-obcokrajowcow"
        },
        {
            cardTitle: "Szkolenia online",
            cardDescription: "Elastyczne kursy językowe dostępne z dowolnego miejsca",
            icon: <Monitor size={24} />,
            slug: "szkolenia-jezykowe/szkolenia-online"
        }
    ];

    return (
        <section className="py-16 bg-white" id="szkolenia-jezykowe">
            <div className="container mx-auto px-6">
                <OfferSectionHeader
                    title="Szkolenia językowe"
                    subtitle="Profesjonalne kursy językowe dostosowane do Twoich potrzeb i celów"
                    icon={<Languages size={32} />}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {languageServices.map((service, index) => (
                        <OfferServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}