import React from 'react';
import {useLanguage} from "@/contexts/LanguageContext";

export default function OurTeam() {
    const {t} = useLanguage();

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 h-full text-justify">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
                {t('about.team.title')}
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-justify mb-2">{t('about.team.paragraph.one')}</p>
                <ul className="space-y-2">
                    <li className="flex items-start group">
                        <div
                            className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-cyan-600 to-sky-700 rounded-full mt-2.5 mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="flex-1">{t('about.team.list.one')}</span>
                    </li>
                    <li className="flex items-start group">
                        <div
                            className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-cyan-600 to-sky-700 rounded-full mt-2.5 mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="flex-1">{t('about.team.list.two')}</span>
                    </li>
                    <li className="flex items-start group">
                        <div
                            className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-cyan-600 to-sky-700 rounded-full mt-2.5 mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="flex-1">{t('about.team.list.three')}</span>
                    </li>
                    <li className="flex items-start group">
                        <div
                            className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-cyan-600 to-sky-700 rounded-full mt-2.5 mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="flex-1">{t('about.team.list.four')}</span>
                    </li>
                </ul>
                <p className="text-justify mb-2">{t('about.team.paragraph.two')}</p>
                <p className="text-justify">{t('about.team.paragraph.three')}</p>
            </div>
        </div>
    )
}