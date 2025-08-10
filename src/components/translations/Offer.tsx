'use client'

import {useLanguage} from "@/contexts/LanguageContext";
import React from "react";

export default function OfferSection() {
    const { t } = useLanguage();
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 h-full text-justify">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
                {t('translations.offer.title')}
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                <p className="text-justify mb-2">{t('translations.offer.paragraph.one')}</p>
                <p className="text-justify mb-2">{t('translations.offer.paragraph.two')}</p>
            </div>
        </div>
    )
}