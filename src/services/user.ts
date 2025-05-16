// src/services/userService.ts
import { db } from '../db/db'
import { users } from '../db/schema'
import { eq } from 'drizzle-orm'
import type { Context } from 'hono'

export async function listUsersService(c: Context) {
  const all = await db.select().from(users)
  const sanitized = all.map(u => ({
    ...u,
    name: u.name ?? '',
    email: u.email ?? '',
  }))
  return c.json(sanitized, 200)
}

export async function getUserService(c: Context) {
  const id = Number(c.req.param('id'))
  const user = (await db.select().from(users).where(eq(users.id, id)))[0]
  if (!user) return c.json({ message: 'Not found' }, 404)
  const sanitized = { ...user, name: user.name ?? '', email: user.email ?? '' }
  return c.json(sanitized, 200)
}

export async function createUserService(c: Context) {
  const { name, email } = await c.req.json()
  const [user] = await db.insert(users).values({ name, email }).returning()
  const sanitized = { ...user, name: user.name ?? '', email: user.email ?? '' }
  return c.json(sanitized, 201)
}

export async function updateUserService(c: Context) {
  const id = Number(c.req.param('id'))
  const { name, email } = await c.req.json()
  const [user] = await db.update(users)
    .set({ name, email })
    .where(eq(users.id, id))
    .returning()
  const sanitized = { ...user, name: user.name ?? '', email: user.email ?? '' }
  return c.json(sanitized, 200)
}

export async function deleteUserService(c: Context) {
  const id = Number(c.req.param('id'))
  const result = await db.delete(users).where(eq(users.id, id))
  if (result.rowCount === 0) return c.json({ message: 'Not found' }, 404)
  return c.body(null, 204)
}