import { GraduationCap } from 'lucide-react';
import { TrainingDetail } from "@/components/offer/training/detail/TrainingDetail";
import TrainingDetailPage from "@/components/offer/training/detail/TrainingDetailPage";

export default function LondonTraining() {
    const trainingData: TrainingDetail = {
        title: "Business English w TTI School of English, Londyn",
        subtitle: "Intensywny kurs językowy w centrum kulturalnym Londynu",
        description: "Kurs Business English w renomowanej TTI School of English w Londynie (Camden), z wykwalifikowaną kadrą native speakerów, obejmuje rozwój umiejętności językowych i kompetencji biznesowych. W programie także atrakcyjny program kulturalno-towarzyski oraz zakwaterowanie w komfortowych warunkach.",
        icon: <GraduationCap size={48} />,
        features: [
            "Zajęcia z native speakerami",
            "30 godzin lekcyjnych Business English",
            "Certyfikat ukończenia kursu",
            "Zakwaterowanie w pokoju jednoosobowym z łazienką",
            "Transfery lotniskowe i przeloty w cenie",
            "Bogaty program kulturalny i integracyjny"
        ],
        details: {
            duration: "1 tydzień, poniedziałek–piątek, 9:00–12:40 oraz 14:30–16:10",
            groupSize: "Do 12 osób",
            location: "Camden, Londyn, TTI School of English",
            level: "Średniozaawansowany i zaawansowany",
            certificate: true
        },
        content: {
            sections: [
                {
                    title: "Opis kursu",
                    type: "text",
                    content: `Kurs Business English koncentruje się na rozwijaniu umiejętności językowych przydatnych w środowisku pracy: prowadzenie prezentacji, pisanie maili, tworzenie dokumentów biznesowych, rozmowy telefoniczne i negocjacje. Program obejmuje produktywne (mówienie, pisanie) oraz receptywne (czytanie, słuchanie) sprawności językowe, a także pracę nad gramatyką, słownictwem i wymową.`
                },
                {
                    title: "Czas wolny",
                    type: "list",
                    content: [
                        "Wieczory quizowe, karaoke, wieczory talentów",
                        "Teatr, muzyka na żywo, wyjścia do kina i na kręgle",
                        "Spotkania integracyjne w barach i klubach (np. salsa)",
                        "Dostęp do siłowni i restauracji w pobliżu szkoły",
                        "Weekendowe wycieczki do Oxfordu, Cambridge, Yorku, Brighton, Stonehenge (za dodatkową opłatą)"
                    ]
                },
                {
                    title: "Zakwaterowanie",
                    type: "text",
                    content: `Zakwaterowanie w jednoosobowym pokoju Premium z łazienką w budynkach szkoły. Uczestnicy mają dostęp do wspólnej, w pełni wyposażonej kuchni. Okolica tętni życiem – w pobliżu znajdują się restauracje portugalskie, hiszpańskie, włoskie i greckie. Do atrakcji turystycznych (Madame Tussaud’s, Oxford Street, Piccadilly Circus) można dotrzeć w mniej niż 20 minut.`
                },
                {
                    title: "Cena i świadczenia",
                    type: "list",
                    content: [
                        "9 500 zł za cały pakiet (kurs, przeloty, zakwaterowanie, transfery)",
                        "Przelot z Krakowa przez Warszawę do Londynu (Heathrow) i z powrotem",
                        "Transfer z i na lotnisko bezpośrednio do/z szkoły",
                        "Kurs Business English (30 godzin lekcyjnych)",
                        "Jednodniowa wycieczka do Oksfordu i Stratford-upon-Avon (miejsce urodzenia Szekspira)",
                        "Możliwość dokupienia dodatkowych godzin zajęć"
                    ]
                }
            ]
        },
        cta: {
            primaryButton: "Zarezerwuj kurs",
            primaryButtonLink: "/kontakt",
            secondaryButton: "Pobierz broszurę PDF"
        }
    };

    return <TrainingDetailPage training={trainingData} />;
}
