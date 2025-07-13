import Hero from "@/components/offer/Hero";
import LanguageTrainingOffer from "@/components/offer/training/LanguageTrainingOffer";
import BusinessTrainingOffer from "@/components/offer/training/BusinessTrainingOffer";
import CallToAction from "@/components/offer/CallToAction";
import Features from "@/components/offer/Features";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import MaturaExamTrainingOffer from "@/components/offer/training/MaturaExamTrainingOffer";

export default function OfferPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <LanguageTrainingOffer />
            <BusinessTrainingOffer />
            <MaturaExamTrainingOffer />
            <Features />
            <CallToAction />
            <Footer />
        </div>
    );
}