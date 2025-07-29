import {
    FaChalkboardTeacher,
    FaUsers,
    FaBuilding,
    FaUser
} from 'react-icons/fa'
import Link from "next/link";

const targetAudienceData = [
    {
        id: 1,
        icon: <FaChalkboardTeacher className="w-8 h-8"/>,
        title: "Dla działów szkoleń",
        description: "Organizujemy szkolenia językowe i różnorodne szkolenia biznesowe. Wspieramy działy szkoleń w przeprowadzaniu badań potrzeb szkoleniowych i satysfakcji. Pomagamy w opracowaniu ścieżek kariery i rozwoju.",
        services: [
            "Szkolenia językowe i biznesowe",
            "Badania potrzeb szkoleniowych",
            "Badania satysfakcji z przeprowadzonych szkoleń",
            "Opracowanie ścieżek kariery i rozwoju"
        ]
    },
    {
        id: 2,
        icon: <FaUsers className="w-8 h-8"/>,
        title: "Dla działów HR w firmach",
        description: "Oferujemy szereg szkoleń biznesowych i tłumaczeń językowych. Wspieramy procesy rekrutacyjne w językach obcych. Przeprowadzamy audyty kompetencyjne i procesów komunikacyjnych.",
        services: [
            "Szkolenia biznesowe i tłumaczenia językowe",
            "Wsparcie procesów rekrutacyjnych (PL, EN, DE, RU)",
            "Audyty kompetencyjne i komunikacyjne",
            "Indywidualny coaching językowy",
            "Badania zdolności językowych"
        ]
    },
    {
        id: 3,
        icon: <FaBuilding className="w-8 h-8"/>,
        title: "Dla biznesu",
        description: "Prowadzimy szkolenia w siedzibie klienta. Wykonujemy tłumaczenia pisemne i ustne. Badamy czytelność tekstów i przeprowadzamy korekty językowe materiałów akademickich.",
        services: [
            "Szkolenia językowe i biznesowe w siedzibie klienta",
            "Tłumaczenia pisemne i ustne (również przysięgłe)",
            "Audyty kompetencyjne i komunikacyjne",
            "Badania czytelności tekstów (PL, EN)",
            "Korekty językowe tekstów akademickich",
            "Indywidualny coaching językowy",
            "Opracowanie ścieżek kariery i rozwoju"
        ]
    },
    {
        id: 4,
        icon: <FaUser className="w-8 h-8"/>,
        title: "Dla klientów indywidualnych",
        description: "Oferujemy indywidualne szkolenia językowe w siedzibie klienta, tłumaczenia dokumentów oraz korekty językowe tekstów akademickich i artykułów naukowych.",
        services: [
            "Indywidualne szkolenia językowe w siedzibie klienta",
            "Tłumaczenia pisemne i ustne (również przysięgłe)",
            "Korekty językowe tekstów akademickich",
            "Korekty artykułów naukowych"
        ]
    }
]

export default function Audience() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Dla kogo jest nasza oferta
                    </h2>
                    <div className="w-24 h-1 bg-sky-700 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Nasze usługi kierujemy do różnych grup klientów, dostosowując ofertę do indywidualnych potrzeb
                        każdego segmentu.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {targetAudienceData.map((audience) => (
                        <div
                            key={audience.id}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="flex items-start space-x-4">
                                <div
                                    className="bg-sky-50 text-sky-700 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                                    {audience.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {audience.title}
                                    </h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed text-justify">
                                        {audience.description}
                                    </p>
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-semibold text-gray-800 mb-2">
                                            Nasze usługi:
                                        </h4>
                                        <ul className="space-y-1">
                                            {audience.services.map((service, index) => (
                                                <li key={index} className="flex items-start text-sm text-gray-700">
                                                    <div
                                                        className="bg-sky-700 w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    <span>{service}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}