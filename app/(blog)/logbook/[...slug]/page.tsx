import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Logbook } from '@lib/mdx/sources'
import PostLayout from 'app/(blog)/post-layout'

interface LogbookPageProps {
  params: {
    slug: string[]
  }
}

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  const post = await Logbook.getMdxNode(params.slug)
  if (!post) {
    return
  }
  return { title: post.frontMatter.title, description: post.frontMatter.excerpt }
}

export async function generateStaticParams(): Promise<LogbookPageProps['params'][]> {
  const files = await Logbook.getMdxFiles()

  return files?.map(file => ({
    slug: file.slug.split('/'),
  }))
}

export default async function PostPage({ params }: LogbookPageProps) {
  const post = await Logbook.getMdxNode(params?.slug)

  if (!post) {
    notFound()
  }

  return <PostLayout post={post} />
}
