import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GithubProvider from 'next-auth/providers/github'
import TwitterProvider from 'next-auth/providers/twitter'
import { db } from '@lib/db'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      authorization: { params: { scope: 'users.read tweet.read tweet.write offline.access' } },
      version: '2.0',
    }),
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
      if (user?.email === 'josiah@hey.com') {
        return true
      }
      return '/denied'
    },
  },
}

export default NextAuth(authOptions)
