import React from "react";
import {useLanguage} from "@/contexts/LanguageContext";

export default function Mission() {
    const {t} = useLanguage();

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 h-full text-justify">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">{t('about.mission.title')}</h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-justify mb-2">{t('about.mission.paragraph.one')}</p>
                <ul className="space-y-2 mb-2">
                    <li className="flex items-start group">
                        <div
                            className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-cyan-600 to-sky-700 rounded-full mt-2.5 mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="flex-1">{t('about.mission.list.one')}</span>
                    </li>
                    <li className="flex items-start group">
                        <div
                            className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-cyan-600 to-sky-700 rounded-full mt-2.5 mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="flex-1">{t('about.mission.list.two')}</span>
                    </li>
                </ul>
                <p className="text-justify">{t('about.mission.paragraph.two')}</p>
            </div>
        </div>
    )
}