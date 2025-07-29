'use client'

import React from "react";
import Link from "next/link";

interface HeroCardProps {
    title: string,
    description: React.ReactNode[],
    buttonText: string,
    buttonLink: string
}

export default function HeroCard(HeroCardProps: HeroCardProps) {
    const { title, description, buttonText, buttonLink } = HeroCardProps;

    return (
        <div className="bg-white backdrop-blur-sm rounded-xl p-8 border-white/15 border-2 shadow-lg h-full flex flex-col justify-between">
            <div>
                <h3 className="text-2xl text-gray-800 font-semibold mb-4">{title}</h3>
                {description.map((desc, index) => (
                    typeof desc === 'string' ? (
                        <p key={index} className="text-gray-700 text-lg leading-relaxed text-justify">
                            {desc}
                        </p>
                    ) : (
                        <React.Fragment key={index}>{desc}</React.Fragment>
                    )
                ))}
            </div>
            <div className="text-center mt-6">
                <Link href={buttonLink}>
                    <button
                        className="bg-transparent border-2 cursor-pointer border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
                    >
                        {buttonText}
                    </button>
                </Link>
            </div>
        </div>
    );
}
