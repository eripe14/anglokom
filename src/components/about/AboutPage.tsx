'use client'

import React from 'react';
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import OurTeamSection from "@/components/about/OurTeam";
import LanguagesSection from "@/components/about/Languages";
import ServicesSection from "@/components/about/service/Services";
import SpecializationsSection from "@/components/about/Specializations";
import CoverageSection from "@/components/about/Coverage";
import Hero from "@/components/about/Hero";
import Reveal from "@/components/animations/Reveal";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Navbar />

            {/* Header */}
            <Hero />

            {/* Sections */}
            <div className="container mx-auto px-6 py-16 space-y-20">
                <div className="grid lg:grid-cols-2 gap-12">
                    <Reveal delay={200} animation="slideLeft"><OurTeamSection /></Reveal>
                    <Reveal delay={200} animation="slideRight"><LanguagesSection /></Reveal>
                </div>

                <Reveal delay={300} animation="scale"><ServicesSection /></Reveal>
                <Reveal delay={200} animation="scale"><SpecializationsSection /></Reveal>
                <Reveal delay={300} animation="scale"><CoverageSection /></Reveal>
            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;
