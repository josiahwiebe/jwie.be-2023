import '@styles/nord.css'
import { notFound } from 'next/navigation'
import rehypePrism from '@mapbox/rehype-prism'
import { Blog } from '@lib/mdx/sources'
import { formatDate } from '@lib/utils'
import PageHeader from '@components/page-header'
// import { MdxContent } from '@components/mdx-content'

import { MDXRemote } from 'next-mdx-remote/rsc'
import mdxComponents from '@components/mdx-components'
import { rehypeMeta } from '@lib/rehype-mdx-code-meta'

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

  // const mdx = await serialize(post.content, { mdxOptions: { rehypePlugins: [rehypePrism] } })

  return (
    <>
      <PageHeader title={post.frontMatter.title} subtitle={formatDate(post.frontMatter.date)} />
      <article className='page-content'>
        <div className='prose lg:prose-lg dark:text-slate-400'>
          {/* @ts-expect-error Server Component */}
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{ mdxOptions: { rehypePlugins: [rehypePrism, rehypeMeta] } }}
          />
          {/* <MdxContent source={post.content} options={{ mdxOptions: { rehypePlugins: [rehypePrism] } }} /> */}
        </div>
        <div className='pt-12 pb-8 md:pt-10 md:pb-8 lg:pt-12 lg:pb-12'>
          <hr className='border-slate-100 dark:border-slate-700' />
        </div>
      </article>
    </>
  )
}
