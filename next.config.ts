import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '45.11.229.41',
                port: '1337',
                pathname: '/uploads/**',
            },
        ],
    },
}

export default nextConfig