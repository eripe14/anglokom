import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="py-16 mt-12 bg-gradient-to-r from-cyan-600 to-sky-700 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Główna treść */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Gotowy na rozwój?
                    </h2>
                    <p className="text-xl text-sky-50 mb-8 leading-relaxed">
                        Skontaktuj się z nami, aby omówić Twoje potrzeby szkoleniowe i otrzymać spersonalizowaną ofertę
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/kontakt">
                            <button
                                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Skontaktuj się
                            </button>
                        </Link>
                        <Link href="/oferta">
                            <button
                                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                                Pobierz katalog
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Dekoracyjne tło */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-40 -translate-x-40"></div>
        </section>
    );
}
