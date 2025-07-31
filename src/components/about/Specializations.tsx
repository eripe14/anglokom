import React from 'react';
import {useLanguage} from "@/contexts/LanguageContext";

export default function Specializations() {
    const {t} = useLanguage();
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">{t('about.specializations.title')}</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="text-xl font-semibold text-sky-700 mb-4">{t('about.specializations.exam')}</h4>
                    <div className="flex flex-wrap gap-3">
                        {['FCE', 'CPE', 'CAE', 'LCCI'].map(exam => (
                            <span key={exam}
                                  className="px-4 py-2 bg-sky-100 text-sky-900 rounded-full font-medium hover:bg-blue-200 transition-colors">
                            {exam}
                        </span>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-sky-700 mb-2">{t('about.specializations.languages')}</h4>
                    <ul className="space-y-2 mb-2 text-gray-700">
                        <li className="flex items-start group">
                            <div
                                className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-cyan-600 to-sky-700 rounded-full mt-2.5 mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="flex-1">{t('about.specializations.languages.list.one')}</span>
                        </li>
                        <li className="flex items-start group">
                            <div
                                className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-cyan-600 to-sky-700 rounded-full mt-2.5 mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="flex-1">{t('about.specializations.languages.list.two')}</span>
                        </li>
                        <li className="flex items-start group">
                            <div
                                className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-cyan-600 to-sky-700 rounded-full mt-2.5 mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="flex-1">{t('about.specializations.languages.list.three')}</span>
                        </li>
                        <li className="flex items-start group">
                            <div
                                className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-cyan-600 to-sky-700 rounded-full mt-2.5 mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="flex-1">{t('about.specializations.languages.list.four')}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}