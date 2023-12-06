import { cn } from '@/lib/utils'
import { CSSProperties, ReactNode } from 'react'

export default function MaxWidthWhrapper({
  className,
  children,
  style,
}: {
  className?: string
  children: ReactNode
  style?: CSSProperties
}) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className,
      )}
      style={style}>
      {children}
    </div>
  )
}
