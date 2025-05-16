import { OpenAPIHono } from '@hono/zod-openapi'
import { RegExpRouter } from 'hono/router/reg-exp-router'
import { userRouter } from './routes/user'
import { healthRoute, rootRoute } from './routes/root'
import { Scalar } from '@scalar/hono-api-reference'

const app = new OpenAPIHono({ router: new RegExpRouter() })

app.route('/users', userRouter)
app.openapi(healthRoute, healthRoute.handler)
app.openapi(rootRoute, rootRoute.handler)

const openAPIPath = `/openapi`
const docsPath = `/docs`

app.doc(openAPIPath, {
  openapi: '3.0.0',
  info: {
    title: 'API',
    version: '1.0.0',
  },
})

app.get(docsPath, Scalar({ url: openAPIPath }))

export default app
