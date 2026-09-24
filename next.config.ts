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
    ];
  },
};

export default nextConfig;