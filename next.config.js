/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    assetPrefix: isProd ? '/remember-pi/' : '',
    basePath: isProd ? '/remember-pi' : '',
    output: 'export',
}

module.exports = nextConfig
