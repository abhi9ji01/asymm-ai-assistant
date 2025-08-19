// src/db/client.ts
import { drizzle } from "drizzle-orm/neon-http";
import { neon, neonConfig } from "@neondatabase/serverless";

neonConfig.fetchConnectionCache = true; // helps in serverless environments

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);
