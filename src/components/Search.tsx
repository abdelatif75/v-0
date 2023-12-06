import { useTranslations } from 'next-intl'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-react'

export default function Search({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const t = useTranslations('Navbar')

  return (
    <div
      className={cn(
        'relative hidden w-full items-center gap-0  rounded-md md:flex ',
        'border border-input pr-3 ',
        className,
      )}>
      <Input
        className='border-none text-sm font-semibold text-muted-foreground focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-0'
        placeholder={`${t('search')} ...`}
      />
      <SearchIcon size={20} />
    </div>
  )
}
