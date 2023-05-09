"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logToDB_1 = require("./middleware/logToDB");
const app = (0, express_1.default)();
const port = 3000;
const usersRoutes = require('./routes/users');
const loginRoutes = require('./routes/login');
// Implementar prettier, lodash si es que aplica
//app.use(checkJWT);
app.use(logToDB_1.logToDB);
app.use('/users', usersRoutes);
app.use('/login', loginRoutes);
//implementar error handling para rutas inexistentes
app.listen(port, () => {
    console.log(`Connected succesfully in port ${port}`);
});
module.exports = app;
