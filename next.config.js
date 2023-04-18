/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.notion.so", "i.ibb.co", "images.unsplash.com"],
    format: ["image/png", "image/webp", "image/jpeg"],
  },
};

module.exports = nextConfig;
