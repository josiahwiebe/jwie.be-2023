import * as React from 'react'
import Head from './head'
import Header from './header'
import Footer from './footer'

export interface LayoutProps {
  children?: React.ReactNode
  title: string
  home?: boolean
  props?: React.ReactPropTypes
}

const Content = ({ children }) => <main>{children}</main>

const Layout = ({ children, title, ...props }: LayoutProps) => (
  <>
    <Head title={title} />
    <Header title={title} {...props} />
    <Content {...props}>{children}</Content>
    <Footer />
  </>
)

export default Layout
