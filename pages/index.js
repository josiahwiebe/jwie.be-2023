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
  </Layout>
)

export default Home
