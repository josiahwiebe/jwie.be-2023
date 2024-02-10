import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Archive } from '@lib/mdx/sources'
import PostLayout from 'app/(blog)/post-layout'

interface ArchivePageProps {
  params: {
    slug: string[]
  }
}

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  const post = await Archive.getMdxNode(params.slug)
  if (!post) {
    return
  }
  return { title: post.frontMatter.title, description: post.frontMatter.excerpt }
}

export async function generateStaticParams(): Promise<ArchivePageProps['params'][]> {
  const files = await Archive.getMdxFiles()

  return files?.map(file => ({
    slug: file.slug.split('/'),
  }))
}

export default async function PostPage({ params }: ArchivePageProps) {
  const post = await Archive.getMdxNode(params?.slug)

  if (!post) {
    notFound()
  }

  return <PostLayout post={post} />
}
