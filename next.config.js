/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        output: "export",  // <=== enables static exports
   reactStrictMode: true,
      },
    ],
  },
};

module.exports = nextConfig;
