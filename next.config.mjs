/** @type {import('next').NextConfig} */
// Path: next.config.js
const nextConfig = {
  images: {
    domains: ["open-sky.infura-ipfs.io"],
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};
export default nextConfig;
