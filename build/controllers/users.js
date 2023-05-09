"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const callExtAPI_1 = require("../services/callExtAPI");
exports.users_get_all = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://jsonplaceholder.typicode.com/users/";
    const responseData = yield (0, callExtAPI_1.callExtAPI)(url);
    console.log("Response", responseData);
    res.status(200).json({
        responseData
    });
    //callExtAPI(url);
    console.log('GET /users');
    console.log('- Transform result into desired format');
    console.log('- Send response with transformed info');
    return res;
});
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
