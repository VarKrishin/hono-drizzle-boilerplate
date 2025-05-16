// env-loader.ts
import { config } from 'dotenv'
import { resolve } from 'path'
console.log('Loading environment variables from .dev.vars')
config({
  path: resolve(process.cwd(), '.dev.vars'),
  override: true,
})
console.log('Environment variables loaded successfully')