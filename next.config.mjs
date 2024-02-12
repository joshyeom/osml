/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "maplestory.io",
      },
      {
        protocol: "https",
        hostname: "osmlib.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/item/:path*",
        destination: `http://localhost:3000/item/:path*`,
      },
    ];
  },
};

export default nextConfig;
