import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/navbar/Navbar";

export const metadata: Metadata = {
    title: "Polityka ochrony danych osobowych — Anglokom",
    description:
        "Polityka ochrony danych osobowych serwisu anglokom.pl: informacje o administratorze, przetwarzaniu danych, prawach użytkownika i środkach bezpieczeństwa.",
    robots: { index: true, follow: true },
    alternates: { canonical: "https://anglokom.pl/polityka-prywatnosci" },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">
                    Polityka ochrony danych osobowych
                </h1>

                <div className="text-sm text-gray-500 mb-10 space-y-1">
                    <p><strong>serwisu Anglokom.pl</strong></p>
                    <p>wersja 2.0</p>
                    <p>Dokument obowiązuje od 19 września 2025 r.</p>
                </div>

                <div className="text-sm text-gray-600 mb-10 p-4 bg-gray-50 rounded-lg">
                    <p>
                        Politykę opracowano na podstawie ogólnego rozporządzenia parlamentu europejskiego i Rady (UE) 2016/679 w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia Dyrektywy 95/46 z dnia 27 kwietnia 2016 r. (Dz. Urz. UE L 119 z 04.05.2016).
                    </p>
                </div>

                <section className="space-y-8 text-gray-800 leading-relaxed">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Administrator danych osobowych</h2>
                        <div className="space-y-4">
                            <p>
                                1. Niniejsza Polityka ochrony danych osobowych (dalej Polityka) określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Klientów w związku z korzystaniem przez nich z usług zakupu towarów poprzez Serwis.
                            </p>
                            <p>
                                2. Administratorem danych osobowych jest P.H.U. ANGLOKOM IWONA DRONIA; NIP: 634-199-42-23, z siedzibą: ul. Księcia Józefa Poniatowskiego 28/4, 40-055 Katowice.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p>
                                    <strong>Kontakt w sprawach danych:</strong>{" "}
                                    <a href="mailto:idronia@anglokom.pl" className="text-cyan-700 underline">
                                        idronia@anglokom.pl
                                    </a>
                                    , tel.{" "}
                                    <a href="tel:+48600238340" className="text-cyan-700 underline">
                                        +48 600 238 340
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Zakres i źródła danych</h2>
                        <div className="space-y-4">
                            <p>1. Przetwarzamy dane, które:</p>
                            <div className="ml-6 space-y-3">
                                <p>
                                    1) otrzymujemy od Państwa (np. w formularzu, e-mailu, telefonicznie): imię i nazwisko, e-mail, telefon, firma/stanowisko (opcjonalnie), zapytanie/treść wiadomości;
                                </p>
                                <p>
                                    2) są niezbędne do zawarcia i realizacji umowy: dane identyfikacyjne i kontaktowe, adres rozliczeniowy, NIP (dla firm), szczegóły zamówienia/usługi, dane do płatności (np. numer rachunku na fakturze);
                                </p>
                                <p>
                                    3) pochodzą od pracodawcy Zleceniodawcy (gdy szkolenie jest organizowane przez firmę): imię i nazwisko uczestnika, dane służbowe, poziom językowy/ocena z audytu - wyłącznie w zakresie koniecznym do organizacji zajęć;
                                </p>
                                <p>
                                    4) powstają w trakcie korzystania ze strony (pliki cookies - szczegóły w sekcji „Cookies");
                                </p>
                                <p>
                                    5) przy zajęciach on-line: wizerunek i głos (transmisja wideo/audio), adres e-mail/logowanie do platformy, czas trwania połączenia.
                                </p>
                            </div>
                            <p>
                                2. Nie wymagamy numeru PESEL ani innych szczególnych kategorii danych, chyba że wyjątkowo wynika to z przepisu prawa lub specyfiki zlecenia - wtedy poinformujemy o tym oddzielnie.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Cele i podstawy prawne</h2>
                        <div className="space-y-4">
                            <p>1. Przetwarzamy dane, ponieważ jest to:</p>
                            <div className="ml-6 space-y-3">
                                <p>
                                    1) niezbędne do zawarcia i realizacji umowy (art. 6 ust. 1 lit. b RODO) - obsługa zapytania, przygotowanie oferty, realizacja szkolenia/audytu/tłumaczenia, rozliczenia;
                                </p>
                                <p>
                                    2) wymagane przepisami (art. 6 ust. 1 lit. c RODO) - rachunkowość i podatki;
                                </p>
                                <p>
                                    3) nasz prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO) - bieżąca korespondencja, ochrona przed roszczeniami, wewnętrzne raportowanie, marketing bezpośredni własnych usług (z poszanowaniem przepisów o komunikacji elektronicznej);
                                </p>
                                <p>
                                    4) na podstawie zgody (art. 6 ust. 1 lit. a RODO) - np. wysyłka informacji handlowych e-mailem/SMS lub telemarketing, jeśli wyraźnie wyrazili Państwo zgodę. Zgodę można odwołać w każdym czasie.
                                </p>
                            </div>
                            <p>
                                2. Informacje handlowe e-mail/SMS oraz połączenia marketingowe realizujemy wyłącznie po uzyskaniu odrębnych zgód zgodnie z art. 10 ustawy o świadczeniu usług drogą elektroniczną oraz art. 172 Prawa telekomunikacyjnego.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Zajęcia on-line (Teams/Zoom/Meet itp.)</h2>
                        <p>
                            Jeżeli szkolenie odbywa się zdalnie, przetwarzamy dane potrzebne do logowania i prowadzenia połączenia (wizerunek/głos, nazwa i e-mail uczestnika, czas sesji). Nie nagrywamy zajęć, chyba że wcześniej wyrażą Państwo odrębną, dobrowolną zgodę lub nagranie będzie uzasadnione umową - wtedy poinformujemy o szczegółach.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Odbiorcy danych</h2>
                        <div className="space-y-4">
                            <p>
                                1. Dane możemy powierzać zaufanym podmiotom wspierającym nas w działalności: dostawcy hostingu i poczty, dostawcy systemów IT i komunikatorów on-line, firmy księgowe i doradcy podatkowi, kancelarie prawne, lektorzy i tłumacze współpracujący (na podstawie umów powierzenia i zobowiązań do poufności). Dane mogą być ujawnione organom uprawnionym na podstawie prawa (np. sąd, prokuratura).
                            </p>
                            <p>
                                2. Co do zasady dążymy do przetwarzania danych w EOG. Korzystamy jednak z dostawców chmurowych i narzędzi komunikacyjnych/analitycznych, u których może dojść do przetwarzania lub dostępu do danych spoza EOG (np. USA). W takich przypadkach transfer odbywa się:
                            </p>
                            <div className="ml-6 space-y-2">
                                <p>
                                    1. na podstawie decyzji stwierdzającej odpowiedni poziom ochrony (np. EU-U.S. Data Privacy Framework, jeśli dostawca posiada ważną certyfikację); lub
                                </p>
                                <p>
                                    2. na podstawie standardowych klauzul umownych (SCC) Komisji Europejskiej, z dodatkowymi środkami (szyfrowanie, minimalizacja, kontrola dostępu).
                                </p>
                            </div>
                            <p>
                                3. Stosujemy konfiguracje ograniczające transfery (np. region danych „Europa", europejskie centra danych) w dostępnych narzędziach.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Marketing e-mail (newsletter/oferty)</h2>
                        <p>
                            Za Państwa zgodą możemy przesyłać e-mailem informacje o naszych szkoleniach i usługach. Zgodę można odwołać w każdym czasie (np. poprzez link rezygnacji lub wiadomość na{" "}
                            <a href="mailto:idronia@anglokom.pl" className="text-cyan-700 underline">
                                idronia@anglokom.pl
                            </a>
                            ).
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Okres przechowywania</h2>
                        <ul className="space-y-2 list-disc ml-6">
                            <li>korespondencja i dane ofertowe - do 12 miesięcy od zakończenia korespondencji, chyba że dojdzie do zawarcia umowy,</li>
                            <li>dane umowne i rozliczeniowe - przez 5 lat licząc od końca roku podatkowego,</li>
                            <li>dane potrzebne do dochodzenia lub obrony roszczeń - do upływu terminów przedawnienia (co do zasady 6 lat, a dla roszczeń związanych z działalnością gospodarczą - 3 lata),</li>
                            <li>dane marketingowe na podstawie zgody - do wycofania zgody lub zgłoszenia sprzeciwu,</li>
                            <li>cookies - zgodnie z czasem życia określonym dla danego pliku (szczegóły niżej) lub do czasu usunięcia przez użytkownika.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Prawa osób, których dane dotyczą</h2>
                        <div className="space-y-4">
                            <p>
                                1. Mają Państwo prawo: dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych (w zakresie technicznie możliwym), wniesienia sprzeciwu wobec przetwarzania opartego na naszym uzasadnionym interesie (w tym sprzeciwu wobec marketingu bezpośredniego).
                            </p>
                            <p>
                                2. Zgodę można odwołać w każdym momencie (odwołanie nie wpływa na zgodność z prawem wcześniejszego przetwarzania).
                            </p>
                            <p>
                                3. Z praw mogą Państwo skorzystać, pisząc na:{" "}
                                <a href="mailto:idronia@anglokom.pl" className="text-cyan-700 underline">
                                    idronia@anglokom.pl
                                </a>
                                .
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Cookies i podobne technologie</h2>
                        <div className="space-y-4">
                            <p>
                                1. Nasza strona korzysta z plików cookies i podobnych technologii, w tym z Google Analytics 4 do statystyk.
                            </p>
                            <p>2. Rodzaje cookies:</p>
                            <div className="ml-6 space-y-2">
                                <p>1. niezbędne - zapewniają prawidłowe działanie serwisu;</p>
                                <p>2. analityczne/statystyczne - pomagają zrozumieć, jak korzystają Państwo z serwisu; gromadzone dane mają charakter zagregowany/anonimizowany;</p>
                                <p>3. funkcjonalne - zapamiętują wybrane ustawienia.</p>
                            </div>
                            <p>
                                3. Podczas pierwszej wizycie wyświetlamy baner cookies. Analityczne i funkcjonalne cookies uruchamiamy dopiero po wyrażeniu zgody.
                            </p>
                            <p>
                                4. Zgody można zmienić lub wycofać w ustawieniach przeglądarki lub w panelu cookies, a także usuwać cookies ręcznie.
                            </p>
                            <p>
                                5. Cookies można zablokować lub usunąć w ustawieniach przeglądarki; wtedy niektóre funkcje serwisu mogą nie działać poprawnie.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Dzieci i młodzież</h2>
                        <p>
                            Nasze usługi obejmują kursy dla osób niepełnoletnich. Jeżeli oferujemy usługę świadczoną drogą elektroniczną wymagającą zgody (np. marketing e-mail), a użytkownik ma poniżej 16 lat, prosimy o zgodę rodzica/opiekuna (art. 8 RODO).
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Bezpieczeństwo</h2>
                        <p>
                            Wdrożyliśmy środki techniczne i organizacyjne odpowiednie do ryzyka, w tym: kontrolę dostępu, szyfrowanie transmisji (HTTPS), kopie zapasowe, umowy powierzenia z dostawcami i szkolenia personelu. Zobowiązujemy się do bieżącego przeglądu i doskonalenia zabezpieczeń.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Skąd mamy dane</h2>
                        <p>
                            Zbieramy je bezpośrednio od Państwa lub - przy szkoleniach firmowych - otrzymujemy od Państwa pracodawcy (w zakresie koniecznym do organizacji zajęć). Dane z publicznych rejestrów (np. NIP firmy) możemy weryfikować w celu prawidłowego fakturowania.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Zautomatyzowane decyzje</h2>
                        <p>
                            Nie podejmujemy wobec Państwa decyzji wywołujących skutki prawne wyłącznie w sposób zautomatyzowany i nie prowadzimy profilowania w rozumieniu RODO.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Linki zewnętrzne</h2>
                        <p>
                            Strona może zawierać odnośniki do witryn zewnętrznych. Nie odpowiadamy za ich treść ani polityki prywatności - zalecamy zapoznanie się z informacjami publikowanymi bezpośrednio na tych stronach.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Zmiany Polityki</h2>
                        <p>
                            Możemy aktualizować niniejszą Politykę, m.in. przy zmianie przepisów lub naszych procesów. O zmianach poinformujemy na tej stronie, podając nową datę aktualizacji.
                        </p>
                    </div>
                </section>

                <div className="mt-12">
                    <Link
                        href="/"
                        className="text-cyan-700 hover:text-cyan-800 underline font-medium"
                    >
                        ← Powrót na stronę główną
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}