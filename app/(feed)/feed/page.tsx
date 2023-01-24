import ComposeStatusForm from '@components/compose-status'
import { db } from '@lib/db'
import { formatDate, formatDateAndTime } from '@lib/utils'
import { unstable_getServerSession } from 'next-auth/next'
import Image from 'next/image'
import Profile from '../../../public/avatar.jpg'

async function getStatuses() {
  return await db.status.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export default async function FeedPage() {
  const statuses = await getStatuses()
  const session = await unstable_getServerSession()

  return (
    <>
      {session && (
        <div className='flex col-span-full mt-4 px-2 lg:px-4 pb-4 border-b border-b-slate-100 dark:border-b-slate-600'>
          <div className='mr-3 w-16 h-12'>
            <Image
              src={Profile}
              className='w-12 h-12 rounded-full overflow-hidden'
              placeholder='blur'
              alt='jwiebe'
              priority
            />
          </div>
          <ComposeStatusForm />
        </div>
      )}
      {statuses.map(status => {
        return (
          <article
            key={status.slug}
            className=' border-b border-b-slate-100 dark:border-b-slate-600 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-600'>
            <a
              href={`/status/${status.slug}`}
              className='status-link flex px-2 lg:px-4 py-5 no-underline bg-clip-border bg-none text-current hover:text-current'>
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
                    <div className='flex flex-col md:flex-row space-x-1 lg:space-x-2 items-center text-black no-underline'>
                      <span className='font-semibold dark:text-slate-300'>Josiah Wiebe</span>
                      <span className='text-slate-400'>@josiahwiebe</span>
                    </div>
                    <span className='text-slate-400'>•</span>
                    <abbr className='text-slate-400' title={formatDateAndTime(status.createdAt.toString())}>
                      {formatDate(status.createdAt.toString())}
                    </abbr>
                  </header>
                  {/* <button>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <circle cx='6.5' cy='12.5' r='1.5' fill='#526471'></circle>
                      <circle cx='12.5' cy='12.5' r='1.5' fill='#526471'></circle>
                      <circle cx='18.5' cy='12.5' r='1.5' fill='#526471'></circle>
                    </svg>
                  </button> */}
                </div>
                <p className='mt-2 dark:text-slate-300'>{status.content}</p>
              </div>
            </a>
          </article>
        )
      })}
    </>
  )
}
