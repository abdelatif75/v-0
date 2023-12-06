import MaxWidthWhrapper from '@/components/MaxWidthWhrapper'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CreditCard, MessagesSquare, ShieldCheck, Truck } from 'lucide-react'
import { Fragment } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'

const perks = [
  {
    Icon: Truck,
    key: 'shipping',
  },
  {
    Icon: CreditCard,
    key: 'payment',
  },
  {
    Icon: ShieldCheck,
    key: 'money',
  },
  {
    Icon: MessagesSquare,
    key: 'support',
  },
]
/*
export async function generateMetadata(
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const t = await getTranslations('Home')

  return {
    title: t('description'),
  }
}
*/

/**
 * className=' w-full px-0 md:px-0'
        style={{
          backgroundImage: 'url(/ai.jpg)',
          backgroundPositionX: 'center',
          backgroundPositionY: 'center',
          backgroundBlendMode: 'screen',
        }}
 */
export default function Home() {
  const t = useTranslations('Home')

  return (
    <>
      <MaxWidthWhrapper>
        <div className='mx-auto flex max-w-3xl flex-col items-center py-20 text-center'>
          <h1
            className='scroll-m-20 text-4xl font-bold normal-case tracking-tight lg:text-5xl'
            dangerouslySetInnerHTML={{ __html: t.raw('introduction') }}
          />
          <p className='mt-6 max-w-prose text-lg text-muted-foreground'>
            {t('description')}
          </p>
          <div
            className='mt-6 flex flex-col gap-4 capitalize sm:flex-row'
            dir='ltr'>
            <Link href='/' className={cn('capitalize', buttonVariants())}>
              {t('NewDesign')}
            </Link>
            <Link href='/' className={buttonVariants({ variant: 'ghost' })}>
              {t('BrowseProducts')} &rarr;
            </Link>
          </div>
        </div>
      </MaxWidthWhrapper>
      <section className='border-t border-gray-200 bg-secondary dark:bg-secondary'>
        <MaxWidthWhrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12  sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0'>
            {perks.map((item, index) => (
              <Fragment key={index}>
                <div className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                  <div className='flex justify-center md:flex-shrink-0'>
                    <div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary text-blue-950'>
                      <item.Icon className='h-1/3 w-1/2 text-white' />
                    </div>
                  </div>
                  <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                    <h3 className='text-base font-medium text-gray-950 dark:text-white'>
                      {t(`perks.${item.key}.name`)}
                    </h3>
                    <p className='mt-3 text-sm text-muted-foreground'>
                      {t(`perks.${item.key}.description`)}
                    </p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </MaxWidthWhrapper>
      </section>
    </>
  )
}
