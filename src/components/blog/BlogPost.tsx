import Image from 'next/image'
import Link from 'next/link'
import { Post, getStrapiImageUrl, getStrapiImageFormat, getContentAsText, getContentAsHTML } from '@/../lib/strapi'

interface BlogPostProps {
    post: Post
    variant?: 'card' | 'full'
}

export default function BlogPost({ post, variant = 'card' }: BlogPostProps) {
    // Sprawdzenie czy post istnieje i ma wymagane pola
    if (!post || !post.id) {
        console.error('Invalid post data:', post)
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Błąd: Nieprawidłowe dane wpisu
            </div>
        )
    }

    // W Strapi v5 dane są płaskie, bez attributes
    const {
        title = 'Brak tytułu',
        slug = '',
        excerpt = '',
        content = [],
        featured_image = [],
        publishedAt,
        createdAt,
        categories = [],
        standing = 'draft'
    } = post

    // Użyj publishedAt lub createdAt jako fallback
    const postDate = publishedAt || createdAt || new Date().toISOString()

    // Obsługa featured_image jako array (Strapi v5)
    const imageUrl = getStrapiImageUrl(featured_image)
    const thumbnailUrl = getStrapiImageFormat(featured_image, 'medium')

    // Konwersja content z formatu Strapi na tekst/HTML
    const contentText = getContentAsText(content)
    const contentHTML = getContentAsHTML(content)

    // Sprawdź czy post jest opublikowany
    const isPublished = standing === 'published' || publishedAt

    if (variant === 'full') {
        return (
            <article className="max-w-4xl mx-auto">
                {!isPublished && (
                    <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6">
                        <strong>Szkic:</strong> Ten wpis nie został jeszcze opublikowany
                    </div>
                )}

                {/* Obrazek wyróżniający */}
                {imageUrl && (
                    <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Header artykułu */}
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <time dateTime={postDate}>
                            {new Date(postDate).toLocaleDateString('pl-PL', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>

                        {/* Status publikacji */}
                        <span className={`px-2 py-1 rounded-full text-xs ${
                            isPublished
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                        }`}>
                            {isPublished ? 'Opublikowany' : 'Szkic'}
                        </span>
                    </div>

                    {/* Excerpt */}
                    {excerpt && (
                        <div className="text-lg text-gray-600 italic border-l-4 border-blue-500 pl-4 mb-4">
                            {excerpt}
                        </div>
                    )}

                    {/* Kategorie */}
                    {categories && categories.length > 0 && (
                        <div className="flex gap-2 flex-wrap">
                            {categories.map((category) => (
                                <span
                                    key={category.id || category.documentId}
                                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {category.name || 'Kategoria'}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                {/* Treść artykułu */}
                <div className="prose prose-lg max-w-none text-gray-700">
                    {contentHTML ? (
                        <div dangerouslySetInnerHTML={{__html: contentHTML}}/>
                    ) : (
                        <div className="whitespace-pre-wrap">
                            {contentText || 'Brak treści'}
                        </div>
                    )}
                </div>

                {/* Footer artykułu */}
                <footer className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <div>
                            Utworzony: {new Date(createdAt).toLocaleDateString('pl-PL')}
                            {publishedAt && publishedAt !== createdAt && (
                                <span className="ml-4">
                                    Opublikowany: {new Date(publishedAt).toLocaleDateString('pl-PL')}
                                </span>
                            )}
                        </div>
                        <Link
                            href="/blog"
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            ← Powrót do bloga
                        </Link>
                    </div>
                </footer>
            </article>
        )
    }

    // Widok karty (variant = 'card')
    return (
        <article
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Status dla szkiców */}
            {!isPublished && (
                <div className="bg-yellow-100 px-4 py-2 text-xs text-yellow-700 font-medium">
                    SZKIC
                </div>
            )}

            {/* Obrazek */}
            {imageUrl && (
                <div className="relative w-full h-48">
                    <Image
                        src={thumbnailUrl || imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <div className="p-6">
                {/* Tytuł */}
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {slug ? (
                        <Link href={`/blog/${slug}`} className="hover:text-blue-600 transition-colors">
                            {title}
                        </Link>
                    ) : (
                        title
                    )}
                </h2>

                {/* Excerpt */}
                {excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {excerpt}
                    </p>
                )}

                {/* Kategorie w karcie */}
                {categories && categories.length > 0 && (
                    <div className="flex gap-2 flex-wrap mb-4">
                        {categories.slice(0, 3).map((category) => (
                            <span
                                key={category.id || category.documentId}
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                            >
                                {category.name || 'Kategoria'}
                            </span>
                        ))}
                        {categories.length > 3 && (
                            <span className="text-xs text-gray-500">
                                +{categories.length - 3} więcej
                            </span>
                        )}
                    </div>
                )}

                {/* Footer karty */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                        <time dateTime={postDate}>
                            {new Date(postDate).toLocaleDateString('pl-PL')}
                        </time>

                        <span className={`px-2 py-1 rounded text-xs ${
                            isPublished
                                ? 'bg-green-100 text-green-600'
                                : 'bg-yellow-100 text-yellow-600'
                        }`}>
                            {isPublished ? 'Opublikowany' : 'Szkic'}
                        </span>
                    </div>

                    {slug && (
                        <Link
                            href={`/blog/${slug}`}
                            className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                        >
                            Czytaj więcej →
                        </Link>
                    )}
                </div>
            </div>
        </article>
    )
}