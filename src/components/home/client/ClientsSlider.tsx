'use client'

import React, { useState, useEffect, useRef } from 'react'
import NumberFlow from "@number-flow/react";

const clientsData = [
    {
        id: 1,
        name: "Wyższa szkoła biznesu",
        product: "Szkolenia",
        logo: "logo-wsb-dg-300x200.jpg"
    },
    {
        id: 2,
        name: "Esab",
        product: "Szkolenia",
        logo: "logo-esab-150x150.jpg"
    },
    {
        id: 3,
        name: "Chiquita",
        product: "Szkolenia",
        logo: "logo-chiquita-150x150.jpg"
    },
    {
        id: 4,
        name: "Najwyższa Izba Kontroli",
        product: "Szkolenia",
        logo: "logo-nik-150x150.jpg"
    },
    {
        id: 5,
        name: "Wyższa Szkoła Humanitas",
        product: "Szkolenia",
        logo: "logo-humanitas-200x133.jpg"
    },
    {
        id: 6,
        name: "Glasurit",
        product: "Szkolenia",
        logo: "logo-glasurit-150x150.jpg"
    },
    {
        id: 7,
        name: "Huta Pokój",
        product: "Szkolenia",
        logo: "logo-huta-pokoj-500x383.jpg"
    },
    {
        id: 8,
        name: "PEC Bytom",
        product: "Szkolenia",
        logo: "logo-pec-bytom-150x150.jpg"
    },
    {
        id: 9,
        name: "ExxonMobile",
        product: "Szkolenia",
        logo: "logo-exxonmobile-177x142.jpg"
    },
    {
        id: 10,
        name: "En Mag",
        product: "Szkolenia",
        logo: "logo-enmag-150x150.jpg"
    },
    {
        id: 11,
        name: "Fronius",
        product: "Szkolenia",
        logo: "logo-fronius-177x142.jpg"
    },
    {
        id: 12,
        name: "EduPartners",
        product: "Szkolenia",
        logo: "logo-edupartners-500x383.jpg"
    },
    {
        id: 13,
        name: "Lear Corporation",
        product: "Szkolenia",
        logo: "logo-lear-500x383.jpg"
    }
]

export default function ClientsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const visibleCount = 5
    const totalSlides = Math.max(1, clientsData.length - visibleCount + 1)

    const [isVisible, setIsVisible] = useState(false)
    const [clientCount, setClientCount] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                    setClientCount(100);
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

    // Funkcja do pobrania widocznych elementów
    const getVisibleClients = () => {
        const start = currentIndex
        const end = Math.min(start + visibleCount, clientsData.length)
        return clientsData.slice(start, end)
    }

    // Automatyczne przewijanie
    useEffect(() => {
        if (isHovered || totalSlides === 1) return

        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % totalSlides)
        }, 3000)

        return () => clearInterval(interval)
    }, [isHovered, totalSlides])

    const nextSlide = () => {
        setCurrentIndex(prev => (prev + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides)
    }

    // Jeśli mamy mało elementów, pokaż wszystkie
    if (clientsData.length <= visibleCount) {
        return (
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nasi Klienci
                        </h2>
                        <div className="w-24 h-1 bg-sky-700 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700">
                            Zaufały nam wiodące firmy z różnych branż
                        </p>
                    </div>

                    <div className="flex justify-center gap-6 flex-wrap">
                        {clientsData.map((client) => (
                            <div
                                key={client.id}
                                className="bg-white p-1 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 h-32 w-48 flex items-center justify-center"
                            >
                                <img
                                    src={`/images/clients/${client.logo}`}
                                    alt={`${client.name} logo`}
                                    className="max-h-full max-w-full w-auto h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    style={{ maxHeight: '98%', maxWidth: '98%' }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-sm">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 font-medium">Ponad 100 zadowolonych klientów</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const visibleClients = getVisibleClients()

    return (
        <section className="py-16 bg-white" id="portfolio">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nasi Klienci
                    </h2>
                    <div className="w-24 h-1 bg-sky-700 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700">
                        Zaufały nam wiodące firmy z różnych branż
                    </p>
                </div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-all duration-300 -ml-4"
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-all duration-300 -mr-4"
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Clients Container */}
                    <div className="mx-8">
                        <div className="grid grid-cols-5 gap-6">
                            {visibleClients.map((client, index) => (
                                <div
                                    key={`${client.id}-${currentIndex}`}
                                    className="bg-white p-1 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 h-32 flex items-center justify-center group"
                                    style={{
                                        animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s both`
                                    }}
                                >
                                    <img
                                        src={`/images/clients/${client.logo}`}
                                        alt={`${client.name} logo`}
                                        className="max-h-full max-w-full w-auto h-auto object-contain grayscale grayscale-0 transition-all duration-300"
                                        style={{ maxHeight: '98%', maxWidth: '98%' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center mt-8 space-x-1">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                currentIndex === index
                                    ? 'bg-sky-700 w-8'
                                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>

                {/* Trust Badge */}
                <div className="text-center mt-12">
                    <div ref={ref} className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-sm">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 font-medium">
                            Ponad <NumberFlow
                            value={clientCount}
                            spinTiming={{
                                duration: 3500,
                                easing: 'ease-in-out'
                            }}
                        ></NumberFlow> zadowolonych klientów
                        </span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    )
}