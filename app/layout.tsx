import '@styles/styles.css'
import Link from 'next/link'
import Image from 'next/image'
import Profile from '../public/static/avatar.jpg'

const getYear = () => {
  const now = new Date()
  return now.getFullYear()
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='mx-auto my-0 p-4 max-w-2xl font-sans text-black bg-white dark:bg-zinc-900'>
        <header className='mb-8 pb-4 border-b dark:border-b-slate-600'>
          <div className='mt-2 w-full lg:mt-0 flex items-center flex-row'>
            <Link href='/' passHref>
              <div className='relative w-12 h-12 rounded-full hover:cursor-pointer transition-transform hover:transition-transform hover:rotate-[30deg] overflow-hidden'>
                <Image src={Profile} className='object-fill' placeholder='blur' alt='jwiebe' priority />
              </div>
            </Link>
            <div className='flex flex-col ml-4'>
              <h1 className='text-lg leading-6 font-bold mt-0 md:leading-5 md:text-xl hover:text-transparent'>
                <Link href='/' className='text-black dark:text-slate-300 no-underline'>
                  Josiah Wiebe
                </Link>
              </h1>
              <span className='text-gray-400 dark:text-slate-500 text-xs md:text-sm'>Not very online</span>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className='mt-12 pt-8 w-full'>
          <div className='w-full block mt-16'>
            <span className='text-xs text-gray-500 leading-5 block mt-4'>
              &copy; 2011—{getYear()} Josiah Wiebe. All rights reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  )
}
