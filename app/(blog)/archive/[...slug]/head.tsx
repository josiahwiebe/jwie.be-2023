import PageHead from '@components/page-head'
import { Archive } from '@lib/mdx/sources'

export default async function Head({ params }) {
  const post = await Archive.getMdxNode(params?.slug)

  if (!post) {
    return null
  }

  return <PageHead params={{ title: post.frontMatter.title, excerpt: post.frontMatter.excerpt }} />
}
