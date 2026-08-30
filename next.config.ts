import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/about",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/film-content",
        destination: "/film",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
