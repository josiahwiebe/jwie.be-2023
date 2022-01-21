const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-prism')],
  },
})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  experimental: {
    concurrentFeatures: true,
  },
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      // require('./scripts/generate-sitemap');
      // require('./scripts/generate-rss');
    }

    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
})
