import { neon } from "@neondatabase/serverless";
import { PrismaNeonHTTP } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const sql = neon(connectionString);

const adapter = new PrismaNeonHTTP(sql);

export const prisma = new PrismaClient({ adapter });
