import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: config => {
    config.resolve = {
      ...config.resolve,
      extensionAlias: {
        '.js': ['.js', '.ts', '.tsx'],
        '.jsx': ['.jsx', '.tsx'],
      },
    };
    return config;
  },
};

export default nextConfig;
