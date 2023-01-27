import { Archive } from '@lib/mdx/sources'
import BlogLayout from 'app/(blog)/blog-layout'

export default async function LogbookPage() {
  const posts = await Archive.getAllMdxNodes()

  return <BlogLayout title='Archive' subtitle='Bits & bobs – a collection of old posts.' posts={posts} />
}
