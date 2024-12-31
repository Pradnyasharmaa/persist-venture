import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Remove or comment out the appDir option if you are not using it
  experimental: {
    // appDir: true,  // Comment this out or remove it
  },
};

export default nextConfig;
