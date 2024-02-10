export const runtime = 'experimental-edge'

export default async function IndexPage() {
  return (
    <section className='page-content grid items-center'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-heading font-bold sm:text-3xl md:text-4xl dark:text-slate-300'>
          👋 Hi, I'm Josiah
        </h1>
        <p className='text-gray-500 dark:text-slate-300 lg:text-lg'>
          I'm a multi-disciplinary developer and marketing manager based in the Canadian Praries. I currently lead the
          marketing team at <a href='https://leisurevans.com/'>Leisure Travel Vans</a>.
        </p>
      </div>
    </section>
  )
}

export const metadata = {
  title: {
    default: 'Josiah Wiebe',
    template: '%s — Josiah Wiebe',
  },
  description: 'Josiah Wiebe is a multi-disciplinary developer and marketing manager based in the Canadian Praries.',
  openGraph: {
    title: 'Josiah Wiebe',
    description: 'Josiah Wiebe is a multi-disciplinary developer and marketing manager based in the Canadian Praries',
    url: 'https://jwie.be',
    siteName: 'Josiah Wiebe',
    images: [
      {
        url: 'https://jwie.be/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-CA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Josiah Wiebe',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}
