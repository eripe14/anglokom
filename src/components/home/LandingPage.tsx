'use client';

import Navbar from '../header/Navbar'
import Hero from './hero/Hero'
import About from './About'
import Offer from './Offer'
import Audience from './Audience'
import ClientsSlider from './client/ClientsSlider'
import Footer from '../footer/Footer'
import Reveal from '../animations/Reveal'
import {Element} from 'react-scroll';
import CallToAction from "@/components/home/CallToAction";

export default function LandingPage() {

    return (
        <div className="min-h-screen bg-white">
            <Navbar/>

            <Hero/>

            <Reveal delay={100}><About/></Reveal>

            <Element name="offer-section"><Reveal delay={200} animation="slideLeft"> <Offer/> </Reveal> </Element>

            <Reveal delay={150} animation="slideRight"><Audience/></Reveal>

            <Reveal delay={250}><ClientsSlider/></Reveal>

            <Reveal delay={300} className="bg-gray-900 text-white py-20"><CallToAction/></Reveal>

            <Footer/>
        </div>
    )
}