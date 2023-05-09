"use strict";
// Not Login implementation really, just an endpoint to get the jwt
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LoginController = require('../controllers/login');
const router = express_1.default.Router();
router.get('/', LoginController.get_jwt);
router.get('/admin', LoginController.get_jwt_admin);
router.get('/noUserId', LoginController.get_jwt_noUserId);
module.exports = router;
