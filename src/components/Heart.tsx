import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'

export default function Heart({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6 '>Heart (0)</SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
