'use client';

import React from 'react';
import { X } from 'lucide-react';

export default function GlobalNotification() {
    const [visible, setVisible] = React.useState(true);

    if (!visible) return null;

    return (
        <div className="bg-blue-600 text-white px-4 py-2 text-sm flex items-center justify-between shadow-md">
            <div>
                📢 <strong>Nowość:</strong> Zapisy na kursy maturalne 2026 już dostępne! <a href="/kursy-maturalne" className="underline font-semibold ml-1">Zobacz więcej</a>
            </div>
            <button
                onClick={() => setVisible(false)}
                className="ml-4 hover:text-blue-200 transition-colors"
                aria-label="Zamknij powiadomienie"
            >
                <X size={18} />
            </button>
        </div>
    );
}