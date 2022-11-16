import Link from 'next/link'

export default async function IndexPage() {
  return (
    <>
      <section className='container grid items-center gap-6 pt-6'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-bold sm:text-3xl md:text-4xl dark:text-slate-300'>👋 Hi, I'm Josiah</h1>
          <p className='text-gray-500 dark:text-slate-300 lg:text-lg'>
            I'm a multi-disciplinary developer and marketing manager based in the Canadian Praries. I currently lead the
            marketing team at <a href='https://leisurevans.com/'>Leisure Travel Vans</a>.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6'>
          <div className='flex flex-col gap-4 mt-12'>
            <h2 className='text-xl font-semibold sm:text-2xl md:text-3xl dark:text-slate-300'>On this website</h2>
            <p className='text-sm text-gray-400'>Notable bits of content from this site.</p>
            <ul className='list-disc list-inside'>
              <li>
                <Link href='/blog'>Blog</Link>
                <span className='text-gray-500 text-xs'> — (Very occasional) long form thoughts</span>
              </li>
              <li>
                <Link href='/feed'>Feed</Link>
                <span className='text-gray-500 text-xs'> — A short form feed – my own personal Twitter</span>
              </li>
              <li>
                <Link href='/uses'>Uses</Link>
                <span className='text-gray-500 text-xs'> — You know what this is</span>
              </li>
            </ul>
          </div>

          <div className='flex flex-col gap-4 mt-12'>
            <h2 className='text-xl font-semibold sm:text-2xl md:text-3xl dark:text-slate-300'>Not on this website</h2>
            <p className='text-sm text-gray-400'>In other corners of the web.</p>
            <ul className='list-disc list-inside'>
              <li>
                <a href='https://twitter.com/josiahwiebe'>Twitter</a>
              </li>
              <li>
                <a href='https://github.com/josiahwiebe'>GitHub</a>
              </li>
              <li>
                <a href='https://instagram.com/josiahwiebe'>Instagram</a>
              </li>
            </ul>
          </div>

          <div className='flex flex-col gap-4 mt-12'>
            <h2 className='text-xl font-semibold sm:text-2xl md:text-3xl dark:text-slate-300'>Get in touch</h2>
            <p className='text-sm text-gray-400'>Where to say hello.</p>
            <ul className='list-disc list-inside'>
              <li>
                <a href='mailto:hi@jwie.be' className='footer-link'>
                  hi@jwie.be
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6'>
          <div className='flex flex-col gap-4 mt-12 p-2 border-2 border-slate-200 rounded-md'>
            <h2 className='text-xl font-semibold sm:text-2xl md:text-3xl'>Now Playing</h2>
            <p className='text-sm text-gray-400'>I send out a newsletter every few weeks.</p>
          </div>

          <div className='flex flex-col gap-4 mt-12 p-2 border-2 border-slate-200 rounded-md'>
            <h2 className='text-xl font-semibold sm:text-2xl md:text-3xl'>Now Playing</h2>
            <p className='text-sm text-gray-400'>I send out a newsletter every few weeks.</p>
          </div>

          <div className='flex flex-col gap-4 mt-12 p-2 border-2 border-slate-200 rounded-md'>
            <h2 className='text-xl font-semibold sm:text-2xl md:text-3xl'>Now Playing</h2>
            <p className='text-sm text-gray-400'>I send out a newsletter every few weeks.</p>
          </div>
        </div> */}
      </section>
    </>
  )
}
