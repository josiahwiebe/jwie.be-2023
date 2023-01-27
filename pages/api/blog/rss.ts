import { renderToString } from 'react-dom/server'
import { createElement } from 'react'
import { NextApiRequest, NextApiResponse } from 'next'
import { Feed } from 'feed'
import { Blog, Logbook } from '@lib/mdx/sources'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import MDXComponents from '@components/mdx-components'
import rehypePrettyCode from 'rehype-pretty-code'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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

  const posts = await Blog.getAllMdxNodes()
  const logbook = await Logbook.getAllMdxNodes()
  const allPosts = [...posts, ...logbook]

  for await (const post of allPosts) {
    const mdx = await serialize(post.content, {
      mdxOptions: {
        remarkPlugins: [[rehypePrettyCode, { theme: 'nord' }]],
      },
    })
    const Component = createElement(MDXRemote, { ...mdx, components: MDXComponents })

    const html = renderToString(Component)

    feed.addItem({
      content: html,
      title: post.frontMatter.title,
      date: new Date(post.frontMatter.date),
      link: `https://jwie.be/${post.url}`,
    })
  }

  res.setHeader('content-type', 'application/xml')
  res.status(200).end(feed.rss2())
}
