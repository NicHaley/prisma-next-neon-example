import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient as PrismaClientWithoutExtension } from "@prisma/client";
import dotenv from "dotenv";
import ws from "ws";

dotenv.config();
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);

export const prisma = new PrismaClientWithoutExtension({ adapter });
type PrismaClientWithExtensions = typeof prisma;
export type PrismaClient = PrismaClientWithExtensions;
export * from "@prisma/client";
