import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="group relative flex items-center justify-center h-10 px-3 py-2
                       bg-gradient-to-r from-cyan-600 to-sky-700
                       hover:from-cyan-700 hover:to-sky-800
                       text-white rounded-lg transition-all duration-300
                       transform hover:scale-105 hover:shadow-lg ml-2"
            aria-label={`Switch language to ${language === 'pl' ? 'English' : 'Polish'}`}
        >
            <Languages className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-sm font-medium uppercase tracking-wide">
                {language}
            </span>

            {/* Subtle shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                           translate-x-[-100%] group-hover:translate-x-[100%]
                           transition-transform duration-700 ease-in-out rounded-lg"></div>
        </button>
    );
}