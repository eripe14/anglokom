import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/navbar/Navbar";

export const metadata: Metadata = {
    title: "Polityka prywatności — Anglokom",
    description:
        "Polityka prywatności serwisu anglokom.pl: informacje o danych, cookies, komentarzach, formularzu kontaktowym, prawach użytkownika i danych kontaktowych administratora.",
    robots: { index: true, follow: true },
    alternates: { canonical: "https://anglokom.pl/polityka-prywatnosci" },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">
                    Polityka prywatności
                </h1>

                <p className="text-sm text-gray-500 mb-10">
                    Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
                </p>

                <section className="space-y-6 text-gray-800 leading-relaxed">
                    <h2 className="text-2xl font-semibold">Kim jesteśmy</h2>
                    <p>
                        Adres naszej strony internetowej to: <strong>www.anglokom.pl</strong>.
                    </p>

                    <h2 className="text-2xl font-semibold mt-10">
                        Jakie dane osobiste zbieramy i dlaczego je zbieramy
                    </h2>

                    <h3 className="text-xl font-semibold">Komentarze</h3>
                    <p>
                        Kiedy odwiedzający witrynę zostawia komentarz, zbieramy dane widoczne
                        w formularzu komentowania, jak i adres IP odwiedzającego oraz podpis
                        jego przeglądarki jako pomoc przy wykrywaniu spamu.
                    </p>
                    <p>
                        Zanonimizowany ciąg znaków stworzony na podstawie twojego adresu email
                        (tak zwany hash) może zostać przesłany do usługi Gravatar w celu
                        sprawdzenia czy jej używasz. Polityka prywatności usługi Gravatar jest
                        dostępna tutaj:{" "}
                        <a
                            href="https://automattic.com/privacy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-700 underline"
                        >
                            https://automattic.com/privacy/
                        </a>
                        . Po zatwierdzeniu komentarza twój obrazek profilowy jest widoczny
                        publicznie w kontekście twojego komentarza.
                    </p>

                    <h3 className="text-xl font-semibold">Media</h3>
                    <p>
                        Jeśli jesteś zarejestrowanym użytkownikiem i wgrywasz na witrynę
                        obrazki, powinieneś unikać przesyłania obrazków z tagami EXIF
                        lokalizacji. Odwiedzający stronę mogą pobrać i odczytać pełne dane
                        lokalizacyjne z obrazków w witrynie.
                    </p>

                    <h3 className="text-xl font-semibold">Formularze kontaktowe</h3>
                    <p>
                        Na podstronie kontakt znajduje się formularz kontaktowy umożliwiający
                        wysłanie do nas wiadomości w postaci e-mail. Wysłanie formularza będzie
                        wymagało wyrażenia przez Panią/Pana zgody na wykorzystanie środków
                        komunikacji elektronicznej i telefonii dla ewentualnego sporządzenia
                        oferty.
                    </p>

                    <h3 className="text-xl font-semibold">Ciasteczka (Cookies)</h3>
                    <p>
                        Jeśli zostawisz na naszej witrynie komentarz, będziesz mógł wybrać
                        opcję zapisu twojej nazwy, adresu email i adresu strony internetowej w
                        ciasteczkach, dzięki którym podczas pisania kolejnych komentarzy
                        powyższe informacje będą już dogodnie uzupełnione. Te ciasteczka
                        wygasają po roku.
                    </p>
                    <p>
                        Jeśli masz konto i zalogujesz się na tej witrynie, utworzymy
                        tymczasowe ciasteczko na potrzeby sprawdzenia czy twoja przeglądarka
                        akceptuje ciasteczka. To ciasteczko nie zawiera żadnych danych
                        osobistych i zostanie wyrzucone kiedy zamkniesz przeglądarkę.
                    </p>
                    <p>
                        Podczas logowania tworzymy dodatkowo kilka ciasteczek potrzebnych do
                        zapisu twoich informacji logowania oraz wybranych opcji ekranu.
                        Ciasteczka logowania wygasają po dwóch dniach, a opcji ekranu po roku.
                        Jeśli zaznaczysz opcję „Pamiętaj mnie”, logowanie wygaśnie po dwóch
                        tygodniach. Jeśli wylogujesz się ze swojego konta, ciasteczka logowania
                        zostaną usunięte.
                    </p>
                    <p>
                        Jeśli zmodyfikujesz albo opublikujesz artykuł, w twojej przeglądarce
                        zostanie zapisane dodatkowe ciasteczko. To ciasteczko nie zawiera
                        żadnych danych osobistych, wskazując po prostu na identyfikator przed
                        chwilą edytowanego artykułu. Wygasa ono po 1 dniu.
                    </p>

                    <h3 className="text-xl font-semibold">
                        Osadzone treści z innych witryn
                    </h3>
                    <p>
                        Artykuły na tej witrynie mogą zawierać osadzone treści (np. filmy,
                        obrazki, artykuły itp.). Osadzone treści z innych witryn zachowują się
                        analogicznie do tego, jakby użytkownik odwiedził bezpośrednio
                        konkretną witrynę.
                    </p>
                    <p>
                        Witryny mogą zbierać informacje o tobie, używać ciasteczek, dołączać
                        dodatkowe, zewnętrzne systemy śledzenia i monitorować twoje interakcje
                        z osadzonym materiałem, włączając w to śledzenie twoich interakcji z
                        osadzonym materiałem jeśli posiadasz konto i jesteś zalogowany w
                        tamtej witrynie.
                    </p>

                    <h2 className="text-2xl font-semibold mt-10">
                        Z kim dzielimy się danymi
                    </h2>
                    <p>—</p>

                    <h2 className="text-2xl font-semibold mt-10">
                        Jak długo przechowujemy twoje dane
                    </h2>
                    <p>
                        Jeśli zostawisz komentarz, jego treść i metadane będą przechowywane
                        przez czas nieokreślony. Dzięki temu jesteśmy w stanie rozpoznawać i
                        zatwierdzać kolejne komentarze automatycznie, bez wysyłania ich do
                        każdorazowej moderacji.
                    </p>
                    <p>
                        Dla użytkowników którzy zarejestrowali się na naszej stronie
                        internetowej (jeśli tacy są), przechowujemy również informacje
                        osobiste wprowadzone w profilu. Każdy użytkownik może dokonać wglądu,
                        korekty albo skasować swoje informacje osobiste w dowolnej chwili (nie
                        licząc nazwy użytkownika, której nie można zmienić). Administratorzy
                        strony również mogą przeglądać i modyfikować te informacje.
                    </p>

                    <h2 className="text-2xl font-semibold mt-10">
                        Jakie masz prawa do swoich danych
                    </h2>
                    <p>
                        Jeśli masz konto użytkownika albo dodałeś komentarze w tej witrynie,
                        możesz zażądać dostarczenia pliku z wyeksportowanym kompletem twoich
                        danych osobistych będących w naszym posiadaniu, w tym całość tych
                        dostarczonych przez ciebie. Możesz również zażądać usunięcia przez nas
                        całości twoich danych osobistych w naszym posiadaniu. Nie dotyczy to
                        żadnych danych które jesteśmy zobligowani zachować ze względów
                        administracyjnych, prawnych albo bezpieczeństwa.
                    </p>

                    <h2 className="text-2xl font-semibold mt-10">
                        Gdzie przesyłamy dane
                    </h2>
                    <p>
                        Komentarze gości mogą być sprawdzane za pomocą automatycznej usługi
                        wykrywania spamu.
                    </p>

                    <h2 className="text-2xl font-semibold mt-10">Twoje dane kontaktowe</h2>
                    <p>
                        Kontakt z Administratorem jest możliwy na adres siedziby: Anglokom,
                        40-055 Katowice, ul. Poniatowskiego 28/4, na adres e-mail:{" "}
                        <a href="mailto:idronia@anglokom.pl" className="text-cyan-700 underline">
                            idronia@anglokom.pl
                        </a>
                        , bądź pod numerem telefonu{" "}
                        <a href="tel:+48322045424" className="text-cyan-700 underline">
                            32 204 54 24
                        </a>
                        .
                    </p>

                    <h2 className="text-2xl font-semibold mt-10">Informacje dodatkowe</h2>

                    <h3 className="text-xl font-semibold">Jak chronimy twoje dane?</h3>
                    <p>—</p>

                    <h3 className="text-xl font-semibold">
                        Jakie mamy obowiązujące procedury w przypadku naruszenia prywatności danych
                    </h3>
                    <p>—</p>

                    <h3 className="text-xl font-semibold">
                        Od jakich stron trzecich otrzymujemy dane
                    </h3>
                    <p>—</p>

                    <h3 className="text-xl font-semibold">
                        Jakie automatyczne podejmowanie decyzji i/lub tworzenie profili przeprowadzamy
                        z użyciem danych użytkownika
                    </h3>
                    <p>—</p>

                    <h3 className="text-xl font-semibold">
                        Branżowe wymogi regulacyjne dotyczące ujawniania informacji
                    </h3>
                    <p>—</p>
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
