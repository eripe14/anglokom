// components/analytics/GtagPageview.tsx
'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

declare global { interface Window { gtag?: (...args: unknown[]) => void } }
export default function GtagPageview({ id }: { id: string }) {
    const pathname = usePathname()
    const search = useSearchParams()

    useEffect(() => {
        if (!id || typeof window.gtag !== 'function') return
        const url = pathname + (search?.toString() ? `?${search}` : '')
        window.gtag('config', id, { page_path: url })
    }, [id, pathname, search])

    return null
}
