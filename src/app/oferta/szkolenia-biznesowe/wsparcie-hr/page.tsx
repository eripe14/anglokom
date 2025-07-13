import { Briefcase } from 'lucide-react';
import { TrainingDetail } from "@/components/offer/training/detail/TrainingDetail";
import TrainingDetailPage from "@/components/offer/training/detail/TrainingDetailPage";

export default function HRTeamsSupport() {
    const trainingData: TrainingDetail = {
        title: "Wsparcie dla działów szkoleń",
        subtitle: "Analiza potrzeb, planowanie ścieżek rozwoju i doradztwo szkoleniowe",
        description: "Oferujemy kompleksowe wsparcie dla działów HR i szkoleń w zakresie analizy potrzeb rozwojowych, planowania karier oraz metodyki i organizacji szkoleń zamkniętych i otwartych. Pomagamy dobrać odpowiednie narzędzia i metody szkoleniowe, dostosowane do specyfiki organizacji.",
        icon: <Briefcase size={48} />,
        features: [
            "Analiza potrzeb szkoleniowych",
            "Projektowanie ścieżek rozwoju pracowników",
            "Doradztwo w zakresie metodyki szkoleń",
            "Wsparcie przy organizacji szkoleń zamkniętych i otwartych",
            "Indywidualne podejście do każdej organizacji",
            "Możliwość długofalowej współpracy doradczej"
        ],
        details: {
            duration: "Ustalany indywidualnie",
            groupSize: "Zespoły HR i menedżerowie",
            location: "U klienta lub online",
            level: "Zaawansowane wsparcie specjalistyczne",
            certificate: false
        },
        content: {
            sections: [
                {
                    title: "Zakres usług doradczych",
                    type: "list",
                    content: [
                        "Kompleksowa analiza potrzeb szkoleniowych w organizacji",
                        "Planowanie i wdrażanie indywidualnych ścieżek rozwoju zawodowego",
                        "Dobór metod szkoleniowych i narzędzi dydaktycznych",
                        "Wsparcie przy organizacji szkoleń wewnętrznych (zamkniętych) i zewnętrznych (otwartych)",
                        "Konsultacje w zakresie tworzenia wewnętrznych akademii i programów rozwojowych"
                    ]
                },
                {
                    title: "Forma współpracy",
                    type: "text",
                    content: `Współpraca może mieć charakter jednorazowego projektu lub długofalowego partnerstwa. Usługa realizowana jest przez doświadczonych doradców z zakresu HR, metodyki szkoleń oraz zarządzania kompetencjami w organizacji.`
                },
                {
                    title: "Cennik i kontakt",
                    type: "text",
                    content: `Koszt usługi ustalany jest indywidualnie po zapoznaniu się z potrzebami Klienta. W celu uzyskania szczegółowych informacji zapraszamy do wypełnienia formularza kontaktowego.`
                }
            ]
        },
        cta: {
            primaryButton: "Wypełnij formularz kontaktowy",
            primaryButtonLink: "/kontakt",
            secondaryButton: "Umów konsultację"
        }
    };

    return <TrainingDetailPage training={trainingData} />;
}
