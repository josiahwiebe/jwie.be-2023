'use client'
import { signIn } from 'next-auth/react'

export default function LoginButton() {
  return (
    <>
      <button className='mr-2 uppercase text-xs tracking-wide text-gray-400' onClick={() => signIn('twitter')}>
        Admin Login
      </button>
    </>
  )
}
