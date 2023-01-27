import '@styles/nord.css'
import rehypePrism from '@mapbox/rehype-prism'
import PageHeader from '@components/page-header'
import { formatDate } from '@lib/utils'
// import { MdxContent } from '@components/mdx-content'

import { MDXRemote } from 'next-mdx-remote/rsc'
import mdxComponents from '@components/mdx-components'

export default function PostLayout({ post }: { post: any }) {
  return (
    <>
      <PageHeader title={post.frontMatter.title} subtitle={formatDate(post.frontMatter.date)} />
      <article className='page-content'>
        <div className='prose lg:prose-lg dark:text-slate-400'>
          {/* @ts-expect-error Server Component */}
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{ mdxOptions: { rehypePlugins: [rehypePrism] } }}
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
