import React, { Fragment } from 'react'
import MaxWidthWhrapper from './MaxWidthWhrapper'
import { useTranslations } from 'next-intl'
import { ModeToggle } from './ModeToggle'
import { MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import LocaleSwitcher from './LocaleSwitcher'

const links = [
  {
    link: '/discover',
    key: 'discover',
  },
  {
    link: '/blog',
    key: 'blog',
  },
  {
    link: '/contact-us',
    key: 'contactUs',
  },
  {
    link: '/about-us',
    key: 'aboutUs',
  },
]

export default function Head() {
  const t = useTranslations('Head')

  return (
    <div dir='ltr'>
      <MaxWidthWhrapper className='mb-4 mt-2 hidden items-center text-xs text-muted-foreground md:flex'>
        <section className='flex w-1/2 items-center justify-start'>
          <ul className='flex items-center gap-3'>
            <li className='flex items-center gap-1'>
              <MapPin size={16} />
              <span>Algiers, Algeria</span>
            </li>
            <li className='flex items-center gap-1'>
              <Phone size={16} />
              <span>Support : 06-65-12-31-23</span>
            </li>
          </ul>
        </section>
        <section className='flex w-1/2 items-center justify-end gap-4'>
          <LocaleSwitcher />
          <div>
            <ModeToggle />
          </div>
          <ul className='flex items-center gap-5'>
            {links.map((link, index) => (
              <Fragment key={index}>
                <li>
                  <Link href={link.link}>{t(link.key)}</Link>
                </li>
              </Fragment>
            ))}
          </ul>
        </section>
      </MaxWidthWhrapper>
    </div>
  )
}
