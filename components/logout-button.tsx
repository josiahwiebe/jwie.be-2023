'use client'
import { signOut } from 'next-auth/react'

export default function LogoutButton() {
  return (
    <button className='uppercase text-xs tracking-wide text-gray-400' onClick={() => signOut()}>
      Sign out
    </button>
  )
}
