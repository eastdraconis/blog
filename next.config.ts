import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {},
  transpilePackages: ['next-mdx-remote'],
  images: {
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        hostname: 'velog.velcdn.com',
      },
    ],
  },
  cleanDistDir: true,
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/post/:slug',
        destination: '/posts/:slug',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
