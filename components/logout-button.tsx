import { signOut } from '@lib/auth'

export default function LogoutButton() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}>
      <button className='uppercase text-xs tracking-wide text-gray-400'>Sign out</button>
    </form>
  )
}
