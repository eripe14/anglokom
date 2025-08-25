import type { Metadata } from "next";
import AuditsPage from "@/components/audit/AuditsPage";

export const metadata: Metadata = {
    title: "Audyty językowe i komunikacyjne dla firm | Anglokom",
    description: "Diagnoza poziomu językowego i kompetencji komunikacyjnych. Raport wyników + plan rozwoju zespołu.",
    alternates: { canonical: "/audyty" },
    openGraph: {
        title: "Audyty językowe i komunikacyjne",
        description: "Rzetelna diagnoza + rekomendacje rozwojowe.",
        url: "/audyty",
    },
    twitter: { title: "Audyty językowe – Anglokom", description: "Diagnoza i rekomendacje." },
};

export default function Audits() { return <AuditsPage />; }
