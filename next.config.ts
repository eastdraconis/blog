import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin({});

const nextConfig: NextConfig = {
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
        source: '/post/:slug',
        destination: '/posts/:slug',
        permanent: true,
      },
    ];
  },
};

export default withVanillaExtract(nextConfig);
