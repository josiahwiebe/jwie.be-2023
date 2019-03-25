import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'

const Content = ({ children, ...props }) => (
  <div className='content'>
    {children}
    <style jsx>{`
      .content {
        display: block;
        overflow: hidden;
        clear: both;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 0.875rem;
        margin-bottom: ${props.showFullHeader ? '' : '10rem'};
      }
    `}</style>
  </div>
)

const Layout = ({ children, title, ...props }) => (
  <>
    <Head title={title} />
    <Header title={title} {...props} />
    <Content {...props}>{children}</Content>
    <Footer />
    <style jsx global>{`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html {
        font-size: 16px;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      body {
        margin: 0 auto;
        padding: 1rem;
        max-width: 90%;
        font-size: 1rem;
        font-family: 'Operator Mono SSm A', 'Operator Mono SSm B', courier, monospace;
        font-weight: 400;
        line-height: 1.45;
        color: #444;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        background-color: #fff;
        @media screen and (min-width: 60em) {
          padding: 4rem;
          max-width: 56rem;
        }
        @media screen and (min-width: 30em) {
        }
      }

      a {
        color: #a79354;
        background-color: transparent;
        text-decoration: none;
        box-shadow: inset 0 0 0 0 rgba(119, 119, 119, 0.45);
        transition: 0.25s;
        &:hover {
          text-decoration: none;
          box-shadow: inset 0 -5px 0 0 rgba(167, 147, 84, 0.2);
        }
      }

      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        line-height: 1.75;

        li {
          padding-left: 1rem;
          text-indent: -1rem;
        }

        li::before {
          content: '-';
          color: #a79354;
          padding-right: 0.7rem;
        }
      }

      h1 {
        font-size: 1.625rem;
      }

      h2 {
        font-size: 1.25rem;
        margin: 1.25rem 0 0.5rem;
      }
    `}</style>
  </>
)

export default Layout
