import { ThemeProvider } from '@/lib/Providers/theme-provider'
import Head from '@/components/Head'
import Navbar from '@/components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='relative h-full antialiased'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <main className='relative flex min-h-screen flex-col'>
            <Head />
            <Navbar />
            <div className='flex-1 flex-grow'>{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
