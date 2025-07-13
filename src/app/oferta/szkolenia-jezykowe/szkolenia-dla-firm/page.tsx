import { Building } from 'lucide-react';
import {TrainingDetail} from "@/components/offer/training/detail/TrainingDetail";
import TrainingDetailPage from "@/components/offer/training/detail/TrainingDetailPage";

export default function CompanyTraining() {
    const trainingData: TrainingDetail = {
        title: "Szkolenia językowe dla firm",
        subtitle: "Szkolenia językowe ogólne i \"szyte na miarę\" potrzeb klienta",
        description: "Oferujemy szereg specjalistycznych szkoleń językowych wspierających rozwój kompetencji komunikacyjnych w środowisku biznesowym. Programy szkoleń dostosowane są do poziomu uczestników i ich potrzeb zawodowych.",
        icon: <Building size={48} />,
        features: [
            "Szkolenia indywidualne i grupowe",
            "Podejście warsztatowe i interaktywne",
            "Analiza potrzeb i poziomu uczestników",
            "Materiały autorskie i multimedialne",
            "Doświadczeni trenerzy",
            "Zajęcia w siedzibie firmy lub online"
        ],
        details: {
            duration: "1 lub 2 dni, 9:00-16:00",
            groupSize: "1-12 osób",
            location: "U klienta lub online",
            level: "Wszystkie poziomy",
            certificate: true
        },
        content: {
            sections: [
                {
                    title: "Zakres dostępnych szkoleń",
                    type: "grid",
                    content: [
                        { title: "INTERCULTURAL BUSINESS COMMUNICATION", description: "Komunikacja międzykulturowa w biznesie, negocjacje, prezentacje, konwersacje." },
                        { title: "THE ART OF PRESENTATIONS", description: "Prezentacje publiczne w języku angielskim z analizą komunikacji werbalnej i niewerbalnej." },
                        { title: "PRAGMATIC INTERCULTURAL DIFFERENCES", description: "Różnice kulturowe i pragmatyczne w komunikacji. Studium przypadków, testy, warsztaty." },
                        { title: "CORPORATE CULTURE AND ITS INFLUENCE ON SUCCESSFUL BUSINESS", description: "Kultury organizacyjne, motywacja, komunikacja wewnętrzna, zarządzanie." },
                        { title: "THE ART OF MOTIVATING", description: "Motywacja materialna i niematerialna, dopasowanie do typów osobowości." },
                        { title: "TIME MANAGEMENT", description: "Zarządzanie czasem, asertywność, eliminacja dystraktorów." },
                        { title: "ACCELERATING THE PROCESS OF FOREIGN LANGUAGE LEARNING", description: "Szybsze przyswajanie języka, analiza stylów uczenia się." },
                        { title: "APTITUDE ASSESSMENT", description: "Indywidualna ocena predyspozycji językowych i strategii uczenia się." },
                        { title: "ASSERTIVENESS IN BUSINESS", description: "Asertywność w negocjacjach i środowisku biznesowym." },
                        { title: "INTERPERSONAL COMMUNICATION", description: "Komunikacja interpersonalna, aktywne słuchanie, błędy komunikacyjne." },
                        { title: "CRISIS COMMUNICATION AND COMMUNICATION MANAGEMENT", description: "Komunikacja kryzysowa, zarządzanie informacją, ćwiczenia praktyczne." }
                    ]
                }
            ]
        },
        cta: {
            primaryButton: "Skontaktuj się z nami",
            primaryButtonLink: "/contact",
            secondaryButton: "Pobierz program"
        }
    };

    return <TrainingDetailPage training={trainingData} />;
}