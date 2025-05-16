// drizzle.config.ts
import { defineConfig } from 'drizzle-kit'
import { env } from './env-config'

export default defineConfig({
  schema:    './src/db/schema.ts',     // Location of your schema definition
  out:       './migrations',           // Where migration files will be stored
  dialect:   'postgresql',             // Database dialect
  dbCredentials: {
    url: env.DATABASE_URL,             // Database connection string
  },
  migrations: {
    table:  '__migrations',            // Table to track applied migrations
    schema: 'public',                  // Schema where the migrations table lives
  },
})