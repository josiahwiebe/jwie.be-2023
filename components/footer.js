import Link from 'next/link'
import config from '../config.json'

const getYear = () => {
  let now = new Date()
  return now.getFullYear()
}

export const Footer = () => (
  <footer>
    <div className='footer-left'>
      <span className='footer-title'>Get in touch</span>
      <Link href='mailto:hi@jwie.be'>
        <a>hi@jwie.be</a>
      </Link>
    </div>
    <div className='footer-right'>
      <span className='footer-title'>On the web</span>
      <Link href={`https://twitter.com/${config.social.twitter}`}>
        <a className='footer-link'>Twitter</a>
      </Link>
      <Link href={`https://github.com/${config.social.github}`}>
        <a className='footer-link'>Github</a>
      </Link>
      <Link href={`https://instagram.com/${config.social.instagram}`}>
        <a className='footer-link'>Instagram</a>
      </Link>
      <Link href={`https://spotify.com/${config.social.spotify}`}>
        <a className='footer-link'>Spotify</a>
      </Link>
      <span className='footer-more'>
        View more work at{' '}
        <Link href='https://collectif.co'>
          <a>Collectif</a>
        </Link>
        .
      </span>
    </div>
    <div className='footer-byline'>
      <p>&copy; 2011–{getYear()} Josiah Wiebe. All rights reserved.</p>
    </div>
    <style jsx>{`
      footer {
        margin-top: 3rem;
        padding-top: 2rem;
        width: 100%;
        font-size: 0.875rem;
        clear: both;
        overflow: hidden;
        border-top: 1px dashed #e4e4e4;
        &:after {
          content: '';
          clear: both;
          position: relative;
          display: table;
        }
      }

      .footer-title {
        margin-bottom: 0.5rem;
        display: block;
        font-size: 1.25rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: 600;
        @media screen and (min-width: 60em) {
          font-size: 1.5rem;
        }
      }

      .footer-link {
        display: inline-block;
        margin-right: 1.25rem;
        &:last-of-type {
          margin-right: 0;
        }
      }

      .footer-more {
        font-size: 0.875rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        margin-top: 0.5rem;
        color: #555;
        display: block;
      }

      .footer-left,
      .footer-right {
        width: 100%;
        margin-bottom: 2rem;
        @media screen and (min-width: 30em) {
          display: inline;
          float: left;
        }
      }

      .footer-left {
        @media screen and (min-width: 60em) {
          width: 40%;
        }
      }

      .footer-right {
        font-size: 0.75rem;
        @media screen and (min-width: 60em) {
          width: 60%;
          font-size: 0.875rem;
        }
      }

      .footer-byline {
        width: 100%;
        display: block;
        margin-top: 4rem;
        clear: both;

        @media screen and (min-width: 30em) {
          float: left;
          display: inline;
        }

        p {
          font-size: 0.75rem;
          color: #777;
          line-height: 1.5;
          display: block;
          margin-top: 1rem;
        }
      }
    `}</style>
  </footer>
)

export default Footer
