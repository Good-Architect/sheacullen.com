import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
