import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function Create({ children }: { children: ReactNode }) {
  return <Link href='/mockup'>{children}</Link>
}
