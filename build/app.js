"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const usersRoutes = require('./routes/users');
// Implementar prettier, lodash si es que aplica
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
app.use('/users', usersRoutes);
app.listen(port, () => {
    console.log(`Connected succesfully in port ${port}`);
});
module.exports = app;
