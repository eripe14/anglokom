import {strapiApi} from '@/../lib/strapi'
import BlogPost from '@/components/blog/BlogPost'
import Link from "next/link"
import React, {Suspense} from 'react'
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";

// Loading component
function BlogSkeleton() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
                    <div className="w-full h-48 bg-gradient-to-r from-gray-200 to-gray-300"></div>
                    <div className="p-6">
                        <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-3"></div>
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded mb-2"></div>
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded mb-4 w-2/3"></div>
                        <div className="flex justify-between items-center">
                            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-20"></div>
                            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-24"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

// Stats component
function BlogStats({totalPosts, currentCount}: {totalPosts: number, currentCount: number}) {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-100">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 rounded-full p-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Artykuły</h3>
                        <p className="text-sm text-gray-600">Aktualnie wyświetlanych</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">{currentCount}</div>
                    <div className="text-sm text-gray-500">z {totalPosts} łącznie</div>
                </div>
            </div>
        </div>
    )
}

// Filter component
function BlogFilters({
                         currentCategory,
                         categories,
                         totalPosts
                     }: {
    currentCategory?: string
    categories: Array<{ id: number; name: string; slug: string }>
    totalPosts: number
}) {
    return (
        <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 lg:mb-0">
                    Kategorie
                </h3>
                <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                    📊 {totalPosts} artykułów dostępnych
                </div>
            </div>
            <div className="flex flex-wrap gap-3">
                <Link
                    href="/blog"
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                        !currentCategory
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm'
                    }`}
                >
                    🏠 Wszystkie
                </Link>
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/blog?category=${category.slug}`}
                        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                            currentCategory === category.slug
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm'
                        }`}
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

// Pagination component
function Pagination({
                        currentPage,
                        totalPages,
                        category,
                        pageSize,
                        view
                    }: {
    currentPage: number
    totalPages: number
    category?: string
    pageSize?: number
    view?: string
}) {
    if (totalPages <= 1) return null

    const getPageUrl = (page: number) => {
        const params = new URLSearchParams()
        if (page > 1) params.append('page', page.toString())
        if (category) params.append('category', category)
        if (pageSize && pageSize !== 9) params.append('pageSize', pageSize.toString())
        if (view && view !== 'grid') params.append('view', view)
        const queryString = params.toString()
        return `/blog${queryString ? `?${queryString}` : ''}`
    }

    const pages = []
    const showPages = 5
    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2))
    const endPage = Math.min(totalPages, startPage + showPages - 1)

    if (endPage - startPage + 1 < showPages) {
        startPage = Math.max(1, endPage - showPages + 1)
    }

    // Previous button
    if (currentPage > 1) {
        pages.push(
            <Link
                key="prev"
                href={getPageUrl(currentPage - 1)}
                className="px-4 py-3 rounded-xl bg-white text-gray-700 hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:border-gray-300 shadow-sm font-medium"
            >
                ← Poprzednia
            </Link>
        )
    }

    // First page
    if (startPage > 1) {
        pages.push(
            <Link
                key={1}
                href={getPageUrl(1)}
                className="px-4 py-3 rounded-xl bg-white text-gray-700 hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:border-gray-300 shadow-sm"
            >
                1
            </Link>
        )
        if (startPage > 2) {
            pages.push(
                <span key="dots1" className="px-3 py-3 text-gray-400">
                    ...
                </span>
            )
        }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
        pages.push(
            <Link
                key={i}
                href={getPageUrl(i)}
                className={`px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                    i === currentPage
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm'
                }`}
            >
                {i}
            </Link>
        )
    }

    // Last page
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            pages.push(
                <span key="dots2" className="px-3 py-3 text-gray-400">
                    ...
                </span>
            )
        }
        pages.push(
            <Link
                key={totalPages}
                href={getPageUrl(totalPages)}
                className="px-4 py-3 rounded-xl bg-white text-gray-700 hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:border-gray-300 shadow-sm"
            >
                {totalPages}
            </Link>
        )
    }

    // Next button
    if (currentPage < totalPages) {
        pages.push(
            <Link
                key="next"
                href={getPageUrl(currentPage + 1)}
                className="px-4 py-3 rounded-xl bg-white text-gray-700 hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:border-gray-300 shadow-sm font-medium"
            >
                Następna →
            </Link>
        )
    }

    return (
        <div className="flex justify-center items-center gap-3 mt-16">
            {pages}
        </div>
    )
}

// Helper functions - moved outside of component
const getViewChangeUrl = (searchParams: Record<string, string>, newView: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('view', newView)
    return `/blog?${params.toString()}`
}

const getPageSizeChangeUrl = (searchParams: Record<string, string>, newSize: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('pageSize', newSize.toString())
    params.delete('page') // Reset to first page
    return `/blog?${params.toString()}`
}

// Main Blog Page Component
export default async function BlogPage(
    {
        searchParams
    }: {
        searchParams: { page?: string; category?: string; pageSize?: string; view?: string }
    }) {
    const currentPage = parseInt(searchParams.page || '1')
    const category = searchParams.category
    const pageSize = parseInt(searchParams.pageSize || '9')
    const view = (searchParams.view as 'grid' | 'list') || 'grid'

    // Convert searchParams to Record<string, string> for helper functions
    const searchParamsRecord = Object.fromEntries(
        Object.entries(searchParams).map(([key, value]) => [key, value || ''])
    )

    try {
        // Fetch posts
        const response = await strapiApi.getPosts()
        const {data: allPosts} = response

        // Filter posts by category if specified
        let filteredPosts = allPosts.filter(post => post.standing === 'published' || post.publishedAt)

        if (category) {
            filteredPosts = filteredPosts.filter(post =>
                post.categories.some(cat => cat.slug === category)
            )
        }

        // Pagination logic
        const totalPosts = filteredPosts.length
        const totalPages = Math.ceil(totalPosts / pageSize)
        const startIndex = (currentPage - 1) * pageSize
        const endIndex = startIndex + pageSize
        const posts = filteredPosts.slice(startIndex, endIndex)

        // Get categories for filters
        const categoriesResponse = await strapiApi.getCategories().catch(() => ({data: []}))
        const categories = categoriesResponse.data || []

        return (
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-blue-50">
                <Navbar />
                <main className="flex-1">
                    <div className="container mx-auto px-4 py-16">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight pb-2">
                                Blog
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Odkryj najnowsze artykuły, porady i insights z naszego zespołu.
                                Dzielimy się wiedzą, doświadczeniem i inspiracją.
                            </p>
                        </div>

                        {/* Stats */}
                        <BlogStats totalPosts={allPosts.length} currentCount={posts.length} />

                        {/* Filters */}
                        {categories.length > 0 && (
                            <BlogFilters
                                currentCategory={category}
                                categories={categories}
                                totalPosts={totalPosts}
                            />
                        )}

                        {/* View Controls */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-8">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                {/* View Toggle */}
                                <div className="flex items-center space-x-4">
                                    <h4 className="text-sm font-semibold text-gray-700">Widok:</h4>
                                    <div className="flex bg-gray-100 rounded-xl p-1">
                                        <Link
                                            href={getViewChangeUrl(searchParamsRecord, 'grid')}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                                view === 'grid'
                                                    ? 'bg-white text-gray-900 shadow-sm'
                                                    : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                        >
                                            <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                            </svg>
                                            Siatka
                                        </Link>
                                        <Link
                                            href={getViewChangeUrl(searchParamsRecord, 'list')}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                                view === 'list'
                                                    ? 'bg-white text-gray-900 shadow-sm'
                                                    : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                        >
                                            <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                            </svg>
                                            Lista
                                        </Link>
                                    </div>
                                </div>

                                {/* Page Size */}
                                <div className="flex items-center space-x-4">
                                    <h4 className="text-sm font-semibold text-gray-700">Artykułów na stronie:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {[6, 9, 12, 18, 24].map((size) => (
                                            <Link
                                                key={size}
                                                href={getPageSizeChangeUrl(searchParamsRecord, size)}
                                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                                    pageSize === size
                                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                            >
                                                {size}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Posts Grid/List */}
                        {posts.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mb-8">
                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                                    Brak artykułów
                                </h3>
                                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                                    {category
                                        ? `Nie znaleziono artykułów w kategorii "${category}"`
                                        : 'Nie ma jeszcze żadnych opublikowanych artykułów'
                                    }
                                </p>
                                {category && (
                                    <Link
                                        href="/blog"
                                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-blue-500/25 font-medium text-lg"
                                    >
                                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        Zobacz wszystkie artykuły
                                    </Link>
                                )}
                            </div>
                        ) : (
                            <>
                                <Suspense fallback={<BlogSkeleton/>}>
                                    <div className={`gap-8 mb-16 ${
                                        view === 'list'
                                            ? 'flex flex-col'
                                            : pageSize <= 6
                                                ? 'grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'
                                                : pageSize <= 12
                                                    ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                                                    : 'grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
                                    }`}>
                                        {posts.map((post) => (
                                            <BlogPost
                                                key={post.id}
                                                post={post}
                                                variant={view === 'list' ? ('horizontal' as 'card') : 'card'}
                                            />
                                        ))}
                                    </div>
                                </Suspense>

                                {/* Pagination */}
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    category={category}
                                    pageSize={pageSize}
                                    view={view}
                                />

                                {/* Stats */}
                                <div className="text-center mt-12">
                                    <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm">
                                        <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        <span className="text-sm text-gray-600 font-medium">
                                            Wyświetlane {startIndex + 1}-{Math.min(endIndex, totalPosts)} z {totalPosts} artykułów
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </main>
                <Footer />
            </div>
        )
    } catch (error) {
        console.error('Blog page error:', error)

        return (
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-red-50">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center px-4">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-100 to-red-200 rounded-full mb-8">
                            <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.98-.833-2.75 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Wystąpił błąd
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                            Nie udało się załadować artykułów. Sprawdź połączenie internetowe i spróbuj ponownie.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-blue-500/25 font-medium text-lg"
                        >
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Powrót do strony głównej
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}