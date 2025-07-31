import React from 'react';
import { Monitor, Languages, Building, MapPin, UserCheck } from 'lucide-react';
import OfferSectionHeader from "@/components/offer/OfferSectionHeader";
import OfferServiceCard from "@/components/offer/OfferServiceCard";
import Footer from "@/components/footer/Footer";

export default function LanguageTrainingOffer() {
    const languageServices = [
        {
            cardTitle: "Szkolenia językowe dla firm",
            cardDescription: "Dedykowane programy językowe dopasowane do specyfiki Twojej branży",
            icon: <Building size={24} />,
            tooltipTitle: "Szkolenia Korporacyjne",
            tooltipDescription: "Organizujemy szkolenia językowe bezpośrednio w siedzibie Twojej firmy lub w naszych nowoczesnych salach. Programy są dostosowane do branży i poziomu zaawansowania uczestników, z możliwością prowadzenia zajęć w godzinach pracy lub po jej zakończeniu.",
            slug: "szkolenia-jezykowe/szkolenia-dla-firm"
        },
        {
            cardTitle: "Szkolenia językowe w Londynie",
            cardDescription: "Intensywne kursy językowe w sercu Wielkiej Brytanii",
            icon: <MapPin size={24} />,
            tooltipTitle: "Kursy w Londynie",
            tooltipDescription: "Oferujemy wyjątkową możliwość nauki języka angielskiego w naturalnym środowisku językowym. Programy obejmują zajęcia z native speakerami, wizyty studyjne w brytyjskich firmach oraz praktyczne wykorzystanie języka w codziennych sytuacjach.",
            slug: "szkolenia-jezykowe/szkolenia-londyn"
        },
        {
            cardTitle: "Szkolenia dla obcokrajowców",
            cardDescription: "Specjalistyczne kursy języka polskiego i integracji kulturowej",
            icon: <UserCheck size={24} />,
            tooltipTitle: "Integracja Językowa",
            tooltipDescription: "Kompleksowe programy nauki języka polskiego dla pracowników z zagranicy. Obejmują nie tylko naukę języka, ale także elementy kultury polskiej, procedur administracyjnych i komunikacji w środowisku zawodowym.",
            slug: "szkolenia-jezykowe/szkolenia-dla-obcokrajowcow"
        },
        {
            cardTitle: "Szkolenia online",
            cardDescription: "Elastyczne kursy językowe dostępne z dowolnego miejsca",
            icon: <Monitor size={24} />,
            tooltipTitle: "E-learning",
            tooltipDescription: "Nowoczesne platformy e-learningowe umożliwiające naukę w dogodnym czasie i miejscu. Interaktywne materiały, sesje na żywo z lektorami, oraz możliwość śledzenia postępów w nauce. Idealne rozwiązanie dla osób z napiętym harmonogramem.",
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