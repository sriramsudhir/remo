/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    domains: [
      'images.unsplash.com',
      'res.cloudinary.com'
    ],
    unoptimized: true
  },
  output: 'standalone',
  experimental: {
    scrollRestoration: true
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig;