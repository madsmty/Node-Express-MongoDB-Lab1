import express, {Application, NextFunction, Request, Response} from "express";
import axios, {AxiosResponse} from "axios";
const app: Application = express();
const port: number = 3000;


async function callExtAPI<T>(url:string): Promise<AxiosResponse> {
   try {
        const response = await axios.get(url);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error(`Error in 'callExtAPI(${url})': ${error}`);
    }
  }; 

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

app
.route('/users')
.get((req: Request, res: Response) => {
    const url:string = "https://jsonplaceholder.typicode.com/users/";
    callExtAPI(url);
    console.log('GET /users');
    console.log('- Transform result into desired format');
    console.log('- Send response with transformed info');
    return res.sendStatus(200);
});
 
app
.route('/users/:userId/posts')
.get((req: Request, res: Response) => {
    const url:string = `https://jsonplaceholder.typicode.com/users/${req.params.userId}/posts`;
    console.log(url);
    callExtAPI(url);
    console.log('get /users/:userId/posts');
    console.log('- Filter result for specified UserId');
    console.log('- Transform result into desired format');
    console.log('- Send response with transformed info');
    return res.sendStatus(200);
});

    
app.listen(port, () => {
    console.log(`Connected succesfully in port ${port}`)
});