import type { Metadata } from "next";
import OfferPage from "@/components/offer/OfferPage";

export const metadata: Metadata = {
    title: "Oferta – Szkolenia językowe dla firm | Anglokom",
    description: "Business English, kursy branżowe, zajęcia 1:1 i grupowe. Programy szyte na miarę, raportowanie postępów.",
    alternates: { canonical: "/oferta" },
    openGraph: {
        title: "Oferta – Szkolenia językowe dla firm | Anglokom",
        description: "Kursy językowe dla biznesu z raportowaniem i celami.",
        url: "/oferta",
    },
    twitter: { title: "Oferta – Szkolenia dla firm", description: "Business English i kursy branżowe." },
};

export default function Offer() { return <OfferPage />; }
