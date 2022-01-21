import Layout from './layout'

export default ({ children, meta }) => (
  <Layout title={meta.title}>
    <section className='page-content prose lg:prose-xl m-auto my-4 sm:my-16'>{children}</section>
  </Layout>
)
