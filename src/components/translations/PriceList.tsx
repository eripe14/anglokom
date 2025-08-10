'use client'

import React from "react";
import {useLanguage} from "@/contexts/LanguageContext";
import Link from "next/link";

export default function PriceListSection() {
    const {t} = useLanguage();
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col justify-between">
            <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    {t('translations.price_list.title')}
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                    <p className="text-justify mb-2">
                        {t('translations.price_list.description')}
                    </p>
                </div>
            </div>

            <div className="text-center mt-6">
                <Link href="/kontakt">
                    <button
                        className="bg-transparent border-2 cursor-pointer border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
                    >
                        {t('translations.price_list.contact_button')}
                    </button>
                </Link>
            </div>
        </div>
    )
}
