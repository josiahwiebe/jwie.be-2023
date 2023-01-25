import { notFound } from 'next/navigation'
import { Page } from '@lib/mdx/sources'
// import { MdxContent } from '@components/mdx-content'
import PageHeader from '@components/page-header'

import { MDXRemote } from 'next-mdx-remote/rsc'
import mdxComponents from '@components/mdx-components'

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

  return (
    <>
      <PageHeader title={page.frontMatter.title} subtitle={page.frontMatter.subtitle} />
      <article className='page-content'>
        <div className='prose lg:prose-lg dark:prose-invert'>
          {/* @ts-expect-error Server Component */}
          <MDXRemote source={page.content} components={mdxComponents} />
          {/* <MdxContent source={page.content} /> */}
        </div>
      </article>
    </>
  )
}
