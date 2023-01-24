import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import TwitterProvider from 'next-auth/providers/twitter'
import { db } from '@lib/db'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      authorization: { params: { scope: 'users.read tweet.read tweet.write offline.access' } },
      version: '2.0',
    }),
    {
      id: 'mastodon',
      name: 'Mastodon',
      type: 'oauth',
      version: '2.0',
      clientId: process.env.MASTODON_CLIENT_ID as string,
      clientSecret: process.env.MASTODON_CLIENT_SECRET as string,
      profile(profile) {
        console.log('profile', profile)
        return {
          id: profile.id,
          name: profile.username,
          email: profile.email,
          image: profile.avatar,
        }
      },
      authorization: {
        url: 'https://mastodon.social/oauth/authorize',
        params: { scope: 'read write' },
      },
      token: 'https://mastodon.social/oauth/token',
      userinfo: 'https://mastodon.social/api/v1/accounts/verify_credentials',
    },
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_token) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
      }
      return token
    },
    async session({ session, token }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken
        session.refreshToken = token.refreshToken
      }
      return session
    },
    async signIn({ user }) {
      console.log('signIn', user)
      if (user?.email === 'josiah@hey.com' || user?.name === 'josiahwiebe') {
        return true
      }
      return '/denied'
    },
  },
}

export default NextAuth(authOptions)
