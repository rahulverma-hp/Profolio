import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "export",
  images: { unoptimized: true },
  basePath: "",
  assetPrefix: "",
  env: {
    googleAnalyticsId: isProd ? process.env.GA_MEASUREMENT_ID : "",
  },
};

export default nextConfig;