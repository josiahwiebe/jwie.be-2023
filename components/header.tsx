import Image from 'next/image'
import Profile from '../public/static/avatar.jpg'
import Link from 'next/link'
import config from '../config'

interface HeaderProps {
  title: string
  home?: boolean
}

export const Header = (props: HeaderProps) => (
  <header>
    <div className='site-title-box flex items-center flex-row'>
      <Link href='/' passHref>
        <div className='relative w-24 h-24 rounded-full hover:cursor-pointer transition-transform hover:transition-transform hover:rotate-[30deg] overflow-hidden'>
          <Image src={Profile} layout='fill' placeholder='blur' priority />
        </div>
      </Link>
      <div className='flex flex-col ml-4'>
        <h1
          className={`text-2xl font-bold mt-0 leading-6 md:leading-8 sm:text-3xl md:text-4xl ${
            !props.home && 'bg-gradient-primary bg-clip-text text-transparent'
          }`}>
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
