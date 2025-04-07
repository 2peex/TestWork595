import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  compiler: {
    styledComponents: true
  }, 
  images: {
    domains: ['openweathermap.org'],
  },
};

export default nextConfig;
