import Link from 'next/link'
import config from '../config.json'

export default () => (
  <header>
    <div className='site-title-box'>
      <h1 className='site-title'>
        <Link href='/'>
          <a>{config.title}</a>
        </Link>
      </h1>
    </div>
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
    <style jsx global>{`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      body {
        margin: 0 auto;
        padding: 1rem;
        max-width: 96rem;
        font-size: 1rem;
        font-family: courier, monospace;
        line-height: 1.45;
        color: #444;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        background-color: #fff;
        @media screen and (min-width: 60em) {
          padding: 4rem;
          max-width: 64rem;
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
    `}</style>
    <style jsx>{`
      .site-title-box {
        margin-top: 1rem;
        width: 100%;
        @media screen and (min-width: 30em) {
          margin-top: 0;
        }
      }

      .site-title {
        font-size: 1.25rem;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 2rem;
        line-height: 1.25;
        @media screen and (min-width: 60em) {
          font-size: 1.5rem;
        }
      }

      .site-nav-box {
        font-size: 0.875rem;
        line-height: 1.5;
        margin-bottom: 2rem;
        width: 100%;
        float: left;
      }

      .site-nav-info {
        margin-bottom: 2rem;
        width: 100%;
        display: inline-block;
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

        span {
          display: block;
        }
      }
    `}</style>
  </header>
)
