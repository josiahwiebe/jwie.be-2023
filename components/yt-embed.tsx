'use client'

export default async function YouTubeEmbed({ id, ...props }) {
  if (typeof window === 'undefined') {
    return <a href={`https://youtube.com/${id}`}>Watch Video</a>
  }
  const { LiteYoutubeEmbed } = await import('react-lite-yt-embed')
  return <LiteYoutubeEmbed id={id} {...props} />
}
