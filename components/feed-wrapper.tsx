import Link from 'next/link'

export default function FeedLayout({ children }) {
  return (
    <div className='w-full'>
      <div className='border border-slate-100'>
        <div className='flex justify-between py-3 px-2 lg:px-4 sticky'>
          <h1 className='font-bold text-xl'>
            <Link href='/feed' className='text-black no-underline'>
              Feed
            </Link>
          </h1>
        </div>
        <div className='border-t border-t-slate-100'>{children}</div>
      </div>
    </div>
  )
}
