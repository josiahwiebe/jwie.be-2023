import Link from 'next/link'
import config from '../config.json'

export const Header = props => (
  <header>
    <div className='site-title-box'>
      <h1 className='site-title'>
        <Link href='/'>
          <a>&#11414; {config.title.toLowerCase().replace(/\s+/g, '')}</a>
        </Link>
        {!props.full && <span className='page-title'>~/{props.title.toLowerCase()}</span>}
      </h1>
    </div>
    {props.showFullHeader && (
      <div className='site-nav-box'>
        <div className='site-nav-info'>
          <p>
            Josiah is a designer &amp; developer based in the Canadian Prairies. He is passionate about Javascript
            development and the great outdoors. Most of his work is done through{' '}
            <Link href='https://collectif.co'>
              <a>Collectif</a>
            </Link>
            {'.'}
          </p>
        </div>
        <nav className='site-nav'>
          <div className='site-nav-item'>
            <span>Thoughts on</span>
            <Link href={`https://twitter.com/${config.social.twitter}`}>
              <a>Twitter</a>
            </Link>
          </div>
          <div className='site-nav-item'>
            <span>Code on</span>
            <Link href={`https://github.com/${config.social.github}`}>
              <a>Github</a>
            </Link>
          </div>
          <div className='site-nav-item'>
            <span>Images on</span>
            <Link href={`https://instagram.com/${config.social.instagram}`}>
              <a>Instagram</a>
            </Link>
          </div>
        </nav>
      </div>
    )}
    <style jsx>{`
      .site-title-box {
        margin-top: 1rem;
        width: 100%;
        @media screen and (min-width: 60em) {
          margin-top: 0;
        }
      }

      .site-title {
        font-size: 1rem;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 2rem;
        line-height: 1.25;
        @media screen and (min-width: 60em) {
          font-size: 1.25rem;
        }
      }

      .page-title {
        margin-left: 1rem;
        font-style: italic;
        color: #999;
      }

      .site-nav-box {
        margin-bottom: 2rem;
        width: 100%;
        float: left;
      }

      .site-nav-info {
        margin-bottom: 2rem;
        width: 100%;
        display: inline-block;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 0.875rem;
        @media screen and (min-width: 60em) {
          padding-right: 4rem;
          width: 50%;
        }
        @media screen and (min-width: 30em) {
          display: inline;
          float: left;
        }
      }

      .site-nav {
        margin-bottom: 0.5rem;
        display: inline-block;
        width: 100%;
        font-size: 0.75rem;
        @media screen and (min-width: 60em) {
          width: 50%;
        }
        @media screen and (min-width: 30em) {
          display: inline;
          float: left;
        }
      }

      .site-nav-item {
        width: 50%;
        float: left;
        display: inline;
        &:last-of-type {
          margin-top: 0.5rem;
          padding-right: 0;
          @media screen and (min-width: 30em) {
            margin-top: 0;
          }
        }
        @media screen and (min-width: 60em) {
          padding-right: 1rem;
        }
        @media screen and (min-width: 30em) {
          width: ${(1 / 3) * 100}%;
        }

        a {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          font-weight: 600;
          font-size: 1rem;
        }

        span {
          display: block;
          font-style: italic;
          color: #777;
        }
      }
    `}</style>
  </header>
)

export default Header
