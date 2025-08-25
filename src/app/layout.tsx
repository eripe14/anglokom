import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import Script from "next/script";
import CookieBanner from "@/components/cookies/CookieBanner";
import {LanguageProvider} from "@/contexts/LanguageContext";
import {getServerTranslations, getServerLanguage} from '@/../lib/translations-server';
import GtagPageview from "@/components/analytics/GtagPageview";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: 'swap', // Ważne dla performance
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: "Anglokom - Profesjonalne Szkolenia językowe dla firm",
        template: "%s | Anglokom"
    },
    description: "Szkolenia językowe dla firm, audyty komunikacji i tłumaczenia. Online i stacjonarnie. Ponad 25 lat doświadczenia w branży.",
    keywords: [
        "szkolenia językowe",
        "kursy biznesowe",
        "angielski dla firm",
        "tłumaczenia",
        "komunikacja biznesowa",
        "Będzin",
        "Śląsk",
        "audyty komunikacji"
    ],
    metadataBase: new URL("https://anglokom.pl"),
    authors: [{name: "Anglokom", url: "https://anglokom.pl"}],
    creator: "Anglokom",
    publisher: "Anglokom",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: 'https://anglokom.pl',
        languages: {
            'pl': 'https://anglokom.pl',
            'en': 'https://anglokom.pl/en',
            'de': 'https://anglokom.pl/de',
        },
    },
    openGraph: {
        type: "website",
        url: 'https://anglokom.pl',
        siteName: "Anglokom",
        locale: "pl_PL",
        alternateLocale: ['en_US', 'de_DE'],
        title: "Anglokom - Profesjonalne Szkolenia językowe dla firm",
        description: "Szkolenia językowe dla firm, audyty komunikacji i tłumaczenia. Online i stacjonarnie. Ponad 25 lat doświadczenia.",
        images: [{
            url: 'https://anglokom.pl/images/Anglokom_logo.png',
            width: 1200,
            height: 630,
            alt: 'ANGLOKOM - Szkolenia językowe',
            type: 'image/png'
        }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@anglokom', // Jeśli masz Twitter
        creator: '@anglokom',
        title: "ANGLOKOM - Profesjonalne szkolenia językowe",
        description: "Profesjonalne szkolenia językowe, kursy biznesowe i komunikacja międzykulturowa. Ponad 25 lat doświadczenia.",
        images: ['https://anglokom.pl/images/Anglokom_logo.png'],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'G-6Z1WB5034P'
    },
    category: 'education',
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const language = await getServerLanguage();
    const initialTranslations = await getServerTranslations(language);
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

    return (
        <html lang={language} className="scroll-smooth">
        <head>
            {GA_ID ? (
                <>
                    {/* Consent Mode v2 – domyślnie wszystko DENIED (PRZED gtag) */}
                    <Script id="consent-default" strategy="beforeInteractive">
                        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent','default',{
                  ad_storage:'denied',
                  ad_user_data:'denied',
                  ad_personalization:'denied',
                  analytics_storage:'denied'
                });
                gtag('set','ads_data_redaction', true);
              `}
                    </Script>

                    {/* gtag loader */}
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                        strategy="afterInteractive"
                    />

                    {/* inicjalizacja GA4 */}
                    <Script id="ga-init" strategy="afterInteractive">
                        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
                    </Script>
                </>
            ) : null}

            {/* Favicons */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" sizes="any" href="/favicon.ico"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>

            {/* Theme color dla mobile */}
            <meta name="theme-color" content="#1e40af"/>
            <meta name="msapplication-TileColor" content="#1e40af"/>

            {/* Viewport - bardzo ważne dla mobile SEO */}
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>

            {/* Preconnect dla performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
            <link rel="dns-prefetch" href="https://www.googletagmanager.com"/>

            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        "name": "ANGLOKOM",
                        "description": "Profesjonalne szkolenia językowe i komunikacja biznesowa",
                        "url": "https://anglokom.pl",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://anglokom.pl/images/Anglokom_logo.png",
                            "width": 1200,
                            "height": 630
                        },
                        "foundingDate": "1999",
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "PL",
                            "addressRegion": "Śląskie",
                            "addressLocality": "Będzin",
                            "postalCode": "42-500"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "contactType": "customer service",
                            "email": "idronia@anglokom.pl",
                            "availableLanguage": ["Polish", "English", "Chinese"],
                            "areaServed": "PL"
                        },
                        "sameAs": [
                            "https://facebook.com/anglokom",
                            "https://linkedin.com/company/anglokom"
                        ],
                        "areaServed": {
                            "@type": "Place",
                            "name": "Śląsk, Polska"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Usługi językowe",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Szkolenia językowe dla firm",
                                        "description": "Profesjonalne szkolenia językowe dostosowane do potrzeb firm"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Tłumaczenia",
                                        "description": "Profesjonalne usługi tłumaczeniowe"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            suppressHydrationWarning={true} // Dla LanguageProvider
        >
            {GA_ID && (
                <GtagPageview id={GA_ID} />
            )}
            <LanguageProvider
                initialTranslations={initialTranslations}
                initialLanguage={language as 'pl' | 'en' | 'de'}
            >
                {children}
            </LanguageProvider>
            <CookieBanner/>
        </body>
        </html>
    );
}