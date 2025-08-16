'use client'

import React from "react";
import Link from "next/link";

interface HeroCardProps {
    title: string,
    description: React.ReactNode[],
    buttonText: string,
    buttonLink: string
}

export default function AboutCard(HeroCardProps: HeroCardProps) {
    const { title, description, buttonText, buttonLink } = HeroCardProps;

    return (
        <div className="rounded-xl p-8 border-white/15 border-2 h-full flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold mb-4">{title}</h2>
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
                        className="bg-transparent border-2 cursor-pointer border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
                    >
                        {buttonText}
                    </button>
                </Link>
            </div>
        </div>
    );
}
