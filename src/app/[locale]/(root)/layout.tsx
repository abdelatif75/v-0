import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/lib/Providers/theme-provider'
import Head from '@/components/Head'

export const metadata: Metadata = {
  title: 'Personili',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={cn('relative h-full antialiased')}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <main className='relative flex min-h-screen flex-col'>
            {/*TODO:head*/}
            <Head />
            <Navbar />
            <div className='flex-1 flex-grow'>{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
