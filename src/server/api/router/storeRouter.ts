import { createTRPCRouter, publicProcedure } from "@/server/trpc"

export const StoreRouter = createTRPCRouter({
  GetStoreAll: publicProcedure.query(async ({ ctx }) => {
    return { tets: "tes" }
  }),
})
