import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'

const Content = ({ children }) => <div className='content'>{children}</div>

const Layout = ({ children, title, ...props }) => (
  <>
    <Head title={title} />
    <Header title={title} {...props} />
    <Content {...props}>{children}</Content>
    <Footer />
  </>
)

export default Layout
