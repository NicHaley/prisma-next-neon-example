import NextAuth from "next-auth";
import { prisma } from "@repo/database";
import Resend from "next-auth/providers/resend";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Resend({
      from: "auth@resend.dev",
    }),
  ],
});
