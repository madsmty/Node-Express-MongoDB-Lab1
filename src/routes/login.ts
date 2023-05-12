// Not Login implementation really, just endpoints to get the jwt

import express, { Router,NextFunction, Request, Response } from 'express';

import {get_jwt, get_jwt_admin, get_jwt_noUserId}  from '../controllers/login';

export const loginRouter:Router = express.Router();

loginRouter.get('/', get_jwt);
loginRouter.get('/admin', get_jwt_admin);
loginRouter.get('/noUserId', get_jwt_noUserId);

