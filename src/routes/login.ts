// Not Login implementation really, just an endpoint to get the jwt

import express, { Router,NextFunction, Request, Response } from 'express';

const LoginController = require('../controllers/login');

const router:Router = express.Router();

router.get('/', LoginController.get_jwt);
router.get('/admin', LoginController.get_jwt_admin);
router.get('/noUserId', LoginController.get_jwt_noUserId);


module.exports = router;