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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const port = 3000;
function callExtAPI(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(url);
            console.log(response);
            return response;
        }
        catch (error) {
            console.log(error);
            throw new Error(`Error in 'callExtAPI(${url})': ${error}`);
        }
    });
}
;
function checkJWT(req, res, next) {
    console.log("Check JWT");
    console.log("- If JWT valid: next()");
    console.log("- else, response status = 401");
    next();
}
;
function logToDB(req, res, next) {
    console.log("Write to MongoDB");
    next();
}
;
app.use(checkJWT);
app.use(logToDB);
app
    .route('/users')
    .get((req, res) => {
    const url = "https://jsonplaceholder.typicode.com/users/";
    callExtAPI(url);
    console.log('GET /users');
    console.log('- Transform result into desired format');
    console.log('- Send response with transformed info');
    return res.sendStatus(200);
});
app
    .route('/users/:userId/posts')
    .get((req, res) => {
    const url = `https://jsonplaceholder.typicode.com/users/${req.params.userId}/posts`;
    console.log(url);
    callExtAPI(url);
    console.log('get /users/:userId/posts');
    console.log('- Filter result for specified UserId');
    console.log('- Transform result into desired format');
    console.log('- Send response with transformed info');
    return res.sendStatus(200);
});
app.listen(port, () => {
    console.log(`Connected succesfully in port ${port}`);
});
