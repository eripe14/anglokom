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
            tooltipTitle: "Zajęcia 1:1",
            tooltipDescription: "Pakiet 20 godzin zajęć online z egzaminatorem OKE. Indywidualne tempo pracy, analiza błędów, strategia pod kątem matury podstawowej lub rozszerzonej.\n\n📦 3000 zł za pakiet | 💸 150 zł/h",
            slug: "kursy-maturalne/indywidualne"
        },
        {
            cardTitle: "Kurs w 2 osoby",
            cardDescription: "Ucz się efektywnie w duecie – taniej i motywująco",
            icon: <Users size={24} />,
            tooltipTitle: "Grupa 2-osobowa",
            tooltipDescription: "Zajęcia online w kameralnej 2-osobowej grupie. Pełen materiał maturalny, interakcje i praktyczne ćwiczenia.\n\n📦 3600 zł za pakiet | 💸 180 zł/h (90 zł/os)",
            slug: "kursy-maturalne/dwojki"
        },
        {
            cardTitle: "Kurs w 3 osoby",
            cardDescription: "Idealna równowaga między ceną a indywidualnym podejściem",
            icon: <Users size={24} />,
            tooltipTitle: "Grupa 3-osobowa",
            tooltipDescription: "Zajęcia prowadzone przez egzaminatora. Praca w grupie, wypowiedzi ustne, pisemne, słuchanie i czytanie ze zrozumieniem.\n\n📦 4500 zł za pakiet | 💸 225 zł/h (75 zł/os)",
            slug: "kursy-maturalne/trojki"
        },
        {
            cardTitle: "Kurs w 4 osoby",
            cardDescription: "Najlepsza cena i wysoka efektywność przygotowania",
            icon: <Users size={24} />,
            tooltipTitle: "Grupa 4-osobowa",
            tooltipDescription: "Zajęcia z korektą wypowiedzi, gramatyką i strategią egzaminacyjną. Kurs tylko w zgłoszonej grupie.\n\n📦 4800 zł za pakiet | 💸 240 zł/h (60 zł/os)",
            slug: "kursy-maturalne/czworki"
        }
    ];

    return (
        <section className="py-16 bg-white">
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
