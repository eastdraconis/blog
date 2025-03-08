import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import path from 'path';
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
  webpack: (config) => {
    config.resolve = {
      alias: {
        '@/': path.resolve(__dirname, 'src'),
      },
      ...config.resolve,
    };

    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: 'velog.velcdn.com',
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);
