import { notFound } from 'next/navigation'
import { Blog } from '@lib/mdx/sources'
import PostLayout from 'app/(blog)/post-layout'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
  const files = await Blog.getMdxFiles()

  return files?.map(file => ({
    slug: file.slug.split('/'),
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await Blog.getMdxNode(params?.slug)

  if (!post) {
    notFound()
  }

  return <PostLayout post={post} />
}
