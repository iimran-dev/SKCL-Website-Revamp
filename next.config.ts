import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/skcl",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "z-cdn.chatglm.cn",
      },
    ],
  },
};

export default nextConfig;
