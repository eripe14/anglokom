import React from 'react';
import { Globe } from 'lucide-react';

const Coverage = () => (
    <div className="bg-gradient-to-r from-cyan-600 to-sky-800 rounded-2xl shadow-xl p-8 text-white">
        <h3 className="text-3xl font-bold mb-6 text-center">Zasięg Działania</h3>
        <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm mb-6">
                <Globe className="w-12 h-12 text-white" />
            </div>
            <p className="text-2xl font-semibold text-white mb-4">Cała Polska</p>
            <p className="text-lg text-white max-w-2xl mx-auto">
                Realizujemy projekty na terenie całego kraju, dostosowując się do potrzeb i lokalizacji naszych klientów
            </p>
        </div>
    </div>
);

export default Coverage;
