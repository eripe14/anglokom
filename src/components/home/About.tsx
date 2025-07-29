'use client'

import { useState, useEffect, useRef } from 'react'
import NumberFlow from "@number-flow/react";

export default function About() {
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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        O Nas
                    </h2>
                    <div className="w-24 h-1 bg-sky-700 mx-auto mb-8"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Tekst główny */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                            Nasza Historia
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify">
                            Od ponad dwóch dekad wspieramy firmy i osoby prywatne w skutecznej komunikacji językowej.
                            Rozpoczęliśmy jako lokalna firma, a dziś działamy w całej Polsce, oferując najwyższy poziom szkoleń.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify">
                            Nasza misja to łączyć wiedzę językową z praktycznymi umiejętnościami komunikacyjnymi,
                            tworząc realną wartość dla naszych klientów.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div ref={ref} className="text-center">
                                <NumberFlow
                                    className="text-3xl font-bold text-sky-700 mb-2"
                                    value={clientCount}
                                    suffix="+"
                                    spinTiming={{ duration: 3000, easing: 'ease-in-out' }}
                                />
                                <div className="text-gray-600">Zadowolonych Klientów</div>
                            </div>
                            <div className="text-center">
                                <NumberFlow
                                    className="text-3xl font-bold text-sky-700 mb-2"
                                    value={yearsOfExperience}
                                    suffix="+"
                                    spinTiming={{ duration: 3000, easing: 'ease-in-out' }}
                                />
                                <div className="text-gray-600">Lat Doświadczenia</div>
                            </div>
                        </div>
                    </div>

                    {/* Wartości i zalety */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">
                                Nasze Wartości
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "Jakość i profesjonalizm w każdym projekcie",
                                    "Indywidualne podejście do każdego klienta",
                                    "Innowacyjne rozwiązania i najnowsze technologie",
                                    "Terminowość i dotrzymywanie obietnic"
                                ].map((text, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="bg-sky-700 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-700">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">
                                Dlaczego warto nas wybrać?
                            </h4>
                            <p className="text-gray-700 text-justify">
                                Anglokom to sprawdzony partner w rozwoju językowym. Nasze programy są dopasowane do realnych potrzeb biznesu, a doświadczeni lektorzy dbają o skuteczność i jakość nauczania.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
