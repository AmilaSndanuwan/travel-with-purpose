import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Allow local network access for development
  allowedDevOrigins: ["192.168.8.182", "localhost", "127.0.0.1"],
};

export default nextConfig;
