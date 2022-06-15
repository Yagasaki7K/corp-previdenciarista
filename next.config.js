/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
  reactStrictMode: true,
  images: {
    domains: [
      "https://previdenciarista.com/blog/wp-content/uploads/2022/05/businessman-thinking-about-profit.jpg",
      "d2f1b5qfzcjkhq.cloudfront.net",
      "localhost",
    ],
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
