import '@styles/styles.css'
import Link from 'next/link'
import { AnalyticsWrapper } from '../components/analytics'
import { SiteNavigation, SiteNavProps } from '@components/site-nav'
import localFont from '@next/font/local'

const getYear = () => {
  const now = new Date()
  return now.getFullYear()
}

const vulfSans = localFont({
  src: [
    {
      path: '../public/fonts/Vulf_Sans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Vulf_Sans-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Vulf_Sans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-heading',
})

const navigation: SiteNavProps['items'] = [
  {
    title: 'Blog',
    href: '/blog',
    disabled: false,
  },
  {
    title: 'Feed',
    href: '/feed',
    disabled: false,
  },
  {
    title: 'Logbook',
    href: '/logbook',
    disabled: false,
  },
  {
    title: 'Not here',
    href: '/online',
    disabled: false,
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={vulfSans.variable}>
        <header className='grid-row site-header'>
          <h1 className='site-title'>
            <Link href='/' className='text-black dark:text-slate-300 no-underline'>
              Josiah Wiebe
            </Link>
          </h1>
          <SiteNavigation items={navigation} />
        </header>
        <main className='grid-row site-content'>{children}</main>
        <footer className='grid-row'>
          <div className='footer-content'>
            <div className='text-xs text-gray-500 leading-5 mt-4 space-x-3 flex items-center'>
              <a href='/feed.xml' className='text-gray-500 dark:text-slate-400 no-underline hover:no-underline'>
                RSS
              </a>
              <a href='/feed.json' className='text-gray-500 dark:text-slate-400 no-underline hover:no-underline'>
                JSON
              </a>
              <span className='w-full h-1 mt-1 inline-flex border-t border-gray-200 dark:border-slate-700'></span>
              <a
                href='https://mastodon.social/@josiahwiebe'
                className='text-gray-500 dark:text-slate-400 no-underline hover:no-underline'>
                Mastodon
              </a>
              <a
                href='https://instagram.com/josiahwiebe'
                className='text-gray-500 dark:text-slate-400 no-underline hover:no-underline'>
                Instagram
              </a>
            </div>
            <span className='text-xs text-gray-500 dark:text-slate-400 leading-5 block mt-4'>
              &copy; 2011—{getYear()}
            </span>
          </div>
        </footer>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
