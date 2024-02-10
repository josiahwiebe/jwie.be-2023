import NextImage from 'next/image'
import YouTubeEmbed from '@components/yt-embed'

function Image({ src, width = 700, height = 475, alt, contain, ...props }) {
  return (
    <figure className='relative h-fit'>
      <NextImage
        width={width}
        height={height}
        sizes='100vw'
        style={{
          width: contain ? `${width}px` : '100%',
          height: contain ? `${height}px` : 'auto',
        }}
        src={src}
        alt={alt}
        {...props}
      />
    </figure>
  )
}

function ImageWithCaption({ src, width = 700, height = 475, alt, children, ...props }) {
  return (
    <figure className='relative h-fit'>
      <NextImage
        width={width}
        height={height}
        sizes='100vw'
        style={{
          width: '100%',
          height: 'auto',
        }}
        src={src}
        alt={alt}
        {...props}
      />
      <figcaption className='text-xs'>{children}</figcaption>
    </figure>
  )
}

export default { ImageWithCaption, Image, YouTubeEmbed }
