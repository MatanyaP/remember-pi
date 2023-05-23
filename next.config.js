/** @type {import('next').NextConfig} */
const nextConfig = {
    // Use the prefix in production and not development.
    assetPrefix: process.env.NODE_ENV === 'production' ? '/remember-pi' : '',
    output: 'export',
}

module.exports = nextConfig
