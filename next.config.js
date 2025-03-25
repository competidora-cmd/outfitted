/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/outfit-generator' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/outfit-generator/' : '',
}

module.exports = nextConfig 