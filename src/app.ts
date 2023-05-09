import express, {Application, NextFunction, Request, Response} from "express";
import { logToDB } from "./middleware/logToDB";

const app: Application = express();
const port: number = 3000;

const usersRoutes = require('./routes/users');
const loginRoutes = require('./routes/login');


// Implementar prettier, lodash si es que aplica

//app.use(checkJWT);
app.use(logToDB);

app.use('/users', usersRoutes);
app.use('/login', loginRoutes)
//implementar error handling para rutas inexistentes

    
app.listen(port, () => {
    console.log(`Connected succesfully in port ${port}`)
});

module.exports = app;