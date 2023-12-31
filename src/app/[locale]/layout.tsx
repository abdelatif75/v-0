import type { Metadata } from 'next'
import { Inter, Cairo } from 'next/font/google'
import { cn } from '@/lib/utils'
import { notFound } from 'next/navigation'
import useTextDirection from '@/lib/useTextDirection'
import { unstable_setRequestLocale } from 'next-intl/server'
import './globals.css'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/lib/Providers/SessionProvider'
import { NextIntlClientProvider } from 'next-intl'
import Provider from '@/lib/Providers/Provider'
import { authOptions } from '@/services/authOptions'

const inter = Inter({ subsets: ['latin'] })
const cairo = Cairo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personili',
  description: 'Generated by create next app',
}

const locales = ['en', 'ar']

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const session = await getServerSession(authOptions)

  let translate
  try {
    translate = (await import(`../../translate/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  if (!locales.includes(locale as any)) notFound()

  unstable_setRequestLocale(locale)

  const direction = useTextDirection(locale)

  return (
    <html lang={locale} dir={direction}>
      <body className={cn(locale === 'ar' ? cairo.className : inter.className)}>
        <Provider>
          <SessionProvider session={session}>
            <NextIntlClientProvider locale={locale} messages={translate}>
              {children}
            </NextIntlClientProvider>
          </SessionProvider>
        </Provider>
      </body>
    </html>
  )
}
