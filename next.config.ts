import type { NextConfig } from "next";
import { writeFileSync } from 'fs';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/traffic-light-component' : '',
  assetPrefix: isProd ? '/traffic-light-component/' : '',
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (process.env.NODE_ENV === 'production') {
      // Write .nojekyll after static export (works in most setups)
      writeFileSync('./out/.nojekyll', '');
    }
    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;
