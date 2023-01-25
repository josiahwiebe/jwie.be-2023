import { MDXRemote } from 'next-mdx-remote/rsc'
import MDXComponents from '@components/mdx-components'
import type { VFileCompatible } from 'vfile'
import type { SerializeOptions } from 'next-mdx-remote/dist/types'

export function MdxContent({ source, options }: { source: VFileCompatible; options?: SerializeOptions }) {
  // @ts-expect-error Server Component
  return <MDXRemote {...source} components={MDXComponents} {...options} />
}
