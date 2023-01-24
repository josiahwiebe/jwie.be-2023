import { NextApiRequest, NextApiResponse } from 'next'
import { Feed } from 'feed'
import { Blog, Logbook } from '@lib/mdx/sources'
import { marked } from 'marked'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const feed = new Feed({
    id: 'https://jwie.be/feed',
    title: 'Josiah Wiebe — Blog',
    copyright: `2011-${new Date().getFullYear()} Josiah Wiebe`,
    link: 'https://jwie.be/blog',
    generator: 'Next.js',
    feedLinks: {
      json: 'https://jwie.be/blog.json',
      rss: 'https://jwie.be/blog.rss',
    },
  })

  const posts = await Blog.getAllMdxNodes()
  const logbook = await Logbook.getAllMdxNodes()

  const allPosts = [...posts, ...logbook]

  allPosts.forEach(post => {
    const html = marked.parse(post.content)
    feed.addItem({
      content: html,
      title: post.frontMatter.title,
      date: new Date(post.frontMatter.date),
      link: `https://jwie.be/blog/${post.slug}`,
    })
  })

  res.setHeader('content-type', 'application/json')
  res.status(200).end(feed.json1())
}
