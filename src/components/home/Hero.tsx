import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Witaj na stronie Anglokom
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-sky-100">
                        Profesjonalne szkolenia językowe dla Twojego biznesu
                    </p>
                    <div className="space-x-4">
                        <ScrollLink
                            to="offer-section"
                            smooth={true}
                            duration={500}
                            offset={-60}
                        >
                            <button
                                className="bg-transparent border-2 cursor-pointer border-white text-white hover:bg-white hover:text-sky-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Dowiedz się więcej
                            </button>
                        </ScrollLink>

                        <Link href="/kontakt">
                            <button
                                className="border-2 cursor-pointer border-white text-white bg-transparent hover:bg-white hover:text-sky-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Kontakt
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
