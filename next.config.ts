import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensures static export for Netlify
  trailingSlash: true, // Ensures correct paths for static export
};

export default nextConfig;
