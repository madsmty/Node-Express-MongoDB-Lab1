"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logToDB = void 0;
function logToDB(req, res, next) {
    console.log("Write to MongoDB");
    next();
}
exports.logToDB = logToDB;
;
