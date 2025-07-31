import React from "react";
import {useLanguage} from "@/contexts/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <div className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white">
            <div className="container mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">ANGLOKOM</h1>
                <p className="text-xl text-sky-100 max-w-4xl mx-auto leading-relaxed text-justify">
                    {t('about.hero.description')}
                </p>
            </div>
        </div>
    )
}