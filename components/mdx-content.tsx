'use client'

import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@components/mdx-components'

export function MdxContent({ source }) {
  return <MDXRemote {...source} components={MDXComponents} />
}
