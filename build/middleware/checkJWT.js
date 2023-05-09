"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    var _a;
    console.log("Check JWT");
    try {
        const token = ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]) || "";
        console.log(token);
        const decoded = jwt.verify(token, "SECRET"); //cambiar secret a .env
        console.log(decoded);
        if (decoded.userRole == "ADMIN" && decoded.userId) {
            next();
        }
        else {
            res.status(401).json({ message: "Incorrect JWT" });
        }
    }
    catch (_b) {
        console.log("JWT Error");
        res.status(401).json({ message: "Incorrect JWT" });
    }
};
