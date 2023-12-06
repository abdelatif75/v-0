import { t } from "@/server/trpc"
import { StoreRouter } from "./router/storeRouter"

export const appRouter = t.mergeRouters(StoreRouter)

export type AppRouter = typeof appRouter
