import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'

const Home = () => (
  <div>
    <Head title='Home' />
    <Header />
    <div className='content'>
      <img src='/static/jw-island.jpg' className='hero' />
    </div>
    <div className='work-box'>
      <h2 className='work-box-label'>Selected works</h2>
      <div className='work-box-item'>
        <span className='item-title'>
          <Link href='https://drinkwhitecap.com'>
            <a>Whitecap Coffee</a>
          </Link>
        </span>
        <span className='item-type'>Identity / Web</span>
        <p>An independent third-wave coffee shop in Winkler, MB.</p>
      </div>
      <div className='work-box-item'>
        <span className='item-title'>
          <Link href='https://drinkwhitecap.com'>
            <a>MBHoF</a>
          </Link>
        </span>
        <span className='item-type'>Web / Identity</span>
        <p>Manitoba’s Baseball Hall of Fame, located in Morden, MB.</p>
      </div>
    </div>
    <Footer />
    <style jsx>{`
      .hero {
        margin-bottom: 2rem;
      }

      .work-box {
        font-size: 0.875rem;
        margin-bottom: 2rem;
        width: 100%;
        line-height: 1.5;
        float: left;
      }

      .work-box-label {
        font-size: 1.25rem;
        font-weight: 400;
        width: 100%;
        margin-bottom: 2rem;
        @media screen and (min-width: 60em) {
          padding-right: 4rem;
          width: 40%;
        }
        @media screen and (min-width: 30em) {
          display: inline;
          float: left;
        }
      }

      .work-box-item {
        margin-bottom: 2rem;
        @media screen and (min-width: 60em) {
          margin-bottom: 0;
          padding-right: 4rem;
          width: 30%;
        }
        @media screen and (min-width: 30em) {
          display: inline;
          float: left;
        }
      }

      .item-title {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
        line-height: 1.25;
        display: block;
      }

      .item-type {
        font-size: 0.875rem;
        margin-bottom: 1rem;
        color: #777;
        line-height: 1.25;
        display: block;
      }
    `}</style>
  </div>
)

export default Home
