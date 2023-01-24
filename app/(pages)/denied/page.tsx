import PageHeader from '@components/page-header'

export default async function DeniedPage() {
  return (
    <>
      <PageHeader title='Denied' subtitle='Nope.' />
      <article className='container pt-8 md:max-w-3xl md:pt-12 lg:pt-24'>
        <div className='page-content pt-12 pb-8 md:pt-10 md:pb-8 lg:pt-12 lg:pb-12'>
          <hr className='border-slate-100' />
        </div>
        <div className='prose lg:prose-lg max-w-none'>
          <p>Sorry, you aren't allowed to do that.</p>
        </div>
      </article>
    </>
  )
}
