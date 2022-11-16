export default async function DeniedPage() {
  return (
    <article className='container pt-8 md:max-w-3xl md:pt-12 lg:pt-24'>
      <header className='flex flex-col space-y-4'>
        <h1 className='md:leading-12 text-2xl font-bold leading-[1.2] sm:text-3xl md:text-5xl'>Access Denied</h1>
      </header>
      <div className='pt-12 pb-8 md:pt-10 md:pb-8 lg:pt-12 lg:pb-12'>
        <hr className='border-slate-100' />
      </div>
      <div className='prose lg:prose-lg max-w-none'>
        <p>Sorry, you aren't allowed to do that.</p>
      </div>
    </article>
  )
}
