import PageHead from '@components/page-head'
import { db } from '@lib/db'

export async function getStatus(slug: string) {
  return await db.status.findFirst({
    where: {
      slug,
    },
    include: {
      client: true,
    },
  })
}

export interface StatusPageProps {
  params: {
    slug: string
  }
}

export default async function Head({ params }: StatusPageProps) {
  const status = await getStatus(params.slug)
  return (
    <PageHead params={{ title: `@josiahwiebe: ${status.content}`, overrideTitle: true, excerpt: status.content }} />
  )
}
