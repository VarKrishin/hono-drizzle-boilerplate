import { createRoute } from '@hono/zod-openapi'
import { z } from 'zod'
const userSchema = z.object({
  id:    z.number(),
  name:  z.string(),
  email: z.string().email(),
})

export const listUsersRoute = createRoute({
  method: 'get',
  path: '/',
  responses: {
    200: {
      description: 'List all users',
      content: { 'application/json': { schema: z.array(userSchema) } },
    },
  }
})

export const getUserRoute = createRoute({
  method: 'get',
  path: '/:id',
  request: { params: z.object({ id: z.string() }) },
  responses: {
    200: { description: 'Get user', content: { 'application/json': { schema: userSchema } } },
    404: { description: 'Not found' },
  }
})

export const createUserRoute = createRoute({
  method: 'post',
  path: '/',
  request: { body: { content: { 'application/json': { schema: userSchema.omit({ id: true }) } } } },
  responses: {
    201: { description: 'User created', content: { 'application/json': { schema: userSchema } } },
  }
})

export const updateUserRoute = createRoute({
  method: 'put',
  path: '/:id',
  request: {
    params: z.object({ id: z.string() }),
    body: { content: { 'application/json': { schema: userSchema.omit({ id: true }) } } },
  },
  responses: {
    200: { description: 'User updated', content: { 'application/json': { schema: userSchema } } },
    404: { description: 'Not found' },
  }
})

export const deleteUserRoute = createRoute({
  method: 'delete',
  path: '/:id',
  request: { params: z.object({ id: z.string() }) },
  responses: {
    204: { description: 'User deleted' },
    404: { description: 'Not found' },
  }
})