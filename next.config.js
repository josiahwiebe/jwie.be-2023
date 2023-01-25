/** @type {import('next').NextConfig} */

module.exports = {
  swcMinify: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['prisma'],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/status.json',
        destination: '/api/feed/json',
      },
      {
        source: '/status.xml',
        destination: '/api/feed/rss',
      },
      {
        source: '/rss',
        destination: '/feed.xml',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/rss',
        destination: '/feed.xml',
        permanent: true,
      },
    ]
  },
}
