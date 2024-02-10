import { signIn } from '@lib/auth'

export default function LoginButton() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('twitter')
      }}>
      <button className='mr-2 uppercase text-xs tracking-wide text-gray-400'>Admin Login</button>
    </form>
  )
}
