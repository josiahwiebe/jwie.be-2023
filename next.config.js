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
        source: '/feed.json',
        destination: '/api/feed/json',
      },
      {
        source: '/feed.rss',
        destination: '/api/feed/rss',
      },
      {
        source: '/blog.json',
        destination: '/api/blog/json',
      },
      {
        source: '/blog.rss',
        destination: '/api/blog/rss',
      },
    ]
  },
}
