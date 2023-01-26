import NextImage from 'next/image'

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

function pre({ children, ...props }) {
  return (
    <pre className='p-4 overflow-auto bg-code' {...props}>
      {props.filename ? (
        <span className='flex items-center justify-between pb-3 text-xs font-mono text-slate-500'>
          <span>{props.filename}</span>
        </span>
      ) : null}
      {children}
    </pre>
  )
}

export default { ImageWithCaption, Image, pre }
