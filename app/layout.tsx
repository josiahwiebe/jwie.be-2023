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
      path: '../public/static/fonts/Vulf_Sans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/Vulf_Sans-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/static/fonts/Vulf_Sans-Bold.woff2',
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
            <div className='text-xs text-gray-500 leading-5 block mt-4 space-x-2'>
              <a href='/feed.xml' className='text-gray-500 no-underline'>
                RSS
              </a>
              <a href='/feed.json' className='text-gray-500 no-underline'>
                JSON
              </a>
            </div>
            <span className='text-xs text-gray-500 leading-5 block mt-4'>&copy; 2011—{getYear()}</span>
          </div>
        </footer>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
