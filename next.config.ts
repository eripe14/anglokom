import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        domains: ['localhost'],
        // Alternative: use remotePatterns for more specific control
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**',
            },
        ],
    },
}

export default nextConfig