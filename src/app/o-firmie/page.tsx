import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage"; // Ten komponent może mieć 'use client'

export const metadata: Metadata = {
    title: "O nas – Zespół, metody i doświadczenie | Anglokom",
    description: "Doświadczeni lektorzy i metodycy. Realne efekty, transparentne cele i ewaluacja komunikacji.",
    alternates: { canonical: "/o-firmie" },
    openGraph: {
        title: "O nas – Zespół, metody i doświadczenie | Anglokom",
        description: "Poznaj nasz zespół i podejście do nauczania.",
        url: "/o-firmie",
    },
    twitter: { title: "O nas – Anglokom", description: "Zespół i metody pracy." },
};

export default function AboutUs() { return <AboutPage />; }
