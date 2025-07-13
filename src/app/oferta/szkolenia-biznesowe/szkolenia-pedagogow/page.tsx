import {Award} from 'lucide-react';
import {TrainingDetail} from "@/components/offer/training/detail/TrainingDetail";
import TrainingDetailPage from "@/components/offer/training/detail/TrainingDetailPage";

export default function SzkoleniaMetodyczneDlaNauczycieli() {
    const trainingData: TrainingDetail = {
        title: "Szkolenia metodyczne dla nauczycieli języków obcych",
        subtitle: "Oferta szkoleń zamkniętych dla szkół i szkół językowych",
        description: "Oferujemy szkolenia i warsztaty dla nauczycieli języków obcych – zarówno ogólne, jak i specjalistyczne. Programy prowadzone są przez wykwalifikowanych metodyków z tytułami doktorskimi z zakresu filologii. Szkolenia realizujemy w siedzibie klienta lub w Katowicach przy ul. Jordana 18.",
        icon: <Award size={48}/>,
        features: [
            "Szkolenia dla anglistów, germanistów, romanistów i rusycystów",
            "Forma warsztatowa z konkretnymi narzędziami dydaktycznymi",
            "Możliwość organizacji na miejscu lub w Katowicach (Jordana 18)",
            "Opcjonalny catering (przerwy kawowe i lunch)",
            "Doświadczeni trenerzy – doktorzy filologii",
            "Cena ustalana indywidualnie, przykładowa kalkulacja dostępna"
        ],
        details: {
            duration: "1 dzień (ok. 6 godzin szkoleniowych)",
            groupSize: "6–20 uczestników",
            location: "W siedzibie klienta lub w Katowicach przy ul. Jordana 18",
            level: "Dla nauczycieli różnych poziomów edukacyjnych",
            certificate: true
        },
        content: {
            sections: [
                {
                    title: "Moduły ogólne",
                    type: "grid",
                    content: [
                        {
                            title: "Metodyka języka angielskiego",
                            description: "Pigułka odświeżająca – metody, techniki, nowoczesne materiały, strategie dla różnych grup wiekowych."
                        },
                        {
                            title: "Metodyka języka niemieckiego",
                            description: "Odświeżenie wiedzy, techniki nauczania, rekomendacje materiałów, praca z dziećmi i dorosłymi."
                        },
                        {
                            title: "Metodyka języka francuskiego",
                            description: "Aktualne podejścia do nauczania, organizacja lekcji, nowoczesne rozwiązania dydaktyczne."
                        },
                        {
                            title: "Metodyka języka rosyjskiego",
                            description: "Techniki dydaktyczne i praktyczne sposoby prowadzenia zajęć w różnych grupach wiekowych."
                        }
                    ]
                },
                {
                    title: "Warsztaty specjalistyczne",
                    type: "list",
                    content: [
                        "Specyfika nauczania dorosłych – kursy firmowe (Business English/Deutsch)",
                        "Jak motywować nastolatków – grywalizacja, podcasty, praca z Internetem",
                        "Nauczanie przedszkolne i wczesnoszkolne – zasady i rekomendacje materiałowe",
                        "Warsztaty dla niefilologów – jak radzić sobie bez kierunkowego wykształcenia",
                        "Refleksyjna praktyka – jak wyciągać wnioski ze zdarzeń krytycznych w klasie",
                        "Jak zadawać pytania – rola i typologia pytań w języku obcym",
                        "Dyskurs w klasie – kod językowy, metody klasyczne i alternatywne",
                        "Gry językowe – zwiększenie motywacji, rozwój sprawności mówienia"
                    ]
                },
                {
                    title: "Szkolenia kompetencyjne",
                    type: "list",
                    content: [
                        "Komunikacja interpersonalna – typowe błędy, aktywne słuchanie, zadawanie pytań",
                        "Asertywność i współpraca – testy predyspozycji do pracy w zespole",
                        "Praca w grupie – ćwiczenia integracyjne i wspierające komunikację"
                    ]
                },
                {
                    title: "Audyty edukacyjne i wspomaganie rozwoju szkoły",
                    type: "text",
                    content: `Oferujemy audyty edukacyjne i komunikacyjne w placówkach oświatowych. Wspieramy dyrektorów i rady pedagogiczne w diagnozie potrzeb, opracowywaniu planów rozwojowych i wdrażaniu działań naprawczych.`
                },
                {
                    title: "Przykładowy harmonogram (Katowice, Jordana 18)",
                    type: "schedule",
                    content: [
                        { time: "9:00", description: "Powitanie i plan szkolenia" },
                        { time: "9:15–10:45", description: "Szkolenie" },
                        { time: "10:45–11:00", description: "Przerwa kawowa (napoje i ciasteczka)" },
                        { time: "11:00–12:30", description: "Szkolenie" },
                        { time: "12:30–13:15", description: "Lunch (kurczak, ziemniaki, surówki)" },
                        { time: "13:30–14:45", description: "Szkolenie" },
                        { time: "14:45–15:00", description: "Podsumowanie i zakończenie szkolenia" }
                    ]
                },
                {
                    title: "Kontakt i szczegóły",
                    type: "text",
                    content: `W celu uzyskania indywidualnej wyceny oraz dopasowania zakresu szkolenia do potrzeb Twojej placówki, zapraszamy do kontaktu mailowego lub telefonicznego.`
                }
            ]
        },
        cta: {
            primaryButton: "Wypełnij formularz kontaktowy",
            primaryButtonLink: "/kontakt",
            secondaryButton: "Zamów ofertę dla szkoły"
        }
    };

    return <TrainingDetailPage training={trainingData}/>;
}
