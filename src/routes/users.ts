import express, { Router,NextFunction, Request, Response } from 'express';
import { jwtValidator } from '../middleware/jwtValidator';
import { getUserHandler } from '../handlers/user';
import { getPostsFromUserHandler } from '../handlers/post';

export const usersRouter:Router = express.Router();
 
usersRouter.get('/',jwtValidator, getUserHandler);
usersRouter.get('/:userId/posts',jwtValidator, getPostsFromUserHandler);

