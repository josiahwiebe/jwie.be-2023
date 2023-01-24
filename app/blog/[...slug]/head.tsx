import PageHead from '@components/page-head'
import { Blog } from '@lib/mdx/sources'

export default async function Head({ params }) {
  const post = await Blog.getMdxNode(params?.slug)

  if (!post) {
    return null
  }

  return <PageHead params={{ title: post.frontMatter.title, excerpt: post.frontMatter.excerpt }} />
}
