// components/analytics/GtagPageview.tsx
'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void
    }
}

// Komponent wewnętrzny który używa useSearchParams
function GtagPageviewInner({ id }: { id: string }) {
    const pathname = usePathname()
    const search = useSearchParams()

    useEffect(() => {
        if (!id || typeof window.gtag !== 'function') return
        const url = pathname + (search?.toString() ? `?${search}` : '')
        window.gtag('config', id, { page_path: url })
    }, [id, pathname, search])

    return null
}

// Główny komponent z Suspense
export default function GtagPageview({ id }: { id: string }) {
    return (
        <Suspense fallback={null}>
            <GtagPageviewInner id={id} />
        </Suspense>
    )
}