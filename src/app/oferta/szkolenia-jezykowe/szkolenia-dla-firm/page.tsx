import {Building} from 'lucide-react';
import {TrainingDetail} from "@/components/offer/training/detail/TrainingDetail";
import TrainingDetailPage from "@/components/offer/training/detail/TrainingDetailPage";

export default function CompanyTraining() {
    const trainingData: TrainingDetail = {
        title: "Szkolenia językowe dla firm",
        subtitle: "Szkolenia językowe ogólne i \"szyte na miarę\" potrzeb klienta",
        description: "ANGLOKOM powstał w 2000 roku jako firma zajmująca się organizacją i prowadzeniem szkoleń językowych w siedzibie Klienta. Nauczamy nowoczesną i propagowaną obecnie metodą komunikacyjną (Communicative Language Teaching), której głównym założeniem jest nacisk na konwersacje i umiejętność zachowania się w sytuacjach życia codziennego. Prowadzone przez nas kursy mają na celu wykorzystanie czasu zajęć w najbardziej efektywny sposób tak, aby ograniczyć do minimum samodzielną pracę w domu. Zajęcia są prowadzone przez doświadczonych merytorycznie, wykwalifikowanych i przygotowanych pod kątem metodycznym nauczycieli (także akademickich) oraz native speakers. Nasi lektorzy dojeżdżają na szkolenie do lokalizacji wyznaczonej przez Klienta w godzinach przez niego preferowanych.",
        icon: <Building size={48}/>,
        features: [
            "Szkolenia indywidualne i grupowe",
            "Analiza potrzeb i poziomu uczestników",
            "Materiały autorskie i multimedialne",
            "Zajęcia w siedzibie firmy lub online",
            "Możliwe zajęcia z native speak'erami",
            "Materiały dostosowane do branży klienta"
        ],
        details: {
            duration: "Elastyczne harmonogramy",
            groupSize: "1-12 osób",
            location: "U klienta lub online",
            level: "Wszystkie poziomy",
            certificate: true
        },
        content: {
            sections: [
                {
                    title: "Poniżej przedstawiamy nasz sposób organizacji kursu nauki języka angielskiego w siedzibie Klienta:",
                    type: "point-list",
                    content: [
                        "Test leksykalno-gramatyczny i/lub rozmowa z lektorem pozwoli nam określić poziom znajomości języka uczestnika kursu i przypisać go do odpowiedniej grupy.",
                        "Po przeprowadzeniu analizy potrzeb językowych uczestnika zajęć, zaproponujemy przygotowany przez nadzorującego każdy nasz kurs metodyka (kilkunastoletni staż akademicki) odpowiedni harmonogram kursu i odpowiadający poziomowi grupy zestaw podręczników i ćwiczeń.",
                        "Korzystamy z różnorodnych materiałów i podręczników dostosowanych do indywidualnych potrzeb słuchaczy realizujących materiał z zakresu zarówno tzw. Business English (np. Market Leader, Business English Certificate), jak i języka ogólnego. Proponowane przez nas podręczniki są ogólnodostępne, jednakże my oferujemy ich zakup dla uczestników kursu po cenie hurtowej. Wszystkie inne wykorzystywane przez lektora pomoce lekcyjne (np. płyty CD i DVD itp.) są wliczone w cenę kursu, tzn. nie pobieramy za nie dodatkowego wynagrodzenia.",
                        "Wiedza i doświadczenie naszych lektorów (dyplomowani filolodzy), a także zalety stosowanej przez nas metody komunikacyjnej pozwalają na efektywne wprowadzanie w odpowiednio zaawansowanych językowo grupach pojęć związanych z prowadzoną przez Klienta działalnością gospodarczą. Zajęcia pomagają w opanowaniu m.in. takich umiejętności jak rozumienie programów komputerowych w języku angielskim, prowadzenie rozmów telefonicznych (‘secretarial English’), prowadzenie korespondencji handlowej, e-mailowej, kontakt z klientem (negocjowanie umów, kontraktów), znajomość słownictwa związanego z logistyką, handlem, informatyką, tematyką medyczną, prawniczą, techniczną oraz szeroko pojętymi usługami."
                    ]
                },
                {
                    title: "",
                    type: "text",
                    content: [
                        "Na życzenie naszych Klientów opracowujemy raporty przedstawiające wyniki postępów w nauce i frekwencję słuchaczy, a także okresowe ewaluacje postępu językowego uczestników kursu i na ich podstawie możemy wydać zaświadczenie (świadectwo) dot. poziomu znajomości języka angielskiego uczestnika kursu.",
                    ]
                },
                {
                    title: "",
                    type: "text",
                    content: "Organizujemy również kursy nauki języka niemieckiego, hiszpańskiego, francuskiego, rosyjskiego, ukraińskiego i szwedzkiego oraz polskiego dla obcokrajowców."
                },
                {
                    title: "",
                    type: "text",
                    content: "Osoby reprezentujące poziom średniozaawansowany i zaawansowany mają również do dyspozycji możliwość udziału w organizowanych przez nas biznesowych szkoleniach otwartych i zamkniętych prowadzonych w języku angielskim, których szczegółowa oferta znajduje się na naszej stronie internetowej."
                },
                {
                    title: "",
                    type: "text",
                    content: "Organizujemy również kursy nauki języka niemieckiego, hiszpańskiego, francuskiego, rosyjskiego, ukraińskiego i szwedzkiego oraz polskiego dla obcokrajowców."
                },
                {
                    title: "",
                    type: "text",
                    content: "Jesteśmy partnerem i przedstawicielem szkoły TTI School of English mającej akredytację British Council. Organizujemy wspólnie intensywne szkolenia jedno i dwutygodniowe w Londynie."
                },
                {
                    title: "",
                    type: "text",
                    content: "Prowadzimy również biuro tłumaczeń. Tłumaczymy wszystkie języki."
                }
            ]
        },
        cta: {
            primaryButton: "Skontaktuj się z nami",
            primaryButtonLink: "/kontakt"
        }
    };




    return <TrainingDetailPage training={trainingData}/>;
}