import fs from 'fs'
import { Feed } from 'feed'
import { serialize } from 'next-mdx-remote/serialize'
import remarkPrism from 'remark-prism'
import rehypePrism from '@mapbox/rehype-prism'

import { createElement } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import mdxComponents from '@components/mdx-components'
import { renderToString } from 'react-dom/server'

export async function generateFeed({ posts, outDir }) {
  const feed = new Feed({
    id: 'https://jwie.be/blog',
    title: 'Josiah Wiebe — Blog',
    copyright: `2011-${new Date().getFullYear()} Josiah Wiebe`,
    description: 'Feed of blog posts from jwie.be',
    link: 'https://jwie.be/blog',
    generator: 'Next.js',
    feedLinks: {
      json: 'https://jwie.be/feed.json',
      rss: 'https://jwie.be/feed.xml',
    },
  })

  for await (const post of posts) {
    const mdx = await serialize(post.content, {
      mdxOptions: {
        remarkPlugins: [remarkPrism],
        rehypePlugins: [rehypePrism],
      },
    })
    const Component = createElement(MDXRemote, { ...mdx, components: mdxComponents })

    const html = renderToString(Component)

    feed.addItem({
      content: html,
      title: post.frontMatter.title,
      date: new Date(post.frontMatter.date),
      link: `https://jwie.be/${post.url}`,
    })
  }

  fs.writeFileSync(`${outDir}/feed.json`, feed.json1())
  fs.writeFileSync(`${outDir}/feed.xml`, feed.rss2())
}
