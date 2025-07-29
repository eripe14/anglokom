import Reveal from "@/components/animations/Reveal";
import Link from "next/link";

export default function CallToAction() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal delay={400} animation="fadeIn">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Gotowy na Współpracę?
                </h2>
            </Reveal>

            <Reveal delay={500} animation="fadeIn">
                <p className="text-xl text-gray-300 mb-8">
                    Skontaktuj się z nami już dziś i rozpocznij swoją podróż
                </p>
            </Reveal>

            <Reveal delay={600} animation="scale">
                <Link href="/kontakt">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        Rozpocznij Teraz
                    </button>
                </Link>
            </Reveal>
        </div>
    )
}