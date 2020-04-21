const withMDX = require('next-mdx-frontmatter')({
  extensions: /\.mdx?$/,
})

module.exports = withMDX({
  target: 'serverless',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})
