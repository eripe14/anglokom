'use client'

import { useEffect, useState } from 'react'

export default function CookieBanner() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const accepted = localStorage.getItem('cookies-accepted')
        if (!accepted) {
            setVisible(true)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem('cookies-accepted', 'true')
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-xl w-full shadow-xl rounded-xl border border-white bg-gradient-to-r from-cyan-600 to-sky-700 text-white px-6 py-4 animate-slide-up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm md:text-base text-sky-100">
                    Ta strona używa plików cookies w celach technicznych, np. obsługi formularza kontaktowego.
                </p>
                <button
                    onClick={acceptCookies}
                    className="bg-white text-sky-700 font-semibold px-6 py-2 rounded-lg hover:bg-sky-100 transition"
                >
                    Rozumiem
                </button>
            </div>
        </div>
    )
}
