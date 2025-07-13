import Image from "next/image";

const languages = [
    { name: "język angielski", flag: "uk" },
    { name: "język hiszpański", flag: "es" },
    { name: "język niemiecki", flag: "de" },
    { name: "język rosyjski", flag: "ru" },
    { name: "język ukraiński", flag: "ua" },
    { name: "język francuski", flag: "fr" },
    { name: "język chiński", flag: "cr" },
    { name: "język włoski", flag: "it" },
];

export default function Languages() {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">Nasze języki</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {languages.map((lang, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-sky-50 to-indigo-50 rounded-2xl hover:from-sky-100 hover:to-indigo-100 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 group"
                    >
                        <div className="w-16 h-16 rounded-full mb-3 group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={`/images/flags/${lang.flag}-fl.png`}
                                alt={`Anglokom | ${lang.name}`}
                            />
                        </div>
                        <span className="text-gray-700 font-medium text-sm leading-tight">{lang.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
