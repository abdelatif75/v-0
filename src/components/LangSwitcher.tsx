import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

const Locales = ['en', 'ar']

export default function LangSwitcher() {
  return (
    <div className='flex gap-0'>
      {Locales.map((locale, index) => (
        <Link
          href={`/${locale}`}
          key={index}
          className={buttonVariants({ variant: 'link' })}>
          {locale}
        </Link>
      ))}
    </div>
  )
}
