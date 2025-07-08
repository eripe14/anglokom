'use client'
import React, {useEffect, useRef} from 'react'

export default function Reveal(
    {
        children,
        delay = 0,
        duration = 700,
        threshold = 0.1,
        className = "",
        animation = "slideUp" // slideUp, fadeIn, slideLeft, slideRight
    }: {
        children: React.ReactNode;
        delay?: number;
        duration?: number;
        threshold?: number;
        className?: string;
        animation?: "slideUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale";
    }) {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = getTransform(animation, false);
                    }
                })
            },
            {threshold, rootMargin: '0px 0px -50px 0px'}
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [threshold, animation])

    const getTransform = (
        type: "slideUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale", initial = true
    ) => {
        if (!initial) return 'translateX(0) translateY(0) scale(1)'

        switch (type) {
            case 'slideUp':
                return 'translateY(30px)'
            case 'slideLeft':
                return 'translateX(-30px)'
            case 'slideRight':
                return 'translateX(30px)'
            case 'fadeIn':
                return 'translateY(0)'
            case 'scale':
                return 'scale(0.9)'
            default:
                return 'translateY(30px)'
        }
    }

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: 0,
                transform: getTransform(animation, true),
                transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    )
}