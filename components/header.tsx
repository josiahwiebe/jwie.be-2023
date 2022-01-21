import Image from 'next/image'
import Link from 'next/link'
import config from '../config'

export const Header = props => (
  <header>
    <div className='site-title-box flex items-center flex-row'>
      <Link href='/' passHref>
        <Image
          className='rounded-full hover:cursor-pointer hover:transition-transform hover:rotate-12'
          src='/static/avatar.png'
          height='100px'
          width='100px'
        />
      </Link>
      <div className='flex flex-col ml-4'>
        <h1
          className={`text-2xl font-bold mt-0 leading-6 md:leading-8 sm:text-3xl md:text-4xl ${!props.home &&
            'bg-gradient-primary bg-clip-text text-transparent'}`}>
          <Link href='/' passHref>
            <a>{config.title}</a>
          </Link>
          {!props.home && (
            <>
              <span className='text-gray-300 mx-2'>&#47;</span>
              <span>{props.title}</span>
            </>
          )}
        </h1>
        {props.home && (
          <span className='text-gray-500 text-sm sm:text-base md:text-lg'>
            Multi-disciplinary developer, based in the Canadian prairies.
          </span>
        )}
      </div>
    </div>
  </header>
)

export default Header
