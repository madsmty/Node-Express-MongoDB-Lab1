import express, { Router,NextFunction, Request, Response } from 'express';
const checkJWT = require ('../middleware/checkJWT');
const UsersController = require('../controllers/users');

const router:Router = express.Router();

router.get('/', checkJWT, UsersController.users_get_all);
router.get('/:userId/posts',checkJWT, UsersController.users_get_posts_from_user);

module.exports = router;