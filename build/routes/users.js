"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkJWT_1 = require("../middleware/checkJWT");
const UsersController = require('../controllers/users');
const router = express_1.default.Router();
router.get('/', checkJWT_1.checkJWT, UsersController.users_get_all);
router.get('/:userId/posts', checkJWT_1.checkJWT, UsersController.users_get_posts_from_user);
module.exports = router;
