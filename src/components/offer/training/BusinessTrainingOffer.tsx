import {MessageSquare, TrendingUp, Award, Building2} from 'lucide-react';
import OfferSectionHeader from "@/components/offer/OfferSectionHeader";
import OfferServiceCard from "@/components/offer/OfferServiceCard";

export default function BusinessTrainingOffer() {
    const businessServices = [
        {
            cardTitle: "Szkolenia z komunikacji",
            cardDescription: "Rozwijaj umiejętności komunikacyjne i buduj lepsze relacje biznesowe",
            icon: <MessageSquare size={24} />,
            slug: "szkolenia-biznesowe/szkolenia-komunikacja"
        },
        {
            cardTitle: "Wsparcie działów szkoleniowych",
            cardDescription: "Kompleksowe wsparcie dla wewnętrznych zespołów HR i szkoleń",
            icon: <TrendingUp size={24} />,
            slug: "szkolenia-biznesowe/wsparcie-hr"
        },
        {
            cardTitle: "Szkolenia metodyczne dla pedagogów",
            cardDescription: "Nowoczesne metody nauczania i rozwój kompetencji dydaktycznych",
            icon: <Award size={24} />,
            slug: "szkolenia-biznesowe/szkolenia-pedagogow"
        }
    ];

    return (
        <section className="py-16 bg-white" id="szkolenia-biznesowe">
            <div className="container mx-auto px-6">
                <OfferSectionHeader
                    title="Szkolenia biznesowe"
                    subtitle="Rozwijaj kompetencje zawodowe i osiągaj lepsze rezultaty biznesowe"
                    icon={<Building2 size={32} />}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {businessServices.map((service, index) => (
                        <OfferServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}