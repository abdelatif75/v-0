'use client'

import Link from 'next/link'
import MaxWidthWhrapper from './MaxWidthWhrapper'
import Image from 'next/image'
import Search from './Search'
import { Brush, CircleUser, HeartIcon, ShoppingCart } from 'lucide-react'
import { Fragment } from 'react'
import Create from './Create'
import { useTranslations } from 'next-intl'
import Cart from './Cart'
import UserShortcut from './UserShortcut'
import Heart from './Heart'
import { useSession, signIn, signOut } from 'next-auth/react'

const LinkIcon = [
  {
    Icon: Brush,
    name: 'create',
    FunctionIcon: Create,
  },
  {
    Icon: HeartIcon,
    name: 'wishlist',
    FunctionIcon: Heart,
  },
  {
    Icon: ShoppingCart,
    name: 'cart',
    FunctionIcon: Cart,
  },
  {
    Icon: CircleUser,
    name: 'user',
    FunctionIcon: UserShortcut,
  },
]

export default function Navbar() {
  const t = useTranslations('Navbar')
  const { data: session } = useSession()

  return (
    <div
      className='sticky inset-x-0 top-0 z-50 h-16 bg-white dark:bg-black'
      dir='ltr'>
      <nav className='relative bg-white dark:bg-background'>
        <MaxWidthWhrapper>
          <div className='border-b border-gray-100 dark:border-slate-900'>
            <div className='flex h-16 items-center justify-between md:justify-normal'>
              {/* TODO: Mobile nav */}
              <div className='ml-4 flex md:w-1/2 md:justify-start lg:ml-0'>
                <Link href='/'>
                  <Image
                    alt='logo'
                    src='/logo.png'
                    className='h-10 w-24'
                    width={250}
                    height={100}
                  />
                </Link>
              </div>
              <div className='hidden w-1/2 flex-shrink-0 p-3 md:block'>
                <Search />
              </div>
              <div className='flex items-end md:w-1/2 md:justify-end'>
                <ul className='flex items-center gap-6'>
                  {session ? (
                    <button onClick={() => signIn()}>Sign in</button>
                  ) : (
                    LinkIcon.map((item, index) => (
                      <Fragment key={index}>
                        <item.FunctionIcon>
                          <li className='flex min-w-[20px] cursor-pointer flex-col items-center gap-1 text-xl hover:text-primary'>
                            <item.Icon size={22} strokeWidth={1.5} />
                            <span className='text-xs'>{t(item.name)}</span>
                          </li>
                        </item.FunctionIcon>
                      </Fragment>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
        </MaxWidthWhrapper>
      </nav>
    </div>
  )
}
