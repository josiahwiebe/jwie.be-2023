import { notFound } from 'next/navigation'

import { Page } from '@lib/mdx/sources'
import { MdxContent } from '@components/mdx-content'
import { serialize } from 'next-mdx-remote/serialize'

interface PageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams(): Promise<PageProps['params'][]> {
  const files = await Page.getMdxFiles()

  return files?.map(file => ({
    slug: file.slug.split('/'),
  }))
}

export default async function BasicPage({ params }: PageProps) {
  const page = await Page.getMdxNode(params.slug)

  if (!page) {
    notFound()
  }

  const mdx = await serialize(page.content)

  return (
    <article className='container pt-8 md:max-w-3xl md:pt-12 lg:pt-24'>
      <header className='flex flex-col space-y-4'>
        <h1 className='md:leading-12 text-2xl font-bold leading-[1.2] sm:text-3xl md:text-5xl'>
          {page.frontMatter.title}
        </h1>
      </header>
      <div className='pt-12 pb-8 md:pt-10 md:pb-8 lg:pt-12 lg:pb-12'>
        <hr className='border-slate-100' />
      </div>
      {mdx && (
        <div className='prose lg:prose-lg max-w-none'>
          <MdxContent source={mdx} />
        </div>
      )}
    </article>
  )
}
