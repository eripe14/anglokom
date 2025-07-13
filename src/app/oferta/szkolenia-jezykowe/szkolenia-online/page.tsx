import { Monitor } from 'lucide-react';
import { TrainingDetail } from "@/components/offer/training/detail/TrainingDetail";
import TrainingDetailPage from "@/components/offer/training/detail/TrainingDetailPage";

export default function OnlineTraining() {
    const trainingData: TrainingDetail = {
        title: "Szkolenia językowe i biznesowe online",
        subtitle: "Nowoczesna forma nauki dostosowana do Twoich potrzeb",
        description: "Oferujemy szkolenia językowe i biznesowe prowadzone w formie zdalnej. Dzięki wykorzystaniu popularnych platform komunikacyjnych jesteśmy w stanie zapewnić wygodne, bezpieczne i skuteczne zajęcia – zarówno indywidualne, jak i grupowe. Harmonogram dopasowujemy do oczekiwań Klienta.",
        icon: <Monitor size={48} />,
        features: [
            "Zajęcia online dla firm i osób prywatnych",
            "Indywidualny lub grupowy tryb nauki",
            "Elastyczne godziny zajęć",
            "Lektorzy z doświadczeniem w nauczaniu zdalnym",
            "Platformy: Zoom, MS Teams, Moodle",
            "Brak ograniczeń lokalowych i logistycznych"
        ],
        details: {
            duration: "Dopasowany do potrzeb Klienta",
            groupSize: "Indywidualnie lub grupowo",
            location: "Zdalnie (online)",
            level: "Wszystkie poziomy",
            certificate: true
        },
        content: {
            sections: [
                {
                    title: "Dlaczego szkolenia online?",
                    type: "text",
                    content: `Szkolenia online pozwalają na skuteczną naukę niezależnie od lokalizacji. To idealne rozwiązanie dla osób mających ograniczenia czasowe, lokalowe lub trudności z dojazdem. W dobie pandemii forma zdalna stała się nie tylko wygodną alternatywą, ale również koniecznością.`
                },
                {
                    title: "Jak to działa?",
                    type: "list",
                    content: [
                        "Zajęcia prowadzone na żywo przez wykwalifikowanych lektorów",
                        "Wykorzystanie platform: Zoom, MS Teams, Skype",
                        "Dostosowanie treści do potrzeb i poziomu uczestników",
                        "Interaktywna formuła zajęć z wykorzystaniem materiałów online",
                        "Możliwość uczestnictwa z dowolnego miejsca na świecie"
                    ]
                },
                {
                    title: "Dla kogo?",
                    type: "text",
                    content: `Oferta szkoleń online skierowana jest zarówno do osób indywidualnych, jak i firm. Kursy mogą obejmować język ogólny, język specjalistyczny (np. Business English), szkolenia branżowe lub coaching językowy. Terminy ustalane są indywidualnie.`
                },
                {
                    title: "Jak się zapisać?",
                    type: "text",
                    content: `W celu uzyskania szczegółowych informacji oraz dopasowania oferty do Twoich potrzeb, prosimy o wypełnienie formularza kontaktowego. Nasz zespół skontaktuje się z Tobą w celu ustalenia szczegółów.`
                }
            ]
        },
        cta: {
            primaryButton: "Wypełnij formularz kontaktowy",
            primaryButtonLink: "/kontakt",
            secondaryButton: "Zamów bezpłatną konsultację"
        }
    };

    return <TrainingDetailPage training={trainingData} />;
}
