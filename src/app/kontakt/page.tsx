import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
    title: "Kontakt – Anglokom (Katowice / online)",
    description: "Umów bezpłatną konsultację. Pracujemy z firmami w całej Polsce – stacjonarnie i online.",
    alternates: { canonical: "/kontakt" },
    openGraph: {
        title: "Kontakt – Anglokom",
        description: "Napisz lub zadzwoń – doradzimy najlepsze rozwiązanie.",
        url: "/kontakt",
    },
    twitter: { title: "Kontakt – Anglokom", description: "Skontaktuj się z nami." },
};

export default function Contact() { return <ContactPage />; }
