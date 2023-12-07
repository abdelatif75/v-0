import NextAuth from "next-auth"
import { type GetServerSidePropsContext } from "next"

import { getServerSession } from "next-auth"
import { authOptions } from "@/services/authOptions"

export const handler = NextAuth(authOptions)

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"]
  res: GetServerSidePropsContext["res"]
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions)
}

export { handler as GET, handler as POST }
