import FeedLayout from '@components/feed-wrapper'
import { Status } from '@lib/mdx/sources'
import { formatDate } from '@lib/utils'
import Image from 'next/image'
import Profile from '../../../public/static/avatar.jpg'

export default async function FeedPage() {
  const statuses = await Status.getAllMdxNodes()

  return (
    <FeedLayout>
      {statuses.map(status => {
        const timeStamp = new Date(status.frontMatter.date).valueOf()
        return (
          <article key={status.slug} className=' border-b border-b-slate-100 cursor-pointer hover:bg-slate-100'>
            <a
              href={`/status/${timeStamp}`}
              className='status-link flex px-2 lg:px-4 py-5 no-underline text-current hover:text-current'>
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
                  <header className='flex space-x-1 lg:space-x-2 items-center'>
                    <a
                      href={`/status/${timeStamp}`}
                      className='flex space-x-1 lg:space-x-2 items-center text-black no-underline'>
                      <span className='font-semibold text-default-high'>Josiah Wiebe</span>
                      <span className='text-slate-400'>@josiahwiebe</span>
                    </a>
                    <span className='text-slate-400'>•</span>
                    <span className='text-slate-400'>{formatDate(status.frontMatter.date)}</span>
                  </header>
                  {/* <button>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <circle cx='6.5' cy='12.5' r='1.5' fill='#526471'></circle>
                      <circle cx='12.5' cy='12.5' r='1.5' fill='#526471'></circle>
                      <circle cx='18.5' cy='12.5' r='1.5' fill='#526471'></circle>
                    </svg>
                  </button> */}
                </div>
                <p className='mt-2'>{status.content}</p>
              </div>
            </a>
          </article>
        )
      })}
    </FeedLayout>
  )
}
