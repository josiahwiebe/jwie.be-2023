import { Blog } from '@lib/mdx/sources'

export default async function Head({ params }) {
  const post = await Blog.getMdxNode(params?.slug)

  if (!post) {
    return null
  }

  return (
    <>
      <meta charSet='utf-8' />
      <title>{`${post.frontMatter.title} — Josiah Wiebe`}</title>
      {post.frontMatter.excerpt && <meta name='description' content={post.frontMatter.excerpt} />}
      <meta name='description' content='' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </>
  )
}
