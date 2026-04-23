import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "Portfolio"; // must match your GitHub repo name exactly

const nextConfig: NextConfig = {
  reactStrictMode: false,

  // Required for GitHub Pages static hosting
  output: "export",
  images: {
    unoptimized: true,
  },

  // Required for project sites: https://<user>.github.io/<repoName>/
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",

  env: {
    googleAnalyticsId: isProd ? process.env.GA_MEASUREMENT_ID : "",
  },
};

export default nextConfig;