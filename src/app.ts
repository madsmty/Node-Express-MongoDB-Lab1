import express, {Application, Request, Response} from "express";
const app: Application = express();
const port: number = 3000;



app
.route('/users')
.get((req: Request, res: Response) => {
    return res.send("Response with list of users")
});
 
app
.route('/users/:userId/posts')
.get((req: Request, res: Response) => {
    return res.send(`Posts created by user ${req.params.userId }`)
});

    
app.listen(port, () => {
    console.log(`Connected succesfully in port ${port}`)
});