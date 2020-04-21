import Layout from './layout'

export default ({ children, title }) => (
  <Layout title={title}>
    <h1>{title}</h1>
    <div className='page-content'>{children}</div>
  </Layout>
)
