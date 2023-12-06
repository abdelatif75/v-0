import createMiddleware from "next-intl/middleware"
import { locales, pathnames, localePrefix } from "./navigation"

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  pathnames,
  locales,
})

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
}
