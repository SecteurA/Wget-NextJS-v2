/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'login.wget.ma',
      },
      {
        protocol: 'https',
        hostname: 'www.heberjahiz.com',
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;