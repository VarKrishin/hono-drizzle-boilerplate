import { createRoute } from '@hono/zod-openapi'
import { z } from 'zod'
import { Context } from 'hono'

export const healthRoute = createRoute({
  method: 'get',
  path: '/health',
  responses: {
    200: {
      description: 'OK'
    },
  },
  handler: (c: Context) => c.text('Health check OK'),
})

export const rootRoute = createRoute({
  method: 'get',
  path: '/',
  responses: {
    200: {
      description: 'OK',
    },
  },
  handler: (c: Context) => c.text('Ready to go'),
})

