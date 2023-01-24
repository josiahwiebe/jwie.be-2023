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
    published: z.boolean().optional(),
  }),
})

export const Logbook = createSource({
  contentPath: 'content/logbook',
  basePath: '/logbook',
  sortBy: 'date',
  sortOrder: 'desc',
  frontMatter: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string().optional(),
    published: z.boolean().optional(),
  }),
})

export const Page = createSource({
  contentPath: 'content/pages',
  basePath: '/',
  frontMatter: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    excerpt: z.string().optional(),
    published: z.boolean().optional(),
  }),
})
