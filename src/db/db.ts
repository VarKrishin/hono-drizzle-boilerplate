// db.ts
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { env } from '../../env-config';

// Create SQL client
const sql = neon(env.DATABASE_URL);

// Initialize Drizzle
export const db = drizzle(sql, {
  // Enable query logging in development
  logger: env.NODE_ENV === 'development'
});

// Simple connection test function if needed
export async function testConnection() {
  try {
    const result = await sql`SELECT 1 as connected`;
    return result[0]?.connected === 1;
  } catch (error) {
    console.error('Database connection test failed:', error);
    return false;
  }
}