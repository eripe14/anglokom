import React from "react";

export default function OfferServiceCard(
    {
        cardTitle,
        cardDescription,
        icon,
        slug
    }: {
        cardTitle: string;
        cardDescription: string;
        icon: React.ReactNode;
        slug: string
    }) {
    const contactLink = slug == "kontakt" ? "/kontakt" : `/oferta/${slug}`;
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
                    {slug && (
                        <a
                            href={`${contactLink}`}
                            className="mt-auto inline-block bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                        >
                            Dowiedz się więcej
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}