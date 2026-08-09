import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this folder so builds behave the same
  // on any computer (silences the "multiple lockfiles" warning).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
