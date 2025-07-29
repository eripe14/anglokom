'use client'

import React, {useState, useEffect, useRef} from 'react'
import {Link as ScrollLink} from 'react-scroll';
import NumberFlow from "@number-flow/react";
import HeroCard from "@/components/home/hero/HeroCard";

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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <HeroCard
                        title="Dlaczego warto nas wybrać?"
                        description={[
                            "Kompleksowe wsparcie językowe: szkolenia ogólne i branżowe, audyty kompetencji, tłumaczenia i korekty.",
                            "Przygotowujemy do egzaminów: ósmoklasisty, maturalnych oraz językowych (zgodnie ze standardami CEFR).",
                            "Wykorzystujemy realne materiały egzaminacyjne oraz praktyczne scenariusze biznesowe.",
                            "Programy szyte na miarę – dostosowane do branży, poziomu i celów uczestników.",
                            "Specjalizujemy się w komunikacji międzykulturowej: negocjacjach, prezentacjach, konwersacjach.",
                            "Uwzględniamy różnice kulturowe i pragmatyczne – pracujemy metodą case studies, testów i warsztatów.",
                            "Szkolenia prowadzimy online, stacjonarnie oraz w siedzibie klienta – elastycznie, zgodnie z potrzebami.",
                            "Naszą siłą jest doświadczony i życzliwy zespół lektorów – ekspertów w nauczaniu języków obcych, z wykształceniem filologicznym i przygotowaniem pedagogicznym."
                        ]}
                        buttonText="Sprawdź korzyści"
                        buttonLink="/oferta"
                    />

                    <HeroCard
                        title="Nasza historia"
                        description={[
                            "Od ponad dwóch dekad wspieramy firmy i osoby prywatne w skutecznej komunikacji językowej.",
                            "Zaczynaliśmy jako lokalna firma - dziś działamy w całej Polsce, oferując szkolenia na najwyższym poziomie.",
                            <div key="counter" ref={ref} className="grid grid-cols-2 gap-4 mt-2 mb-2">
                                <div className="text-center">
                                    <NumberFlow
                                        className="text-3xl font-bold text-gray-700 mb-2"
                                        value={clientCount}
                                        suffix="+"
                                        spinTiming={{duration: 3000, easing: 'ease-in-out'}}
                                    />
                                    <div className="text-gray-700 text-md">Zadowolonych Klientów</div>
                                </div>
                                <div className="text-center">
                                    <NumberFlow
                                        className="text-3xl font-bold text-gray-700 mb-2"
                                        value={yearsOfExperience}
                                        suffix="+"
                                        spinTiming={{duration: 3000, easing: 'ease-in-out'}}
                                    />
                                    <div className="text-gray-700 text-md">Lat doświadczenia</div>
                                </div>
                            </div>,
                            "Naszą misją jest łączenie wiedzy językowej z praktycznymi umiejętnościami komunikacyjnymi - tak, by tworzyć realną wartość dla klientów.",
                            "Stawiamy na komunikację międzykulturową i klarowność przekazu - bo to one decydują o efektywności współpracy.",
                            "Współpracujemy z firmami, instytucjami i klientami indywidualnymi – w Polsce i za granicą."
                        ]}
                        buttonText="Dowiedz się o nas więcej"
                        buttonLink="/o-firmie"
                    ></HeroCard>
                </div>
            </div>
        </section>
    )
}