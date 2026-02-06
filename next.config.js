/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['pub-*.r2.dev'],
    unoptimized: true,
  },
}

module.exports = nextConfig
