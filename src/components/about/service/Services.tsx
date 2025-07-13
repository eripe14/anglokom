import React from 'react';
import {
    BookOpen, Users, Globe, Award, MessageCircle, Building,
    Plane, CheckCircle, FileText, Eye, Edit3, Target
} from 'lucide-react';
import ServiceCard from "./ServiceCard";

const services = [
    {
        id: 1,
        title: "Szkolenia językowe dla firm",
        shortDesc: "Szyte na miarę potrzeb Klienta zajęcia językowe",
        fullDesc: "Intensywność, termin i metoda prowadzenia dostosowana do potrzeb Klienta...",
        icon: <Building className="w-8 h-8"/>
    },
    {
        id: 2,
        title: "Kurs w Londynie",
        shortDesc: "Zajęcia z języka ogólnego i biznesowego",
        fullDesc: "Kadra native speakerów. Nauka w naturalnym środowisku językowym.",
        icon: <Plane className="w-8 h-8"/>
    },
    {
        id: 3,
        title: "Szkolenia z komunikacji",
        shortDesc: "Komunikacja wielokulturowa i międzypokoleniowa",
        fullDesc: "Rozwój umiejętności w kontekstach interpersonalnych i biznesowych.",
        icon: <MessageCircle className="w-8 h-8"/>
    },
    {
        id: 4,
        title: "Tłumaczenia",
        shortDesc: "Pisemne i ustne, ogólne i specjalistyczne",
        fullDesc: "Tłumaczenia przysięgłe i specjalistyczne w wielu językach.",
        icon: <FileText className="w-8 h-8"/>
    },
    {
        id: 5,
        title: "Wsparcie dla działów szkoleniowych",
        shortDesc: "Metodyka organizacji szkoleń",
        fullDesc: "Optymalizacja procesów w działach HR i szkoleń.",
        icon: <Users className="w-8 h-8"/>
    },
    {
        id: 6,
        title: "Szkolenia dla nauczycieli",
        shortDesc: "Odświeżające metodyczne kursy",
        fullDesc: "Rozwój kompetencji nauczycieli językowych.",
        icon: <BookOpen className="w-8 h-8"/>
    },
    {
        id: 7,
        title: "Audyty językowe",
        shortDesc: "Ocena biegłości w rekrutacjach",
        fullDesc: "Testy poziomu językowego kandydatów.",
        icon: <CheckCircle className="w-8 h-8"/>
    },
    {
        id: 8,
        title: "Audyty kompetencyjne",
        shortDesc: "W j. polskim i angielskim",
        fullDesc: "Kompleksowa ocena kompetencji zawodowych.",
        icon: <Award className="w-8 h-8"/>
    },
    {
        id: 9,
        title: "Audyty komunikacyjne",
        shortDesc: "Optymalna mapa komunikacji",
        fullDesc: "Analiza przepływu informacji w firmie.",
        icon: <Globe className="w-8 h-8"/>
    },
    {
        id: 10,
        title: "Czytelność tekstów",
        shortDesc: "Analiza poziomu „zamglenia”",
        fullDesc: "Zrozumiałość dokumentów w PL i EN.",
        icon: <Eye className="w-8 h-8"/>
    },
    {
        id: 11,
        title: "Korekty językowe",
        shortDesc: "Dokumenty i artykuły naukowe",
        fullDesc: "Profesjonalna redakcja tekstów w obu językach.",
        icon: <Edit3 className="w-8 h-8"/>
    },
    {
        id: 12,
        title: "Coaching językowy",
        shortDesc: "Personalizowane podejście",
        fullDesc: "Skoncentrowany rozwój językowy Klienta.",
        icon: <Target className="w-8 h-8"/>
    }
];

const ServicesSection = () => (
    <div>
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nasze Usługi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferujemy kompleksowe rozwiązania w zakresie nauki języków, tłumaczeń i komunikacji biznesowej
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map(service => (
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
);

export default ServicesSection;
