import { OpenAPIHono } from '@hono/zod-openapi'
import { RegExpRouter } from 'hono/router/reg-exp-router'
import { listUsersService, getUserService, createUserService, updateUserService, deleteUserService } from '../../services/user'
import { listUsersRoute, getUserRoute, createUserRoute, updateUserRoute, deleteUserRoute } from './user'


export const userRouter = new OpenAPIHono({ router: new RegExpRouter() })

userRouter.openapi(listUsersRoute, listUsersService)
userRouter.openapi(getUserRoute, getUserService)
userRouter.openapi(createUserRoute, createUserService)
userRouter.openapi(updateUserRoute, updateUserService)
userRouter.openapi(deleteUserRoute, deleteUserService)