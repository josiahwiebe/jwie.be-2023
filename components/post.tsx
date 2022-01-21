import Layout from './layout'

export default ({ children, meta }) => (
  <Layout title={meta.title}>
    <h1>{meta.title}</h1>
    <article className='prose lg:prose-xl px-8 m-auto my-4 sm:my-16'>{children}</article>
  </Layout>
)
