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
      <Link href='/uses'>
        <a className='footer-link'>Uses</a>
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
  </footer>
)

export default Footer
