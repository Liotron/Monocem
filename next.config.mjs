/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/monocem-v4-professional.html",
      },
    ];
  },
};

export default nextConfig;
