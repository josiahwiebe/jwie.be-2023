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
    <article className='container pt-2 md:max-w-3xl md:pt-3 lg:pt-4'>
      <header className='mx-auto flex flex-col gap-4 mb-4'>
        <h1 className='text-2xl font-bold sm:text-3xl md:text-4xl'>{page.frontMatter.title}</h1>
      </header>
      {mdx && (
        <div className='prose lg:prose-lg max-w-none'>
          <MdxContent source={mdx} />
        </div>
      )}
    </article>
  )
}
