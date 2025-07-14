import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
            <h1 className="text-6xl font-bold text-sky-700 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Strona nie została znaleziona
            </h2>
            <p className="text-gray-600 mb-6">
                Przepraszamy, ale strona, której szukasz, nie istnieje lub została przeniesiona.
            </p>
            <Link href="/">
                <button
                    className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                    Wróć na stronę główną
                </button>
            </Link>
        </div>
    );
}
