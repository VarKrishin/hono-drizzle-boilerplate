// src/config.ts
import { z } from 'zod';
import './env-loader';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  DATABASE_URL: z.string().nonempty(),
})

export const env = envSchema.parse(process.env)
