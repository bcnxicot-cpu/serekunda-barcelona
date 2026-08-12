import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.timeout.com" },
      { protocol: "https", hostname: "privateaser-media.s3.eu-west-1.amazonaws.com" },
    ],
  },
};

export default nextConfig;
