import Hero from "@/components/offer/Hero";
import LanguageTrainingOffer from "@/components/offer/training/LanguageTrainingOffer";
import BusinessTrainingOffer from "@/components/offer/training/BusinessTrainingOffer";
import CallToAction from "@/components/offer/CallToAction";
import Features from "@/components/offer/Features";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import MaturaExamTrainingOffer from "@/components/offer/training/MaturaExamTrainingOffer";
import Reveal from "@/components/animations/Reveal";

export default function OfferPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Reveal delay={250}><LanguageTrainingOffer /></Reveal>
            <Reveal delay={300} animation="slideLeft"><BusinessTrainingOffer /></Reveal>
            <Reveal delay={300} animation="slideRight"><MaturaExamTrainingOffer /></Reveal>
            <Reveal delay={150}><Features /></Reveal>
            <Reveal delay={150}><CallToAction /></Reveal>
            <Footer />
        </div>
    );
}