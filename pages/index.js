import Link from 'next/link'
import Layout from '../components/layout'

const Home = () => (
  <Layout title='Home' showFullHeader>
    <div className='content'>
      <img src='/static/jw-island.jpg' className='hero' />
    </div>
    <div className='work-box'>
      <h2 className='work-box-label'>Selected works</h2>
      <div className='work-box-item'>
        <span className='item-title'>
          <Link href='https://drinkwhitecap.com'>
            <a target='_blank' rel='noopener'>Whitecap Coffee</a>
          </Link>
        </span>
        <span className='item-type'>Identity / Web</span>
        <p>An independent third-wave coffee shop in Winkler, MB.</p>
      </div>
      <div className='work-box-item'>
        <span className='item-title'>
          <Link href='https://mbhof.ca'>
            <a target='_blank' rel='noopener'>MBHoF</a>
          </Link>
        </span>
        <span className='item-type'>Web / Identity</span>
        <p>Manitoba’s Baseball Hall of Fame, located in Morden, MB.</p>
      </div>
    </div>
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
        margin-bottom: 1.5rem;
        margin-top: 0;
        font-size: 1.25rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: 600;
        @media screen and (min-width: 60em) {
          font-size: 1.5rem;
          margin-right: 4rem;
          width: calc(40% - 4rem);
        }
        @media screen and (min-width: 30em) {
          display: inline;
          float: left;
        }
      }

      .work-box-item {
        margin-bottom: 1.5rem;
        @media screen and (min-width: 60em) {
          margin-bottom: 0;
          margin-right: 4rem;
          width: calc(30% - 2rem);
        }
        @media screen and (min-width: 30em) {
          display: inline;
          float: left;
        }
        &:last-of-type {
          margin-right: 0;
        }
      }

      .item-title {
        font-size: 0.875rem;
        font-family: 'Operator Mono SSm A', 'Operator Mono SSm B', courier, monospace;
        line-height: 2.5;
        margin-bottom: 0.5rem;
        display: block;
        @media screen and (min-width: 60em) {
          font-size: 1rem;
        }
      }

      .item-type {
        font-size: 0.75rem;
        font-family: 'Operator Mono SSm A', 'Operator Mono SSm B', courier, monospace;
        font-style: italic;
        margin-bottom: 1rem;
        color: #777;
        display: block;
      }
    `}</style>
  </Layout>
)

export default Home
