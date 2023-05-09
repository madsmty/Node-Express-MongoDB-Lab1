"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const callExtAPI_1 = require("../services/callExtAPI");
exports.users_get_all = (req, res, next) => {
    const url = "https://jsonplaceholder.typicode.com/users/";
    const responseData = (0, callExtAPI_1.callExtAPI)(url);
    res.status(200).json({
        data: responseData
    });
    //callExtAPI(url);
    console.log('GET /users');
    console.log('- Transform result into desired format');
    console.log('- Send response with transformed info');
    return res;
};
exports.users_get_posts_from_user = (req, res, next) => {
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
    return res;
};
