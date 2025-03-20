import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // ✅ 启用静态导出
  images: {
    unoptimized: true, // ✅ 允许导出 next/image
  },
};

export default nextConfig;
