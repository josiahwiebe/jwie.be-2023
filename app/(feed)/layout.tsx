import FeedTitle from '@components/feed-title'
import LoginButton from '@components/login-button'
import LogoutButton from '@components/logout-button'
import { auth } from '@lib/auth'

export default async function FeedLayout({ children }) {
  const session = await auth()
  return (
    <div className='mt-12 grid-column-2'>
      <div className='border border-slate-100 dark:border-slate-600'>
        <div className='flex justify-between py-3 px-2 lg:px-4 sticky'>
          <h1 className='font-bold text-xl'>
            <FeedTitle />
          </h1>
          <div>
            {!session && <LoginButton />}
            {session && <LogoutButton />}
          </div>
        </div>
        <div className='border-t border-t-slate-100 dark:border-t-slate-600'>{children}</div>
      </div>
    </div>
  )
}
