import React from "react";

export default function OfferSectionHeader(
    {
        title,
        subtitle,
        icon
    }:
    { title: string; subtitle: string; icon: React.ReactNode }) {
    return (
        <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-cyan-600 to-sky-700 rounded-full text-white">
                    {icon}
                </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    );
}