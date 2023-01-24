interface PageHeadProps {
  params: {
    title: string
    excerpt?: string
    overrideTitle?: boolean
  }
}

export default function PageHead({ params = { title: '', excerpt: '', overrideTitle: false } }: PageHeadProps) {
  const title = params.overrideTitle ? params.title : `${params.title} - Josiah Wiebe`
  const excerpt = params.excerpt

  return (
    <>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='description' content='' />
      <meta property='og:site_name' content='Josiah Wiebe' />
      {excerpt && <meta name='description' content={excerpt} />}
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#f2787c' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
      <meta name='twitter:site' content='@josiahwiebe' />
      <link rel='me authn' href='https://github.com/josiahwiebe' />
      <link rel='me' href='https://twitter.com/josiahwiebe' />
      <link rel='me' href='https://mastodon.social/@josiahwiebe' />
    </>
  )
}
