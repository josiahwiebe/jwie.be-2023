import { notFound } from 'next/navigation'

import { Page } from '@lib/mdx/sources'
import { MdxContent } from '@components/mdx-content'
import { serialize } from 'next-mdx-remote/serialize'
import PageHeader from '@components/page-header'

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
    <>
      <PageHeader title={page.frontMatter.title} subtitle={page.frontMatter.subtitle} />
      <article className='page-content'>
        {mdx && (
          <div className='prose lg:prose-lg dark:prose-invert'>
            <MdxContent source={mdx} />
          </div>
        )}
      </article>
    </>
  )
}
