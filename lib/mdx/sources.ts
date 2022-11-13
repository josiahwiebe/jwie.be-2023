import * as z from 'zod'
import { createSource } from '.'

export const Blog = createSource({
  contentPath: 'content/posts',
  basePath: '/blog',
  sortBy: 'date',
  sortOrder: 'desc',
  frontMatter: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string().optional(),
  }),
})

export const Status = createSource({
  contentPath: 'content/status',
  basePath: '/status',
  sortBy: 'date',
  sortOrder: 'desc',
  frontMatter: z.object({
    date: z.string(),
  }),
})

export const Page = createSource({
  contentPath: 'content/pages',
  basePath: '/',
  frontMatter: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
  }),
})
