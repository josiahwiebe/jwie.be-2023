import Link from 'next/link'
import PageHeader from '@components/page-header'
import { Blog } from '@lib/mdx/sources'
import { formatDate } from '@lib/utils'

export const metadata = {
  title: 'Blog',
}

export default async function BlogPage() {
  const posts = await Blog.getAllMdxNodes()

  return (
    <>
      <PageHeader title='Blog' subtitle='This and that.' />
      <div className='page-content'>
        {posts.map(post =>
          post ? (
            <article key={post.slug} className='flex flex-col space-y-4'>
              <div className='flex flex-col space-y-2'>
                <Link href={post.url} passHref>
                  <h2 className='max-w-[80%] text-2xl font-heading font-bold leading-normal sm:text-3xl md:text-3xl'>
                    {post.frontMatter.title}
                  </h2>
                </Link>
                {post.frontMatter.date && (
                  <p className='text-sm text-slate-600 dark:text-slate-400'>{formatDate(post.frontMatter.date)}</p>
                )}
              </div>
              {post.frontMatter.excerpt && (
                <p className='text-slate-600 dark:text-slate-400'>{post.frontMatter.excerpt}</p>
              )}
              <div className='py-8 md:py-10 lg:py-12'>
                <hr className='border-slate-100 dark:border-slate-700' />
              </div>
            </article>
          ) : null
        )}
      </div>
    </>
  )
}
