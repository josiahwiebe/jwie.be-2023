/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['prisma'],
  },
  reactStrictMode: true,
}
