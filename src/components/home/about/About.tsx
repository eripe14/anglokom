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

        // Cleanup function
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
            observer.disconnect()
        }
    }, [isVisible])

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        O Nas
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Lewa kolumna - tekst */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Nasza Historia
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Tutaj możesz wpisać swoją historię firmy. Opowiedz o tym, jak się zaczęło,
                            jakie były Wasze początki i jak doszliście do tego miejsca, w którym jesteście teraz.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Możesz dodać więcej paragrafów opisujących Waszą misję, wizję i wartości.
                            To miejsce na opowiedzenie o tym, co Was wyróżnia na rynku.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div ref={ref} className="text-center">
                                <NumberFlow
                                    className="text-3xl font-bold text-blue-600 mb-2"
                                    value={clientCount}
                                    suffix={"+"}
                                    spinTiming={{
                                        duration: 3500,
                                        easing: 'ease-in-out'
                                    }}
                                ></NumberFlow>
                                <div className="text-gray-600">Zadowolonych Klientów</div>
                            </div>
                            <div className="text-center">
                                <NumberFlow
                                    className="text-3xl font-bold text-blue-600 mb-2"
                                    value={yearsOfExperience}
                                    suffix={"+"}
                                    spinTiming={{
                                        duration: 3500,
                                        easing: 'ease-in-out'
                                    }}
                                ></NumberFlow>
                                <div className="text-gray-600">Lat Doświadczenia</div>
                            </div>
                        </div>
                    </div>

                    {/* Prawa kolumna - obraz lub dodatkowe informacje */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                Nasze Wartości
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700">Jakość i profesjonalizm w każdym projekcie</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700">Indywidualne podejście do każdego klienta</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700">Innowacyjne rozwiązania i najnowsze technologie</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700">Terminowość i dotrzymywanie obietnic</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                Dlaczego warto nas wybrać?
                            </h4>
                            <p className="text-gray-600">
                                Tutaj możesz dodać krótki tekst o tym, co Was wyróżnia.
                                Może to być Wasze unikalne podejście, specjalizacja czy osiągnięcia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}