import { useLocale } from 'next-intl'
const { isRtlLang } = require('rtl-detect')

export default function useTextDirection(locale: string) {
  const defaultLocale = useLocale()
  if (!locale) locale = defaultLocale
  return isRtlLang(locale) ? 'rtl' : 'ltr'
}
