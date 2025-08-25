import type { Metadata } from "next";
import TranslationsPage from "@/components/translations/TranslationsPage";

export const metadata: Metadata = {
    title: "Biuro tłumaczeń – Specjalistyczne tłumaczenia EN/DE/FR/UA | Anglokom",
    description: "Tłumaczenia biznesowe, techniczne i marketingowe; weryfikacja merytoryczna i korekta językowa. Terminy ekspresowe.",
    alternates: { canonical: "/biuro-tlumaczen" },
    openGraph: {
        title: "Biuro tłumaczeń – Anglokom",
        description: "Specjalistyczne tłumaczenia dla firm z weryfikacją jakości.",
        url: "/biuro-tlumaczen",
    },
    twitter: { title: "Biuro tłumaczeń – Anglokom", description: "Tłumaczenia dla biznesu." },
};

export default function Translations() { return <TranslationsPage />; }
