import { MessageSquare } from 'lucide-react';
import { TrainingDetail } from "@/components/offer/training/detail/TrainingDetail";
import TrainingDetailPage from "@/components/offer/training/detail/TrainingDetailPage";
import {TRAININGS} from "@/data/trainings";

export default function CommunicationTraining() {
    const gridItems = TRAININGS.map(t => ({
        title: t.title,
        description: t.description,
        slug: t.slug,
    }));


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
                    content: gridItems
                },
                {
                    title: "Dodatkowe informacje",
                    type: "text",
                    content: `Wszystkie szkolenia mają charakter praktyczny i dopasowywany są do potrzeb uczestników. W celu uzyskania szczegółów dotyczących programu, kosztów i terminów – zapraszamy do kontaktu za pomocą formularza.`
                }
            ]
        },
        cta: {
            primaryButton: "Skontaktuj się z nami",
            primaryButtonLink: "/kontakt",
            secondaryButton: "Pobierz katalog wersja pełna",
            secondaryButtonLink: "/downloads/ANGLOKOM_Oferta szkoleń_Kompetencje i komunikacja międzykulturowa_opis.docx",
            secondaryDownloadFileName: "Katalog_szkolen_jezykowych.docx",
            tertiaryButton: "Pobierz katalog wersja krótka",
            tertiaryButtonLink: "/downloads/ANGLOKOM_Oferta szkoleń_Kompetencje i komunikacja międzykulturowa_short.pptx",
            tertiaryDownloadFileName: "Katalog_szkolen_jezykowych_krotki.pptx"
        }
    };

    return <TrainingDetailPage training={trainingData} />;
}
