import {
    FaUsers,
    FaClipboardCheck,
    FaCogs,
    FaMobileAlt,
    FaEdit,
    FaChalkboardTeacher,
    FaGraduationCap
} from 'react-icons/fa'

const servicesData = [
    {
        id: 1,
        icon: <FaUsers className="w-8 h-8" />,
        title: "Szkolenia i Tłumaczenia",
        description: "Szeroka gama szkoleń i tłumaczeń językowych kierowanych do firm i osób prywatnych."
    },
    {
        id: 2,
        icon: <FaClipboardCheck className="w-8 h-8" />,
        title: "Audyty Językowe",
        description: "Przeprowadzanie audytów językowych sprawdzających poziom biegłości językowej."
    },
    {
        id: 3,
        icon: <FaCogs className="w-8 h-8" />,
        title: "Audyty Kompetencyjne",
        description: "Przeprowadzanie audytów kompetencyjnych."
    },
    {
        id: 4,
        icon: <FaMobileAlt className="w-8 h-8" />,
        title: "Mobilne Kursy Językowe",
        description: "Prowadzenie mobilnych indywidualnych kursów językowych."
    },
    {
        id: 5,
        icon: <FaEdit className="w-8 h-8" />,
        title: "Korekty Językowe",
        description: "Korekty językowe dokumentów i artykułów naukowych."
    },
    {
        id: 6,
        icon: <FaChalkboardTeacher className="w-8 h-8" />,
        title: "Wsparcie Działów Szkoleń",
        description: "Wsparcie działów szkoleń – szkolenia z metodyki organizacji szkoleń."
    },
    {
        id: 7,
        icon: <FaGraduationCap className="w-8 h-8" />,
        title: "Szkolenia Metodyczne",
        description: "Szkolenia metodyczne dla nauczycieli i rad pedagogicznych."
    }
]

export default function Offer() {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Oferta firmy Anglokom
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <div className="bg-sky-100 text-sky-700 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 text-justify">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}