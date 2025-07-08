import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Anglokom</h3>
                        <p className="text-gray-400 text-justify">
                            ANGLOKOM powstał w 2000 roku jako firma zajmująca się organizacją
                            i prowadzeniem szkoleń językowych, biznesowych oraz tłumaczeń.
                            Z biegiem czasu nasza oferta rozwinęła się i opiewa szeroką gamę
                            usług skierowanych na komunikację biznesową i językową.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Usługi</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Szkolenia językowe</a></li>
                            <li><a href="#" className="hover:text-white">Korekty językowe</a></li>
                            <li><a href="#" className="hover:text-white">Mobilne kursy językowe</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Firma</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="/about" className="hover:text-white">O nas</a>
                            </li>
                            <li><Link href="/contact" className="hover:text-white">Kontakt</Link></li>
                            <li><a href="#" className="hover:text-white">Portfolio</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Kontakt</h4>
                        <h5 className="font-normal mb-1">Szkolenia, audyty:</h5>
                        <div className="text-gray-400 space-y-2 mb-2">
                            <p>Email: idronia@anglokom.pl</p>
                            <p>Tel: +48 600 238 340</p>
                        </div>
                        <h5 className="font-normal mb-1">Biuro tłumaczeń:</h5>
                        <div className="text-gray-400 space-y-2">
                            <p>Email: biuro@anglokom.pl</p>
                            <p>Tel: +48 606 622 736</p>
                            <p>Fax: 32 204 54 24</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2001-2025 Anglokom. Wszystkie prawa zastrzeżone.</p>
                </div>
            </div>
        </footer>
    )
}