/** @type {import('next').NextConfig} */

module.exports = {
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
        source: '/feed.json',
        destination: '/api/blog/json',
      },
      {
        source: '/feed.xml',
        destination: '/api/blog/rss',
      },
    ]
  },
}
