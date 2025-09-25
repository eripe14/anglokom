import { MessageSquare } from 'lucide-react';
import { TrainingDetail } from "@/components/offer/training/detail/TrainingDetail";
import TrainingDetailPage from "@/components/offer/training/detail/TrainingDetailPage";

export default function CommunicationTraining() {
    const trainingData: TrainingDetail = {
        title: "Szkolenia z komunikacji",
        subtitle: "Interpersonalna, międzykulturowa, managerska, międzypokoleniowa i biznesowa",
        description: "Oferujemy interaktywne szkolenia rozwijające kompetencje komunikacyjne w środowisku pracy. Programy dopasowane są do specyfiki zawodowej uczestników i obejmują zarówno komunikację interpersonalną, jak i międzykulturową, managerską, biznesową oraz międzypokoleniową.",
        icon: <MessageSquare size={48} />,
        features: [
            "Szkolenia jednodniowe lub dwudniowe (9:00–16:00)",
            "Forma warsztatowa i interaktywna",
            "Możliwość realizacji w języku polskim lub angielskim",
            "Doświadczeni trenerzy z wiedzą praktyczną",
            "Symulacje, case studies, aktywne ćwiczenia",
            "Program dostosowany do specyfiki branży"
        ],
        details: {
            duration: "1 lub 2 dni, 9:00–16:00",
            groupSize: "Grupy szkoleniowe",
            location: "Stacjonarnie lub online",
            level: "Dla wszystkich poziomów zawodowych",
            certificate: true
        },
        content: {
            sections: [
                {
                    title: "Zakres szkoleń",
                    type: "grid",
                    href: "/oferta/szkolenia-biznesowe/szkolenia-komunikacja",
                    content: [
                        {
                            title: "Komunikacja interpersonalna",
                            description: "Typowe błędy komunikacyjne, aktywne słuchanie, efektywne zadawanie pytań. Praktyczne ćwiczenia rozwijające kompetencję komunikacyjną.",
                            redirect: false
                        },
                        {
                            title: "Komunikacja międzykulturowa",
                            description: "Różnice kulturowe w komunikacji biznesowej, przygotowanie do negocjacji i prezentacji z partnerami z różnych kultur.",
                            redirect: false
                        },
                        {
                            title: "Komunikacja managerska",
                            description: "Oceny pracownicze, informacja zwrotna, komunikacja wewnętrzna i zewnętrzna, asertywność i komunikacja niewerbalna.",
                            redirect: false
                        },
                        {
                            title: "Komunikacja biznesowa z savoir-vivre’em",
                            description: "Kanały komunikacji, etykieta językowa, normy grzecznościowe w różnych kulturach. Szkolenie dostępne po polsku lub angielsku.",
                            redirect: false
                        },
                        {
                            title: "Komunikacja międzypokoleniowa",
                            description: "Preferencje komunikacyjne różnych generacji (Boomers, X, Y, Z), optymalne kanały komunikacji i różnice w stylach.",
                            redirect: false
                        }
                    ]
                },
                {
                    title: "Dodatkowe informacje",
                    type: "text",
                    content: `Wszystkie szkolenia mają charakter praktyczny i dopasowywany są do potrzeb uczestników. W celu uzyskania szczegółów dotyczących programu, kosztów i terminów – zapraszamy do kontaktu za pomocą formularza.`
                }
            ]
        },
        cta: {
            primaryButton: "Wypełnij formularz kontaktowy",
            primaryButtonLink: "/kontakt",
            secondaryButton: "Zamów wycenę szkolenia"
        }
    };

    return <TrainingDetailPage training={trainingData} />;
}
