"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app
    .route('/users')
    .get((req, res) => {
    return res.send("Response with list of users");
});
app
    .route('/users/:userId/posts')
    .get((req, res) => {
    return res.send(`Posts created by user ${req.params.userId}`);
});
app.listen(port, () => {
    console.log(`Connected succesfully in port ${port}`);
});
