// Not Login implementation really, just endpoints to get the jwt

import express, { Router } from 'express'

import {
    loginUserHandler,
    loginAdminHandler,
    loginNoUserIdHandler,
} from '../handlers/login'

export const loginRouter: Router = express.Router()

loginRouter.get('/', loginUserHandler)
loginRouter.get('/admin', loginAdminHandler)
loginRouter.get('/noUserId', loginNoUserIdHandler)
