import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.worldtracktravel.com',
      },
      {
        protocol: 'https',
        hostname: 'sample.worldtracktravel.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/hotels',
        destination: '/our-hotels/',
        permanent: true,
      },
      {
        source: '/hotels/:id',
        destination: '/our-hotels/:id/',
        permanent: true,
      },
      {
        source: '/hotels/map',
        destination: '/hotels-map/',
        permanent: true,
      },
      {
        source: '/our-hotels/map',
        destination: '/hotels-map/',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/our-blogs/',
        permanent: true,
      },
      {
        source: '/blogs/:id',
        destination: '/our-blogs/:id/',
        permanent: true,
      },
      {
        source: '/tours',
        destination: '/tour-packages/',
        permanent: true,
      },
      {
        source: '/tours/:id',
        destination: '/tour-packages/:id/',
        permanent: true,
      },
      {
        source: '/custom-umrah',
        destination: '/customize-umrah-package/',
        permanent: true,
      },
      {
        source: '/transport',
        destination: '/private-transport/',
        permanent: true,
      },
      {
        source: '/visa',
        destination: '/visas/',
        permanent: true,
      },
      {
        source: '/visa/:id',
        destination: '/visas/:id/',
        permanent: true,
      },
      {
        source: '/umrah',
        destination: '/umrah-packages/',
        permanent: true,
      },
      {
        source: '/umrah/:id',
        destination: '/umrah-packages/:id/',
        permanent: true,
      },
      {
        source: '/umrah-group',
        destination: '/umrah-group-packages/',
        permanent: true,
      },
      {
        source: '/flights',
        destination: '/group-tickets/',
        permanent: true,
      },
      {
        source: '/tickets',
        destination: '/group-tickets/',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-us/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;