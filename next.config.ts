import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const baseUrl = isProduction ? '/next-starter' : '';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,

  // I believe these are needed for GitHub Pages
  basePath: baseUrl,
  assetPrefix: baseUrl,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
