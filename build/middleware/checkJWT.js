"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJWT = void 0;
function checkJWT(req, res, next) {
    console.log("Check JWT");
    console.log("- If JWT valid: next()");
    console.log("- else, response status = 401");
    next();
}
exports.checkJWT = checkJWT;
;
