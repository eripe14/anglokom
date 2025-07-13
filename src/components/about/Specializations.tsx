import React from 'react';

const Specializations = () => (
    <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Nasze Specjalizacje</h3>
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h4 className="text-xl font-semibold text-sky-700 mb-4">Egzaminy Międzynarodowe</h4>
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
                <h4 className="text-xl font-semibold text-sky-700 mb-4">Języki Specjalistyczne</h4>
                <div className="text-gray-700 space-y-2">
                    <p>• Business English</p>
                    <p>• Terminologia energetyczna, informatyczna, medyczna</p>
                    <p>• Słownictwo prawnicze, logistyczne</p>
                    <p>• Finanse i bankowość</p>
                </div>
            </div>
        </div>
    </div>
);

export default Specializations;
