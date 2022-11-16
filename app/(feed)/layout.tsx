import FeedTitle from '@components/feed-title'
import LoginButton from '@components/login-button'
import LogoutButton from '@components/logout-button'
import { unstable_getServerSession } from 'next-auth'

export default async function FeedLayout({ children }) {
  const session = await unstable_getServerSession()
  return (
    <div className='w-full'>
      <div className='border border-slate-100'>
        <div className='flex justify-between py-3 px-2 lg:px-4 sticky'>
          <h1 className='font-bold text-xl'>
            <FeedTitle />
          </h1>
          <div className='mt-2'>
            {!session && <LoginButton />}
            {session && <LogoutButton />}
          </div>
        </div>
        <div className='border-t border-t-slate-100'>{children}</div>
      </div>
    </div>
  )
}
