import { Globe } from 'lucide-react';
import { TrainingDetail } from "@/components/offer/training/detail/TrainingDetail";
import TrainingDetailPage from "@/components/offer/training/detail/TrainingDetailPage";

export default function ForeignerLanguageCourse() {
    const trainingData: TrainingDetail = {
        title: "Język polski dla obcokrajowców",
        subtitle: "Zajęcia z języka polskiego jako obcego dla osób z zagranicy",
        description: "Prowadzimy profesjonalne kursy języka polskiego dla obcokrajowców w oparciu o metodę komunikacyjną i bezpośrednią. Kładziemy nacisk na rozwój umiejętności mówienia i rozumienia języka w kontekście sytuacyjnym. Zajęcia prowadzone są przez doświadczonych lektorów posługujących się wieloma językami obcymi.",
        icon: <Globe size={48} />,
        features: [
            "Zajęcia indywidualne lub grupowe",
            "Wielojęzyczna kadra (EN, DE, RU, UA, IT, FR, ES)",
            "Podejście komunikacyjne i bezpośrednie",
            "Nacisk na praktyczne użycie języka",
            "Możliwość nauki na różnych poziomach",
            "Dostosowanie programu do potrzeb uczestnika"
        ],
        details: {
            duration: "Elastyczny harmonogram",
            groupSize: "Indywidualnie lub małe grupy",
            location: "Stacjonarnie lub online",
            level: "Od początkującego do zaawansowanego",
            certificate: true
        },
        content: {
            sections: [
                {
                    title: "Opis kursu",
                    type: "text",
                    content: `Kurs języka polskiego jako obcego skierowany jest do osób z zagranicy, które chcą nauczyć się komunikować w języku polskim w codziennych, zawodowych i formalnych sytuacjach. Wykorzystujemy podejście komunikacyjne i bezpośrednie, umożliwiające szybkie przełamanie bariery językowej oraz nabycie praktycznych kompetencji językowych.`
                },
                {
                    title: "Języki wsparcia",
                    type: "list",
                    content: [
                        "Angielski (English)",
                        "Hiszpański (Español)",
                        "Niemiecki (Deutsch)",
                        "Rosyjski (Русский)",
                        "Ukraiński (Українська)",
                        "Francuski (Français)",
                        "Chiński (中文)",
                        "Włoski (Italiano)"
                    ]
                },
                {
                    title: "Metodyka nauczania",
                    type: "text",
                    content: `Stosujemy metody komunikacyjne i bezpośrednie, które wspierają rozwój umiejętności mówienia, rozumienia oraz konstruowania wypowiedzi adekwatnych do sytuacji. Zajęcia opierają się na interakcji, dialogach i zadaniach praktycznych, w których język używany jest w autentycznym kontekście.`
                },
                {
                    title: "Kontakt",
                    type: "text",
                    content: `Aby uzyskać szczegółowe informacje dotyczące harmonogramu, poziomu i formy zajęć, prosimy o wypełnienie formularza kontaktowego lub kontakt telefoniczny. Nasz zespół przygotuje indywidualną ofertę dopasowaną do Twoich potrzeb językowych.`
                }
            ]
        },
        cta: {
            primaryButton: "Skontaktuj się z nami",
            primaryButtonLink: "/kontakt",
            secondaryButton: "Pobierz broszurę informacyjną",
        }
    };

    return <TrainingDetailPage training={trainingData} />;
}
