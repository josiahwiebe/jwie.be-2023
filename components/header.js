import Link from 'next/link'
import config from '../config.json'

export const Header = props => (
  <header>
    <div className='site-title-box'>
      <h1 className='site-title'>
        <Link href='/'>
          <a>{config.title}</a>
        </Link>
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
  </header>
)

export default Header
