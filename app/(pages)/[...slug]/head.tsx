import PageHead from '@components/page-head'
import { Page } from '@lib/mdx/sources'

export default async function Head({ params }) {
  const page = await Page.getMdxNode(params?.slug)

  if (!page) {
    return null
  }

  return <PageHead params={{ title: page.frontMatter.title, excerpt: page.frontMatter.excerpt }} />
}
