import type { Metadata } from "next";
import LandingPage from "@/components/home/LandingPage";

export const metadata: Metadata = {
    title: "Anglokom – Szkolenia językowe dla firm, Audyty i Tłumaczenia",
    description: "Kompleksowa komunikacja językowa dla biznesu: kursy, audyty kompetencji i tłumaczenia. Katowice / online.",
    alternates: { canonical: "/" },
    openGraph: {
        title: "Anglokom – Szkolenia językowe dla firm, Audyty i Tłumaczenia",
        description: "Kompleksowa komunikacja językowa dla biznesu. Katowice / online.",
        url: "/",
    },
    twitter: { title: "Anglokom – szkolenia, audyty, tłumaczenia", description: "Komunikacja językowa dla biznesu." },
};

export default function Home() {
    return <LandingPage />;
}
