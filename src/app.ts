import express, {Application, NextFunction, Request, Response} from "express";
const app: Application = express();
const port: number = 3000;



function checkJWT(req: Request, res: Response, next: NextFunction) {
    console.log("Check JWT"); 
    console.log("If JWT valid: next()");
    console.log("else, response status = 401")
    next();
 };

function logToDB(req: Request, res: Response, next: NextFunction) {
   console.log("Write to MongoDB"); 
   next();
};

app.use(checkJWT);
app.use(logToDB);

app
.route('/users')
.get((req: Request, res: Response) => {
    console.log('Use AXIOS to call API');
    console.log('Transform result into desired format');
    console.log('Send response with transformed info');
    return res.sendStatus(200);
});
 
app
.route('/users/:userId/posts')
.get((req: Request, res: Response) => {
    console.log('Use AXIOS to call API');
    console.log('Filter result for specified UserId');
    console.log('Transform result into desired format');
    console.log('Send response with transformed info');
    return res.sendStatus(200);
});

    
app.listen(port, () => {
    console.log(`Connected succesfully in port ${port}`)
});