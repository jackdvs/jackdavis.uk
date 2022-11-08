/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => [
    {
      source: "/:path*",
      has: [{ type: "host", value: "wwww.jackdavis.me" }],
      destination: "https://jackdavis.me/:path*",
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
