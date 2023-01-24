import '@styles/nord.css'
import { notFound } from 'next/navigation'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from '@mapbox/rehype-prism'

import { Blog } from '@lib/mdx/sources'
import { MdxContent } from '@components/mdx-content'
import { formatDate } from '@lib/utils'
import PageHeader from '@components/page-header'

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

  const mdx = await serialize(post.content, { mdxOptions: { rehypePlugins: [rehypePrism] } })

  return (
    <>
      <PageHeader title={post.frontMatter.title} subtitle={formatDate(post.frontMatter.date)} />
      <article className='page-content'>
        {mdx && (
          <div className='prose lg:prose-lg dark:text-slate-400'>
            <MdxContent source={mdx} />
          </div>
        )}
        <div className='pt-12 pb-8 md:pt-10 md:pb-8 lg:pt-12 lg:pb-12'>
          <hr className='border-slate-100 dark:prose-invert' />
        </div>
      </article>
    </>
  )
}
