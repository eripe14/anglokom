import React from "react";

export default function Hero() {
    return (
        <div className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white">
            <div className="container mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">ANGLOKOM</h1>
                <p className="text-xl text-sky-100 max-w-4xl mx-auto leading-relaxed">
                    Od 2000 roku specjalizujemy się w organizacji i prowadzeniu szkoleń językowych,
                    biznesowych oraz tłumaczeń. Oferujemy szeroką gamę usług skierowanych na komunikację
                    biznesową i językową.
                </p>
            </div>
        </div>
    )
}