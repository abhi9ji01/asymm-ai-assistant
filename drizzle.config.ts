// drizzle.config.ts
import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

// load .env.local so the CLI sees DATABASE_URL
config({ path: ".env.local" });

export default defineConfig({
  schema: "./src/db/schema/*",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: { url: process.env.DATABASE_URL! },
  verbose: true,
  strict: true,
});
