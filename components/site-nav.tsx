'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface SiteNavProps {
  items?: {
    title: string
    href: string
    disabled: boolean
  }[]
}

export function SiteNavigation({ items }: SiteNavProps) {
  const segment = usePathname().split('/')[1]

  return (
    <nav className='site-nav'>
      <ul className='flex flex-row gap-4 list-none'>
        {items.map(item => (
          <li key={item.href}>
            <Link
              href={item.disabled ? '#' : item.href}
              className={segment && item.href.startsWith(`/${segment}`) ? 'is-active' : ''}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
