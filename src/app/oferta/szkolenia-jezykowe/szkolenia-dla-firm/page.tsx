import { Building } from 'lucide-react';
import {TrainingDetail} from "@/components/offer/training/detail/TrainingDetail";
import TrainingDetailPage from "@/components/offer/training/detail/TrainingDetailPage";
import {TRAININGS} from "@/data/trainings";

export default function CompanyTraining() {
    const gridItems = TRAININGS.map(t => ({
        title: t.title,
        description: t.description,
        slug: t.slug,
    }));

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
                    href: "/oferta/szkolenia-jezykowe/szkolenia-dla-firm",
                    content: gridItems,
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