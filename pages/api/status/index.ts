import { db } from '@lib/db'
import { TwitterApi } from 'twitter-api-v2'
import { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import { getToken } from 'next-auth/jwt'
import { authOptions } from '../auth/[...nextauth]'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const date = new Date()
  const session = await unstable_getServerSession(req, res, authOptions)
  const token = await getToken({ req, secret: authOptions.secret })
  console.log('api endpoint', { session, token })

  try {
    const twitter = new TwitterApi(token.accessToken)

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
