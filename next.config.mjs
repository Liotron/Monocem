/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/delivery-returns",
        destination: "/delivery",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
