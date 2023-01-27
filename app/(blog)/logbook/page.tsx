import { Logbook } from '@lib/mdx/sources'
import BlogLayout from 'app/(blog)/blog-layout'

export default async function LogbookPage() {
  const posts = await Logbook.getAllMdxNodes()

  return <BlogLayout title='Logbook' subtitle='Records of things.' posts={posts} />
}
