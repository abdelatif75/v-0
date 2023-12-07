import {
  FetchCreateContextFnOptions,
  fetchRequestHandler,
} from "@trpc/server/adapters/fetch"
import { appRouter } from "@/server/api/index"

import { getServerSession } from "next-auth/next"
import { authOptions } from "@/services/authOptions"

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async (opts: FetchCreateContextFnOptions) => {
      const session = await getServerSession(authOptions)
      return {
        req: opts.req,
        session,
      }
    },
  })

export { handler as GET, handler as POST }
