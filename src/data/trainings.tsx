// data/trainings.ts
import React from "react";
import { Building2 } from "lucide-react";
import { TrainingDetail } from "@/components/offer/training/detail/TrainingDetail";
import { slugify } from "@/../lib/slugify";

type Price = { label: string; value: string };

export type TrainingRecord = TrainingDetail & {
    slug: string;
    meta?: { validUntil?: string };
    pricing?: Price[];
    notes?: string[];
};

const DefaultIcon = <Building2 size={48} />;
const mk = (
    title: string,
    data: Partial<Omit<TrainingRecord, "title" | "slug" | "icon">> & { icon?: React.ReactNode } // luźniejsze wejście
): TrainingRecord => ({
    title,
    slug: slugify(title),
    icon: data.icon ?? DefaultIcon,
    // DOMYŚLNE WARTOŚCI – dzięki temu TS nie marudzi
    subtitle: data.subtitle ?? "",
    description: data.description ?? "",
    features: data.features ?? [],  // <--
    details: data.details ?? { duration: "", groupSize: "", location: "", level: "", certificate: false },
    content: data.content ?? { sections: [] },
    cta: data.cta ?? { primaryButton: "Skontaktuj się z nami", primaryButtonLink: "/kontakt" },
    pricing: data.pricing,
    notes: data.notes,
    meta: data.meta,
});


// === 1 ===
const t1 = mk("Komunikacja międzykulturowa i różnice pragmatyczne w biznesie", {
    subtitle: "",
    description:
        "Szkolenie koncentruje się na tym, jak odmienne normy kulturowe wpływają na rozumienie wypowiedzi i intencji w międzynarodowym środowisku pracy. Uczestnicy nauczą się identyfikować i unikać błędów pragmatycznych, które często prowadzą do nieporozumień. Zajęcia mają charakter praktyczny: praca na scenkach sytuacyjnych (case studies), analiza materiałów wideo, burze mózgów i testy indywidualne.",
    details: {
        duration: "1 sesja (2 godziny zegarowe)",
        groupSize: "do 10 osób",
        location: "Online lub stacjonarnie",
        level: "",
        certificate: false,
    },
    pricing: [
        { label: "Polski", value: "2000,00 zł netto (grupa do 10 osób)" },
        { label: "Angielski", value: "2600,00 zł netto (grupa do 10 osób)" },
    ],
    notes: ["Dojazd trenera płatny przy formie stacjonarnej."],
    content: {
        sections: [
            { title: "Dla kogo?", type: "list", content: [
                    "Menedżerowie i pracownicy współpracujący w środowisku wielokulturowym",
                ]},
            { title: "Korzyści dla firmy", type: "list", content: [
                    "Lepsza skuteczność w kontaktach międzynarodowych",
                    "Mniej nieporozumień i konfliktów kulturowych",
                    "Większa pewność komunikacyjna pracowników",
                ]},
            { title: "Cennik", type: "list", content: [
                    "w jezyku polskim: 2000,00 zł netto (do 10 osób)",
                    "w jezyku angielskim: 2600,00 zł netto (do 10 osób)",
                    "Dojazd trenera: dodatkowo (stacjonarnie)",
                ]},
        ],
    },
    cta: { primaryButton: "Skontaktuj się z nami", primaryButtonLink: "/kontakt" },
});

// === 2 ===
const t2 = mk("Różnice kulturowe a zarządzanie", {
    subtitle: "",
    description:
        "Szkolenie wyjaśnia, jak odmienne systemy wartości i normy kulturowe wpływają na styl zarządzania, relacje w zespole i decyzje biznesowe. Uczestnicy poznają typologię kultur (m.in. wg Hofstede'a, Trompenaarsa), a także nauczą się rozpoznawać i odpowiednio reagować na różnice kulturowe w środowisku pracy. Część warsztatowa obejmuje analizę przypadków (case studies), burze mózgów i ćwiczenia zespołowe, co pozwala od razu przełożyć teorię na praktykę.",
    details: {
        duration: "Cykl 4 sesji po 2 godziny zegarowe (łącznie 8 godzin)",
        groupSize: "do 10 osób",
        location: "Online lub stacjonarnie",
        level: "",
        certificate: false,
    },
    pricing: [
        { label: "Polski", value: "2000,00 zł netto / sesja (8000,00 zł za cykl)" },
        { label: "Angielski", value: "2600,00 zł netto / sesja (10 400,00 zł za cykl)" },
    ],
    notes: ["Dojazd trenera płatny przy formie stacjonarnej."],
    content: {
        sections: [
            { title: "Dla kogo?", type: "list", content: [
                    "Menedżerowie, liderzy zespołów, działy HR i specjaliści odpowiedzialni za współpracę międzynarodową.",
                ]},
            { title: "Korzyści dla firmy", type: "list", content: [
                    "Skuteczniejsze zarządzanie zespołami wielokulturowymi",
                    "Lepsze przygotowanie do pracy w środowisku globalnym",
                    "Zwiększenie efektywności komunikacji międzywydziałowej i międzynarodowej",
                ]},
            { title: "Cennik", type: "list", content: [
                    "w jezyku polskim: 2000 zł netto (8000 zł cykl)",
                    "w jezyku angielskim: 2600 zł netto (10 400 zł cykl)",
                    "Dojazd trenera: dodatkowo (stacjonarnie)",
                ]},
        ],
    },
    cta: { primaryButton: "Skontaktuj się z nami", primaryButtonLink: "/kontakt" },
});

// === 3 ===
const t3 = mk("Komunikacja międzykulturowa - kontekst azjatycki", {
    description:
        "Szkolenie poświęcone jest zrozumieniu specyfiki komunikacyjnej rynków azjatyckich, w szczególności Chin. Uczestnicy poznają kluczowe różnice kulturowe dotyczące wartości, sposobów wyrażania intencji, zasad hierarchii oraz roli milczenia i niebezpośredniości w komunikacji. Poruszone zostaną także zagadnienia dyplomacji, etykiety i negocjacji w kontekście relacji Europa-Azja. Zajęcia prowadzone są w formie warsztatowej z wykorzystaniem scenariuszy rozmów, analizą sytuacji kryzysowych i materiałów wideo.",
    details: {
        duration: "1 sesja (2 godziny zegarowe)",
        groupSize: "do 10 osób",
        location: "Online lub stacjonarnie",
        level: "",
        certificate: false,
    },
    pricing: [
        { label: "Polski", value: "2500,00 zł netto (do 10 osób)" },
        { label: "Angielski", value: "3200,00 zł netto (do 10 osób)" },
        { label: "Angielsko-chiński", value: "4000,00 zł netto (do 10 osób)" },
    ],
    notes: ["Dojazd trenera płatny przy formie stacjonarnej."],
    content: {
        sections: [
            { title: "Dla kogo?", type: "list", content: [
                    "Pracownicy średniego i wyższego szczebla, którzy utrzymują relacje z partnerami z Azji lub planują ekspansję firmy na te rynki.",
                ]},
            { title: "Korzyści dla firmy", type: "list", content: [
                    "Lepsze zrozumienie kulturowego kontekstu działań partnerów azjatyckich.",
                    "Dostosowanie języka i zachowań do oczekiwań",
                    "Większa skuteczność w komunikacji i negocjacjach z Azjatami.",
                ]},
            { title: "Cennik", type: "list", content: [
                    "w jezyku polskim: 2500 zł netto",
                    "w jezyku angielskim: 3200 zł netto",
                    "w jezyku angielsko-chińskim: 4000 zł netto",
                    "Dojazd trenera: dodatkowo (stacjonarnie)",
                ]},
        ],
    },
    cta: { primaryButton: "Skontaktuj się z nami", primaryButtonLink: "/kontakt" },
});

// === 4 ===
const t4 = mk("Negocjacje biznesowe - kontekst azjatycki", {
    description: "Szkolenie przygotowuje do prowadzenia negocjacji z partnerami z Azji, szczególnie z Chin. Uczestnicy poznają kluczowe różnice kulturowe, które wpływają na sposób argumentacji, przebieg rozmów i podejmowanie decyzji. Program obejmuje elementy komunikacji werbalnej i niewerbalnej, dyplomacji, a także ćwiczenia z zakresu przygotowania i prowadzenia spotkania biznesowego. Integralną częścią szkolenia jest mini kurs podstawowych zwrotów w języku chińskim, wspierających budowanie relacji.",
    details: {
        duration: "1 sesja (2 godziny zegarowe)",
        groupSize: "do 10 osób",
        location: "Online lub stacjonarnie",
        level: "",
        certificate: false,
    },
    pricing: [
        { label: "Polski", value: "2500,00 zł netto (do 10 osób)" },
        { label: "Angielski", value: "3200,00 zł netto (do 10 osób)" },
        { label: "Angielsko-chiński", value: "4000,00 zł netto (do 10 osób)" },
    ],
    notes: ["Dojazd trenera płatny przy formie stacjonarnej."],
    content: {
        sections: [
            { title: "Dla kogo?", type: "list", content: [
                    "Osoby prowadzące negocjacje lub kontakty handlowe z partnerami azjatyckimi, działy eksportu, zakupy, zarząd.\n",
                ]},
            { title: "Korzyści dla firmy", type: "list", content: [
                    "Skuteczniejsze negocjacje z partnerami z Azji",
                    "Zwiększenie szans na pomyślne zamknięcie transakcji",
                    "Umiejętność budowania długofalowych relacji z kontrahentami azjatyckimi",
                    "Wzmocnienie pozycji negocjacyjnej poprzez zrozumienie kontekstu kulturowego"
                ]},
            { title: "Cennik", type: "list", content: [
                    "w jezyku polskim: 2500 zł netto",
                    "w jezyku angielskim: 3200 zł netto",
                    "w jezyku angielskim-ZH: 4000 zł netto",
                    "Dojazd trenera: dodatkowo (stacjonarnie)",
                ]},
        ],
    },
    cta: { primaryButton: "Skontaktuj się z nami", primaryButtonLink: "/kontakt" },
});

// === 5 ===
const t5 = mk("Komunikacja z chińskimi podmiotami - biznesowy kurs językowy", {
    description:
        "Szkolenie ma na celu intensywny kurs języka chińskiego z elementami języka biznesowego na poziomie podstawowym oraz (w zależności od poziomu grupy) na wyższych poziomach. Podczas trwania kursu, poza licznymi biznesowymi scenkami rodzajowymi służącymi do nawiązania podstawowej komunikacji w języku chińskim, uczestnicy nauczą się właściwie zwracać do chińskich podmiotów biznesowych oraz pisać maile i właściwie je adresować. Ponadto omówione zostaną również kwestie właściwego doboru słownictwa podczas nazywania produktów wprowadzanych na rynek azjatycki oraz panujących tam norm kulturowych, niezbędnych do zgłębienia przed rozpoczęciem ekspansji firmy na rynek azjatycki. Szkolenie ma charakter interaktywny i warsztatowy, z elementami mini wykładu.",
    details: {
        duration: "1 godzina zegarowa (możliwość kursu cyklicznego)",
        groupSize: "do 6 osób",
        location: "Online lub stacjonarnie",
        level: "",
        certificate: false,
    },
    pricing: [
        { label: "Angielsko-chiński", value: "300,00 zł netto / godzina (do 6 osób)" },
    ],
    notes: ["Dojazd trenera płatny przy formie stacjonarnej."],
    content: {
        sections: [
            { title: "Dla kogo?", type: "list", content: [
                    "Działy eksportu, zespoły handlowe, osoby odpowiedzialne za kontakty z Chinami lub przygotowujące się do wejścia na ten rynek.",
                ]},
            { title: "Korzyści dla firmy", type: "list", content: [
                    "Umiejętność rozpoczęcia komunikacji z chińskimi partnerami w ich języku",
                    "Lepsze zrozumienie kulturowego kontekstu językowego",
                    "Profesjonalna obsługa klientów i kontrahentów z Chin",
                ]},
            { title: "Cennik", type: "list", content: [
                    "300 zł netto za godzinę (do 6 osób)",
                    "Dojazd trenera: dodatkowo (stacjonarnie)",
                ]},
        ],
    },
    cta: { primaryButton: "Skontaktuj się z nami", primaryButtonLink: "/kontakt" },
});

// === 6 ===
const t6 = mk("Komunikacja biznesowa z elementami savoir vivre’u", {
    description:
        "Skuteczna komunikacja biznesowa to nie tylko precyzyjne formułowanie wypowiedzi, ale także umiejętność dostosowania formy i tonu do sytuacji, odbiorcy i kontekstu kulturowego. Szkolenie łączy zasady etykiety językowej i komunikacyjnej z praktycznymi ćwiczeniami. Uczestnicy poznają normy zachowań w kontaktach biznesowych, zasady korespondencji, autoprezentacji, a także błędy, których należy unikać. W ramach zajęć analizowane są przykłady rzeczywistych sytuacji - w tym także z rynków międzynarodowych.",
    details: {
        duration: "1 sesja (2 godziny zegarowe)",
        groupSize: "do 10 osób",
        location: "Online lub stacjonarnie",
        level: "",
        certificate: false,
    },
    pricing: [
        { label: "Polski", value: "2500,00 zł netto (do 10 osób)" },
        { label: "Angielski", value: "3200,00 zł netto (do 10 osób)" },
    ],
    notes: ["Dojazd trenera płatny przy formie stacjonarnej."],
    content: {
        sections: [
            { title: "Dla kogo?", type: "list", content: [
                    "Działy sprzedaży, PR, obsługi klienta, administracji i wszystkie osoby reprezentujące firmę w kontaktach wewnętrznych i zewnętrznych.",
                ]},
            { title: "Korzyści dla firmy", type: "list", content: [
                    "Lepsza jakość i skuteczność komunikacji pisemnej i ustnej",
                    "Wzrost profesjonalizmu w kontaktach z klientami i partnerami",
                    "Umiejętność dostosowania stylu do różnych odbiorców i sytuacji",
                ]},
            { title: "Cennik", type: "list", content: [
                    "w jezyku polskim: 2500 zł netto",
                    "w jezyku angielskim: 3200 zł netto",
                    "Dojazd trenera: dodatkowo (stacjonarnie)",
                ]},
        ],
    },
    cta: { primaryButton: "Skontaktuj się z nami", primaryButtonLink: "/kontakt" },
});

// === 7 ===
const t7 = mk("Komunikacja managerska", {
    description:
        "Szkolenie koncentruje się na rozwijaniu kluczowych kompetencji komunikacyjnych osób zarządzających zespołami. Uczestnicy uczą się, jak efektywnie przekazywać informacje, udzielać konstruktywnej informacji zwrotnej, prowadzić rozmowy oceniające oraz jak komunikować się w sytuacjach trudnych i konfliktowych. Część warsztatowa obejmuje symulacje rozmów, analizę studiów przypadków oraz ćwiczenia z zakresu komunikacji niewerbalnej i aktywnego słuchania.",
    details: {
        duration: "1 sesja (2 godziny zegarowe)",
        groupSize: "do 10 osób",
        location: "Online lub stacjonarnie",
        level: "",
        certificate: false,
    },
    pricing: [
        { label: "Polski", value: "2000,00 zł netto (do 10 osób)" },
        { label: "Angielski", value: "2600,00 zł netto (do 10 osób)" },
    ],
    notes: ["Dojazd trenera płatny przy formie stacjonarnej."],
    content: {
        sections: [
            { title: "Dla kogo?", type: "list", content: [
                    "Kadra zarządzająca na wszystkich szczeblach, liderzy projektów, team leaderzy.",
                ]},
            { title: "Korzyści dla firmy", type: "list", content: [
                    "Poprawa efektywności komunikacji w zespole",
                    "Lepsze zarządzanie relacjami i sytuacjami konfliktowymi",
                    "Większe zaangażowanie i motywacja pracowników dzięki lepszej informacji zwrotnej",
                ]},
            { title: "Cennik", type: "list", content: [
                    "w jezyku polskim: 2000 zł netto",
                    "w jezyku angielskim: 2600 zł netto",
                    "Dojazd trenera: dodatkowo (stacjonarnie)",
                ]},
        ],
    },
    cta: { primaryButton: "Skontaktuj się z nami", primaryButtonLink: "/kontakt" },
});

// === 8 ===
const t8 = mk("Komunikacja interpersonalna i jej wpływ na funkcjonowanie firmy", {
    description:
        "Szkolenie pomaga uczestnikom zrozumieć, jak jakość codziennej komunikacji wpływa na atmosferę, efektywność i współpracę w zespole. Uczestnicy uczą się identyfikować bariery komunikacyjne, unikać błędów interpretacyjnych, rozwijać umiejętność aktywnego słuchania oraz dostosowywać styl komunikacji do różnych osobowości. Program zawiera praktyczne ćwiczenia, analizę realnych sytuacji oraz testy samooceny stylów komunikacyjnych.",
    details: {
        duration: "1 sesja (2 godziny zegarowe)",
        groupSize: "do 10 osób",
        location: "Online lub stacjonarnie",
        level: "",
        certificate: false,
    },
    pricing: [
        { label: "Polski", value: "2000,00 zł netto (do 10 osób)" },
        { label: "Angielski", value: "2600,00 zł netto (do 10 osób)" },
    ],
    notes: ["Dojazd trenera płatny przy formie stacjonarnej."],
    content: {
        sections: [
            { title: "Dla kogo?", type: "list", content: [
                    "Pracownicy wszystkich działów i szczebli, w szczególności osoby pracujące zespołowo lub w obsłudze klienta.\n",
                ]},
            { title: "Korzyści dla firmy", type: "list", content: [
                    "Lepsza współpraca w zespołach i między działami",
                    "Zmniejszenie liczby nieporozumień i konfliktów",
                    "Wzrost zaangażowania i komfortu pracy w zespole",
                ]},
            { title: "Cennik", type: "list", content: [
                    "w jezyku polskim: 2000 zł netto",
                    "w jezyku angielskim: 2600 zł netto",
                    "Dojazd trenera: dodatkowo (stacjonarnie)",
                ]},
        ],
    },
    cta: { primaryButton: "Skontaktuj się z nami", primaryButtonLink: "/kontakt" },
});

// === 9 ===
const t9 = mk("Asertywność w komunikacji", {
    description:
        "Szkolenie skupia się na rozwijaniu umiejętności wyrażania własnych opinii, potrzeb i granic w sposób stanowczy, ale szanujący innych. Uczestnicy identyfikują własny styl komunikacji, uczą się rozróżniać zachowania bierne, agresywne i asertywne oraz ćwiczą reagowanie w sytuacjach trudnych: odmowa, przyjmowanie krytyki, przekazywanie informacji zwrotnej. Program zawiera praktyczne scenki, testy asertywności i ćwiczenia indywidualne.",
    details: {
        duration: "2 sesje po 2 godziny (łącznie 4 godziny zegarowe)",
        groupSize: "do 10 osób",
        location: "Online lub stacjonarnie",
        level: "",
        certificate: false,
    },
    pricing: [
        { label: "Polski", value: "3500,00 zł netto (do 10 osób)" },
        { label: "Angielski", value: "4500,00 zł netto (do 10 osób)" },
    ],
    notes: ["Dojazd trenera płatny przy formie stacjonarnej."],
    content: {
        sections: [
            { title: "Dla kogo?", type: "list", content: [
                    "Pracownicy wszystkich szczebli, szczególnie osoby odpowiedzialne za kontakty z klientami, zarządzanie zespołem lub obsługę wewnętrzną.",
                ]},
            { title: "Korzyści dla firmy", type: "list", content: [
                    "Większa skuteczność w komunikowaniu oczekiwań i granic",
                    "edukcja stresu związanego z komunikacją trudnych treści",
                    "Poprawa relacji w zespole i w kontaktach z klientami",
                ]},
            { title: "Cennik", type: "list", content: [
                    "w jezyku polskim: 3500 zł netto",
                    "w jezyku angielskim: 4500 zł netto",
                    "Dojazd trenera: dodatkowo (stacjonarnie)",
                ]},
        ],
    },
    cta: { primaryButton: "Skontaktuj się z nami", primaryButtonLink: "/kontakt" },
});

// === 10 ===
const t10 = mk("Lęk i zahamowanie w komunikacji w języku obcym", {
    description:
        "Szkolenie adresowane jest do osób, które odczuwają stres, niepewność lub blokadę podczas posługiwania się językiem obcym – szczególnie w sytuacjach zawodowych. Uczestnicy identyfikują źródła swoich obaw, poznają psychologiczne mechanizmy lęku językowego oraz uczą się technik radzenia sobie z nim. Zajęcia zawierają elementy treningu komunikacyjnego, ćwiczenia oswajające oraz strategie zwiększające pewność siebie w interakcjach językowych.",
    details: {
        duration: "1 sesja (2 godziny zegarowe)",
        groupSize: "do 10 osób",
        location: "Online lub stacjonarnie",
        level: "",
        certificate: false,
    },
    pricing: [
        { label: "Polski", value: "2000,00 zł netto (do 10 osób)" },
        { label: "Angielski", value: "2600,00 zł netto (do 10 osób)" },
    ],
    notes: ["Dojazd trenera płatny przy formie stacjonarnej."],
    content: {
        sections: [
            { title: "Dla kogo?", type: "list", content: [
                    "Dorośli pracownicy korzystający z języka obcego w pracy, szczególnie ci, którzy mają kontakt z klientami, prowadzą rozmowy lub prezentacje.",
                ]},
            { title: "Korzyści dla firmy", type: "list", content: [
                    "Redukcja barier w komunikacji językowej wśród pracowników",
                    "Zwiększenie efektywności w kontaktach międzynarodowych",
                    "Wzrost komfortu i pewności siebie wśród zespołu",
                ]},
            { title: "Cennik", type: "list", content: [
                    "w jezyku polskim: 2000 zł netto",
                    "w jezyku angielskim: 2600 zł netto",
                    "Dojazd trenera: dodatkowo (stacjonarnie)",
                ]},
        ],
    },
    cta: { primaryButton: "Skontaktuj się z nami", primaryButtonLink: "/kontakt" },
});

// === 11 ===
const t11 = mk("Problemy dorosłych w nauce języków - jak je rozpoznać i z nimi walczyć", {
    description:
        "Szkolenie pomaga dorosłym uczestnikom zidentyfikować czynniki utrudniające efektywną naukę języków obcych. Omawiane są psychologiczne, fizjologiczne i poznawcze bariery w przyswajaniu wiedzy językowej. Uczestnicy poznają swój styl uczenia się oraz otrzymują praktyczne narzędzia i strategie zwiększające skuteczność nauki - niezależnie od wieku czy wcześniejszych doświadczeń.",
    details: {
        duration: "1 sesja (2 godziny zegarowe)",
        groupSize: "do 10 osób",
        location: "Online lub stacjonarnie",
        level: "",
        certificate: false,
    },
    pricing: [
        { label: "Cena (w jezyku polskim/w jezyku angielskim)", value: "2000,00 zł netto (do 10 osób)" },
    ],
    notes: ["Dojazd trenera płatny przy formie stacjonarnej."],
    content: {
        sections: [
            { title: "Dla kogo?", type: "list", content: [
                    "Osoby dorosłe uczące się języków w ramach pracy lub dla własnego rozwoju, a także działy HR i trenerzy odpowiedzialni za rozwój kompetencji językowych w firmie.",
                ]},
            { title: "Korzyści dla firmy", type: "list", content: [
                    "Skuteczniejsze wykorzystanie szkoleń językowych",
                    "Wzrost motywacji pracowników do nauki języków",
                    "Możliwość dopasowania metod nauczania do indywidualnych potrzeb",
                ]},
            { title: "Cennik", type: "list", content: [
                    "2000 zł netto (do 10 osób)",
                    "Dojazd trenera: dodatkowo (stacjonarnie)",
                ]},
        ],
    },
    cta: { primaryButton: "Skontaktuj się z nami", primaryButtonLink: "/kontakt" },
});

// === 12 ===
const t12 = mk("Webinary - szybka forma rozwoju kompetencji", {
    description:
        "Każde ze szkoleń dostępnych w naszej ofercie może zostać zrealizowane w formie krótkiego, intensywnego webinaru trwającego 1,5 godziny. To doskonałe rozwiązanie dla firm, które chcą szybko przekazać pracownikom kluczową wiedzę lub zainicjować temat przed pełnym szkoleniem.",
    details: {
        duration: "ok. 1,5 godziny zegarowe (indywidualnie)",
        groupSize: "—",
        location: "Online (Zoom/Teams/Google Classroom)",
        level: "",
        certificate: false,
    },
    pricing: [
        { label: "Polski", value: "2000,00 zł netto / webinar" },
        { label: "Angielski", value: "3000,00 zł netto / webinar" },
        { label: "Chiński", value: "4000,00 zł netto / webinar" },
    ],
    content: {
        sections: [
            { title: "Dla kogo?", type: "list", content: [
                    "Dla zespołów potrzebujących szybkiego przeszkolenia, inspiracji do działania lub przypomnienia kluczowych zasad komunikacji.",
                ]},
            { title: "Korzyści dla firmy", type: "list", content: [
                    "Elastyczna i szybka forma przekazania wiedzy",
                    "Możliwość nagrania i późniejszego wykorzystania w firmie",
                    "Idealne jako wprowadzenie do pełnych szkoleń lub ich uzupełnienie",
                ]},
            { title: "Cennik (za webinar)", type: "list", content: [
                    "w jezyku polskim: 2000 zł netto",
                    "w jezyku angielskim: 3000 zł netto",
                    "w języuku chińskim: 4000 zł netto",
                ]},
        ],
    },
    cta: { primaryButton: "Skontaktuj się z nami", primaryButtonLink: "/kontakt" },
});

export const TRAININGS: TrainingRecord[] = [
    t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12
];

export const getTrainingBySlug = (slug: string) =>
    TRAININGS.find(t => t.slug === slug);

export const getAllTrainingSlugs = () => TRAININGS.map(t => t.slug);
