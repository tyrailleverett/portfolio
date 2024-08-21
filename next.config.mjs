/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "api.microlink.io"
    ],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
