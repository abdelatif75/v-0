import { ThemeProvider } from '@/lib/Providers/theme-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <body className='relative h-full antialiased'>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange>
            <main className='relative flex min-h-screen flex-col'>
              <div className='flex-1 flex-grow'>{children}</div>
            </main>
          </ThemeProvider>
        </body>
      </body>
    </html>
  )
}
