"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
exports.get_jwt = (req, res, next) => {
    const token = jwt.sign({
        userId: "mdeleon",
        userRole: "ADMIN"
    }, "SECRET"); // change that to an .env file
    console.log('Token:' + token);
    res.status(200).json({
        token: token
    });
    return res;
};
