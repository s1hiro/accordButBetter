import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    experimental: {
        optimizePackageImports: ['@components', '@lib', '@utils'],
    },
}

export default nextConfig
