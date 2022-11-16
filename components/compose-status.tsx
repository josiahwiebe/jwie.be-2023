'use client'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
// import { useSession } from 'next-auth/client'

async function createStatus(event: FormEvent<HTMLFormElement>, refresh: () => void) {
  event.preventDefault()
  const form = event.currentTarget
  const formData = new FormData(form)
  const content = formData.get('content') as string
  const tweet = formData.get('post_to_twitter') as string
  console.log({
    content,
    tweet,
  })

  await fetch('/api/status', {
    method: 'POST',
    body: JSON.stringify({
      content,
      crossPostToTwitter: tweet === 'on',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  form.reset()

  refresh()
}

export default function ComposeStatusForm() {
  const router = useRouter()
  return (
    <form className='w-full' onSubmit={e => createStatus(e, router.refresh)}>
      <div className='text-lg'>
        <textarea
          name='content'
          rows={1}
          className='w-full mt-3 outline-0 placeholder:text-xl text-xl resize-none focus:outline-none'
          placeholder="What's happening?"></textarea>
      </div>
      <div className='flex justify-end items-center mt-2'>
        <div className='flex items-center mr-2'>
          <input type='checkbox' className='mr-1' id='post_to_twitter' name='post_to_twitter' />
          <label htmlFor='post_to_twitter' className='text-sm text-slate-400'>
            Post to Twitter
          </label>
        </div>
        <div className='flex-none'>
          <button className='text-white bg-primary py-1.5 px-5 rounded-full font-bold'>Post</button>
        </div>
      </div>
    </form>
  )
}
