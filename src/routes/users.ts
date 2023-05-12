import express, { Router,NextFunction, Request, Response } from 'express';
import { checkJWT } from '../middleware/checkJWT';
import { users_get_all, users_get_posts_from_user } from '../controllers/users';

export const usersRouter:Router = express.Router();
 
usersRouter.get('/', checkJWT, users_get_all);
usersRouter.get('/:userId/posts',checkJWT, users_get_posts_from_user);

