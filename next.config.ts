import type { NextConfig } from "next";

const isGHPages = process.env.GITHUB_ACTIONS === "true";
const base = isGHPages ? "/nicks-auto-site" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: base,
  assetPrefix: base,
  env: {
    NEXT_PUBLIC_BASE_PATH: base,
  },
};

export default nextConfig;
