'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function FeedTitle() {
  const segment = useSelectedLayoutSegment()
  return (
    <Link href='/feed' className='text-black no-underline'>
      {segment === 'status' ? 'Back to Feed' : 'Feed'}
    </Link>
  )
}
