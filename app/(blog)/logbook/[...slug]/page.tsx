import { notFound } from 'next/navigation'
import { Logbook } from '@lib/mdx/sources'
import PostLayout from 'app/(blog)/post-layout'

interface LogbookPageProps {
  params: {
    slug: string[]
  }
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
