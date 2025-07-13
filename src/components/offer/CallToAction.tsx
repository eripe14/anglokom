export default function CallToAction() {
    return (
        <section className="py-16 mt-12 bg-gradient-to-r from-cyan-600 to-sky-700 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Gotowy na rozwój?</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Skontaktuj się z nami, aby omówić Twoje potrzeby szkoleniowe i otrzymać spersonalizowaną ofertę
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Skontaktuj się
                    </button>
                    <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Pobierz katalog
                    </button>
                </div>
            </div>
        </section>
    );
}