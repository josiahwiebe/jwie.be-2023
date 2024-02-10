import { db } from '@lib/db'
import { TwitterApi } from 'twitter-api-v2'
import { NextApiRequest, NextApiResponse } from 'next'
import { auth } from '@lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const date = new Date()
  const session = await auth()
  console.log('api endpoint', { session })

  try {
    if (!session) throw new Error('Not authenticated')
    const twitter = new TwitterApi(session.accessToken)

    const record = await db.status.create({
      data: {
        slug: date.valueOf().toString(),
        createdAt: date.toISOString(),
        content: req.body.content,
        clientId: 2,
        published: true,
      },
    })

    if (req.body.crossPostToTwitter) {
      const twitterResponse = await twitter.v2.post('tweets', {
        text: req.body.content,
      })

      console.log(twitterResponse)

      const tweetUrl = `https://twitter.com/josiahwiebe/status/${twitterResponse.data.id}`

      await db.status.update({
        where: {
          id: record.id,
        },
        data: {
          linkedTweet: tweetUrl,
        },
      })
    }

    return res.status(200).json({
      message: 'Status created',
      status: {
        slug: date.valueOf().toString(),
        createdAt: date.toISOString(),
        content: req.body.content,
        published: true,
      },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message, message: 'Something went wrong.' })
  }
}
