'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    // Przykładowe zdjęcia - zastąp swoimi
    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop',
            title: 'Witaj na Mojej Stronie',
            subtitle: 'Profesjonalne rozwiązania dla Twojego biznesu'
        },
        {
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop',
            title: 'Nowoczesne Technologie',
            subtitle: 'Tworzymy przyszłość razem z Tobą'
        },
        {
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop',
            title: 'Zespół Ekspertów',
            subtitle: 'Doświadczenie i pasja w każdym projekcie'
        },
        {
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop',
            title: 'Innowacyjne Rozwiązania',
            subtitle: 'Przekraczamy granice możliwości'
        }
    ]

    // Auto-slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000) // Zmiana co 5 sekund

        return () => clearInterval(timer)
    }, [slides.length])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    return (
        <section className="relative overflow-hidden">
            {/* Slider Container */}
            <div className="relative w-full min-h-[500px]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40" />

                        {/* Content */}
                        <div className="relative z-10">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in-up">
                                    {slide.title}
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-blue-100 opacity-0 animate-fade-in-up-delay">
                                    {slide.subtitle}
                                </p>
                                <div className="space-x-4 opacity-0 animate-fade-in-up-delay-2">
                                    <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                        Dowiedz się więcej
                                    </button>
                                    <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                                        Kontakt
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? 'bg-white scale-125'
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20 z-20">
                <div
                    className="h-full bg-white transition-all duration-300 ease-linear"
                    style={{
                        width: `${((currentSlide + 1) / slides.length) * 100}%`
                    }}
                />
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fadeInUp 1s ease-out 0.3s forwards;
                }

                .animate-fade-in-up-delay {
                    animation: fadeInUp 1s ease-out 0.6s forwards;
                }

                .animate-fade-in-up-delay-2 {
                    animation: fadeInUp 1s ease-out 0.9s forwards;
                }
            `}</style>
        </section>
    )
}