import { notFound } from 'next/navigation'
import { Status } from '@lib/mdx/sources'
import { formatDateAndTime } from '@lib/utils'
import Image from 'next/image'
import Profile from '../../../../public/static/avatar.jpg'
import FeedLayout from '@components/feed-wrapper'

interface StatusPageProps {
  params: {
    slug: string
  }
}

export default async function StatusPage({ params }: StatusPageProps) {
  const status = await Status.getMdxNode(params?.slug)

  if (!status) {
    notFound()
  }

  return (
    <FeedLayout>
      <article key={status.slug} className='px-3 lg:px-6 py-5 border-b border-b-slate-100'>
        <header className='flex'>
          <div className='mr-3 w-16 h-12'>
            <Image
              src={Profile}
              className='w-12 h-12 rounded-full overflow-hidden'
              placeholder='blur'
              alt='jwiebe'
              priority
            />
          </div>
          <div className='w-full'>
            <div className='flex space-x-1 lg:space-x-2 items-center justify-between'>
              <div className='flex space-x-1 lg:space-x-2 items-center'>
                <a href='' className='flex flex-col text-black no-underline'>
                  <span className='font-semibold'>Josiah Wiebe</span>
                  <span className='text-sm text-slate-400'>@josiahwiebe</span>
                </a>
              </div>
              {/* <button>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='6.5' cy='12.5' r='1.5' fill='#526471'></circle>
                  <circle cx='12.5' cy='12.5' r='1.5' fill='#526471'></circle>
                  <circle cx='18.5' cy='12.5' r='1.5' fill='#526471'></circle>
                </svg>
              </button> */}
            </div>
          </div>
        </header>
        <main className='flex mt-3'>
          <p className='mt-2 text-2xl leading-8 break-words'>{status.content}</p>
        </main>

        <footer className='mt-4 flex space-x-1 lg:space-x-2 items-center'>
          <span className='text-sm text-slate-400'>{formatDateAndTime(status.frontMatter.date)}</span>
          <span className='text-slate-400'>•</span>
          <a href='https://github.com/natemoo-re/raycast-microblog' className='text-sm text-slate-400 no-underline'>
            Raycast Microblog
          </a>
        </footer>
      </article>
    </FeedLayout>
  )
}
