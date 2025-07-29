'use client'

import { useState, useEffect, useRef } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import NumberFlow from "@number-flow/react";

export default function Hero() {
    const [clientCount, setClientCount] = useState(0)
    const [yearsOfExperience, setYearsOfExperience] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                    setClientCount(50);
                    setYearsOfExperience(20);
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
            observer.disconnect()
        }
    }, [isVisible])

    return (
        <section className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Section 1: Main Hero */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        Komunikacja językowa, która buduje przewagę w biznesie.
                    </h1>
                    <h2 className="text-xl md:text-2xl mb-8 text-sky-50">
                        Szkolenia, audyty, tłumaczenia i przygotowanie do egzaminów - dla firm i osób indywidualnych.
                    </h2>
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
                                Poznaj naszą ofertę
                            </button>
                        </ScrollLink>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    {/* Section 2: Our Story & Stats */}
                    <div className="bg-white backdrop-blur-sm rounded-xl p-8 text-gray-800 shadow-xl">
                        <h3 className="text-2xl font-semibold mb-4">
                            Nasza Historia
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Od ponad dwóch dekad wspieramy firmy i osoby prywatne w skutecznej komunikacji językowej.
                            Rozpoczęliśmy jako lokalna firma, a dziś działamy w całej Polsce.
                        </p>

                        <div ref={ref} className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <NumberFlow
                                    className="text-3xl font-bold text-gray-700 mb-2"
                                    value={clientCount}
                                    suffix="+"
                                    spinTiming={{ duration: 3000, easing: 'ease-in-out' }}
                                />
                                <div className="text-gray-700 text-sm">Zadowolonych Klientów</div>
                            </div>
                            <div className="text-center">
                                <NumberFlow
                                    className="text-3xl font-bold text-gray-700 mb-2"
                                    value={yearsOfExperience}
                                    suffix="+"
                                    spinTiming={{ duration: 3000, easing: 'ease-in-out' }}
                                />
                                <div className="text-gray-700 text-sm">Lat Doświadczenia</div>
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Why Choose Us */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border-white/20 border-2 shadow-lg">
                        <h4 className="text-2xl font-semibold mb-4">
                            Dlaczego warto nas wybrać?
                        </h4>
                        <p className="text-sky-50 leading-relaxed text-justify mb-4">
                            Anglokom to sprawdzony partner w rozwoju językowym. Nasze programy są dopasowane do realnych potrzeb biznesu.
                        </p>
                        <p className="text-sky-50 leading-relaxed text-justify">
                            Nasza misja to łączyć wiedzę językową z praktycznymi umiejętnościami komunikacyjnymi,
                            tworząc realną wartość dla naszych klientów.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}