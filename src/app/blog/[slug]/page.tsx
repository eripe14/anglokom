import {notFound} from 'next/navigation'
import {strapiApi} from '@/../lib/strapi'
import BlogPost from '@/components/blog/BlogPost'
import Link from 'next/link'
import {Metadata} from 'next'

// Generate metadata for SEO
export async function generateMetadata({
                                           params
                                       }: {
    params: { slug: string }
}): Promise<Metadata> {
    try {
        const post = await strapiApi.getPost(params.slug)

        if (!post) {
            return {
                title: 'Post nie znaleziony',
                description: 'Szukany wpis nie istnieje'
            }
        }

        return {
            title: post.title,
            description: post.excerpt || 'Wpis na blogu',
            openGraph: {
                title: post.title,
                description: post.excerpt || 'Wpis na blogu',
                type: 'article',
                publishedTime: post.publishedAt,
                modifiedTime: post.updatedAt,
                images: post.featured_image?.length > 0 ? [{
                    url: `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${post.featured_image[0].url}`,
                    width: post.featured_image[0].width,
                    height: post.featured_image[0].height,
                    alt: post.title
                }] : []
            },
            twitter: {
                card: 'summary_large_image',
                title: post.title,
                description: post.excerpt || 'Wpis na blogu'
            }
        }
    } catch (error) {
        console.error('Metadata generation error:', error)
        return {
            title: 'Błąd ładowania',
            description: 'Nie udało się załadować wpisu'
        }
    }
}

// Related posts component
async function RelatedPosts(
    {
        currentPost
    }: {
        currentPost: { id: number; categories: { id: number }[] }
    }) {
    try {
        const response = await strapiApi.getPosts()
        const {data: allPosts} = response

        // Filter related posts by categories
        const relatedPosts = allPosts
            .filter(post =>
                post.id !== currentPost.id &&
                (post.standing === 'published' || post.publishedAt) &&
                post.categories.some(cat =>
                    currentPost.categories.some(currentCat => currentCat.id === cat.id)
                )
            )
            .slice(0, 3)

        if (relatedPosts.length === 0) return null

        return (
            <div className="mt-16 pt-12 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Powiązane artykuły
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedPosts.map((post) => (
                        <BlogPost key={post.id} post={post} variant="card"/>
                    ))}
                </div>
            </div>
        )
    } catch (error) {
        console.error('Related posts error:', error)
        return null
    }
}

// Navigation component
function BlogNavigation() {
    return (
        <nav className="mb-8">
            <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
                Powrót do bloga
            </Link>
        </nav>
    )
}

// Main Blog Post Page Component
export default async function BlogPostPage({
                                               params
                                           }: {
    params: { slug: string }
}) {
    try {
        const post = await strapiApi.getPost(params.slug)

        // Check if post exists and is published
        if (!post) {
            notFound()
        }

        const isPublished = post.standing === 'published' || post.publishedAt

        // For production, only show published posts
        if (!isPublished && process.env.NODE_ENV === 'production') {
            notFound()
        }

        return (
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-8">
                    <BlogNavigation/>

                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="p-8">
                            <BlogPost post={post} variant="full"/>
                        </div>
                    </div>

                    {/* Related Posts */}
                    {post.categories.length > 0 && (
                        <RelatedPosts currentPost={post}/>
                    )}
                </div>
            </div>
        )
    } catch (error) {
        console.error('Blog post page error:', error)

        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        Błąd ładowania
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Nie udało się załadować wpisu. Sprawdź adres URL lub spróbuj ponownie później.
                    </p>
                    <div className="space-x-4">
                        <Link
                            href="/blog"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Powrót do bloga
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            Strona główna
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}