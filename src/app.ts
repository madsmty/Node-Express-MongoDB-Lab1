import express, {Application, NextFunction, Request, Response} from "express";
const app: Application = express();
const port: number = 3000;

const usersRoutes = require('./routes/users');


// Implementar prettier, lodash si es que aplica


function checkJWT(req: Request, res: Response, next: NextFunction) {
    console.log("Check JWT"); 
    console.log("- If JWT valid: next()");
    console.log("- else, response status = 401")
    next();
 };

function logToDB(req: Request, res: Response, next: NextFunction) {
   console.log("Write to MongoDB"); 
   next();
};

app.use(checkJWT);
app.use(logToDB);

app.use('/users', usersRoutes);


    
app.listen(port, () => {
    console.log(`Connected succesfully in port ${port}`)
});

module.exports = app;