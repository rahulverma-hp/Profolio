import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "portfolio"; // your GitHub repo name exactly

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  env: {
    googleAnalyticsId: isProd ? process.env.GA_MEASUREMENT_ID : "",
  },
};

export default nextConfig;