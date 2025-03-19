import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // Fixes next/image issue in static export
};

export default nextConfig;
