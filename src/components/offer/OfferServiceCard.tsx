import React from "react";

export default function OfferServiceCard(
    {
        cardTitle,
        cardDescription,
        icon, tooltipTitle,
        tooltipDescription,
        slug
    }: {
        cardTitle: string;
        cardDescription: string;
        icon: React.ReactNode;
        tooltipTitle: string;
        tooltipDescription: string;
        slug: string
    }) {
    return (
        <div className="relative w-full h-full group">
            <div className="w-full h-full p-6 bg-gradient-to-r from-cyan-600 to-sky-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02] group-hover:-translate-y-1 min-h-[240px]">
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="mb-4 p-3 bg-white/20 rounded-full backdrop-blur-sm">
                        <div className="text-white">
                            {icon}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {cardTitle}
                    </h3>
                    <p className="text-md text-blue-100 leading-relaxed mb-4">{cardDescription}</p>
                    <a
                        href={`/oferta/${slug}`}
                        className="mt-auto inline-block bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                    >
                        Dowiedz się więcej
                    </a>
                </div>
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="relative w-80 bg-white text-gray-800 p-4 rounded-xl shadow-2xl border border-gray-200">
                    <div className="mb-2">
                        <h4 className="text-lg font-bold text-cyan-600 mb-2 text-center">{tooltipTitle}</h4>
                        <p className="text-md text-gray-700 leading-relaxed text-justify">{tooltipDescription}</p>
                    </div>
                    <div className="absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-r border-b border-gray-200"></div>
                </div>
            </div>
        </div>
    );
}