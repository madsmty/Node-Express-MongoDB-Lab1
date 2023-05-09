"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const callExtAPI_1 = require("../services/callExtAPI");
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    const url = "https://jsonplaceholder.typicode.com/users/";
    console.log(url);
    res.status(200).json({
        message: 'Handling GET requests to /users'
    });
    (0, callExtAPI_1.callExtAPI)(url);
    console.log('GET /users');
    console.log('- Transform result into desired format');
    console.log('- Send response with transformed info');
    return res;
});
router.get('/:userId/posts', (req, res) => {
    const url = `https://jsonplaceholder.typicode.com/users/${req.params.userId}/posts`;
    console.log(url);
    res.status(200).json({
        message: `Handling GET requests to /users${req.params.userId}/posts`
    });
    (0, callExtAPI_1.callExtAPI)(url);
    console.log('get /users/:userId/posts');
    console.log('- Filter result for specified UserId');
    console.log('- Transform result into desired format');
    console.log('- Send response with transformed info');
    return res.sendStatus(200);
});
module.exports = router;
