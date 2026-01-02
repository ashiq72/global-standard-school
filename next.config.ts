/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bponi.sgp1.cdn.digitaloceanspaces.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
