import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    domains: ['th.bing.com'],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      }
    ]
  }
};

export default nextConfig;
