import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    compress: true,
    poweredByHeader: false,

    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 365, // 1 rok
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '45.11.229.41',
                port: '1337',
                pathname: '/uploads/**',
            },
        ],
    },

    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com *.google-analytics.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https: http://45.11.229.41:1337; connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com http://45.11.229.41:1337;"
                    }
                ]
            },
            {
                source: '/sitemap.xml',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/xml'
                    },
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, stale-while-revalidate'
                    }
                ]
            },
            {
                source: '/robots.txt',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'text/plain'
                    },
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400'
                    }
                ]
            }
        ];
    },

    // POPRAWIONA sekcja experimental
    experimental: {
        optimizePackageImports: ['lucide-react'],
        // Usunięto missingSuspenseWithCSRBailout - nie istnieje w Next.js 15
        serverComponentsExternalPackages: [],
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js'
                }
            }
        }
    },

    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
            };
        }
        return config;
    },

    output: 'standalone',
    trailingSlash: false,
}

export default nextConfig