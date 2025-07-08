import Navbar from '../header/Navbar'
import Hero from './hero/Hero'
import About from './about/About'
import Offer from './offer/Offer'
import Audience from './audience/Audience'
import ClientsSlider from './client/ClientsSlider'
import Footer from '../footer/Footer'
import Link from "next/link"
import Reveal from '../animations/Reveal'
import Slider from "@/components/home/slider/Slider";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Reveal delay={100}><About /></Reveal>
            <Reveal delay={200} animation="slideLeft"><Offer /></Reveal>
            <Reveal delay={150} animation="slideRight"><Audience /></Reveal>
            <Reveal delay={250}><ClientsSlider /></Reveal>

            <Reveal delay={300} className="bg-gray-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                        <Link href="/contact">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                                Rozpocznij Teraz
                            </button>
                        </Link>
                    </Reveal>
                </div>
            </Reveal>

            <Footer />
        </div>
    )
}