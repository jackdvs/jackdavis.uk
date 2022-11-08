/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => [
    {
      source: "/:path*",
      has: [
        { type: "host", value: "wwww.jackdavis.me" },
        { type: "host", value: "wwww.jaack.co.uk" },
        { type: "host", value: "jaack.co.uk" },
      ],
      destination: "https://jackdavis.me/:path*",
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
