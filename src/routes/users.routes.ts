import express, { Router } from 'express'
import { jwtValidator } from '../middleware/jwtValidator'
import { getUserHandler } from '../handlers/user.handler'
import { getPostsFromUserHandler } from '../handlers/post.handler'

export const usersRouter: Router = express.Router()

usersRouter.get('/',jwtValidator, getUserHandler)
usersRouter.get('/:userId/posts', jwtValidator, getPostsFromUserHandler)
