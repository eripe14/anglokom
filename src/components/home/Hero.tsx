'use client'

import React, {useState, useEffect, useRef} from 'react'
import {Link as ScrollLink} from 'react-scroll';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                }
            },
            {threshold: 0.1}
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
        <section className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        Komunikacja językowa, która buduje przewagę w biznesie.
                    </h1>
                    <h2 className="text-xl md:text-2xl mb-14 text-sky-50">
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
            </div>
            <div
                className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
            <div
                className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
        </section>
    )
}