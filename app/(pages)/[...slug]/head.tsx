import { Page } from '@lib/mdx/sources'

export default async function Head({ params }) {
  const page = await Page.getMdxNode(params?.slug)

  if (!page) {
    return null
  }

  return (
    <>
      <meta charSet='utf-8' />
      <title>{`${page.frontMatter.title} — Josiah Wiebe`}</title>
      {page.frontMatter.excerpt && <meta name='description' content={page.frontMatter.excerpt} />}
      <meta name='description' content='' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </>
  )
}
