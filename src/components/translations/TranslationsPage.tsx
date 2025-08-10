import Hero from "@/components/translations/Hero";
import Navbar from "@/components/header/navbar/Navbar";
import Reveal from "@/components/animations/Reveal";
import React from "react";
import OfferSection from "@/components/translations/Offer";
import PriceListSection from "@/components/translations/PriceList";
import CallToAction from "@/components/translations/CallToAction";
import Footer from "@/components/footer/Footer";

export default function TranslationsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />

            <div className="container mx-auto px-6 py-16 space-y-20">
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    <Reveal delay={200} animation="slideLeft"><OfferSection/></Reveal>
                    <Reveal delay={200} animation="slideRight"><PriceListSection/></Reveal>
                </div>
            </div>

            <Reveal delay={300} className="bg-gray-900 text-white py-20"><CallToAction/></Reveal>
            <Footer />
        </div>
    )
}