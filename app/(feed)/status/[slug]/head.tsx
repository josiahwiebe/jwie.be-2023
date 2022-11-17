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
    <>
      <meta charSet='utf-8' />
      <title>{`@josiahwiebe: ${status.content}`}</title>
      <meta name='description' content='' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </>
  )
}
