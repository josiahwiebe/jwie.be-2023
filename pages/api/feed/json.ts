import { NextApiRequest, NextApiResponse } from 'next'
import { Feed } from 'feed'
import { db } from '@lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const feed = new Feed({
    id: 'https://jwie.be/feed',
    title: 'Josiah Wiebe — Feed',
    copyright: `2011—${new Date().getFullYear()} Josiah Wiebe`,
    description: 'Feed of status updates from jwie.be',
    link: 'https://jwie.be/feed',
    generator: 'Next.js',
    feedLinks: {
      json: 'https://jwie.be/feed.json',
      rss: 'https://jwie.be/feed.xml',
    },
  })

  const statuses = await db.status.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  statuses.forEach(status => {
    feed.addItem({
      content: status.content,
      title: `${status.content.substring(0, 30)}...`,
      date: new Date(status.createdAt),
      link: `https://jwie.be/status/${status.slug}`,
    })
  })

  res.setHeader('content-type', 'application/json')
  res.status(200).end(feed.json1())
}
