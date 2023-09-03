/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "images.unsplash.com", "dummyimage.com"],
  },
};

module.exports = nextConfig;
