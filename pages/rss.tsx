import { generateFeed } from '@lib/feed'
import { Archive, Blog, Logbook } from '@lib/mdx/sources'
import path from 'path'

export async function getStaticProps() {
  const [posts, logbook, archive] = await Promise.all([
    Blog.getAllMdxNodes(),
    Logbook.getAllMdxNodes(),
    Archive.getAllMdxNodes(),
  ])
  const allPosts = [...posts, ...logbook, ...archive]
  const output = path.join(process.cwd(), 'public')
  await generateFeed({
    posts: allPosts,
    outDir: output,
  })

  return {
    props: {},
  }
}

export default function Feed() {
  return null
}
