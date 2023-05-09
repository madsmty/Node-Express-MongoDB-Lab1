import express, { Router,NextFunction, Request, Response } from 'express';
import {callExtAPI} from '../services/callExtAPI';

const router:Router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction)=> {
    const url:string = "https://jsonplaceholder.typicode.com/users/";
    console.log(url);
    res.status(200).json({
        message: 'Handling GET requests to /users'
    }); 
    callExtAPI(url);
    console.log('GET /users');
    console.log('- Transform result into desired format');
    console.log('- Send response with transformed info');
    return res;
});

router.get('/:userId/posts',(req: Request, res: Response) => {
    const url:string = `https://jsonplaceholder.typicode.com/users/${req.params.userId}/posts`;
    console.log(url);
    res.status(200).json({
        message: `Handling GET requests to /users${req.params.userId}/posts`
    }); 
    callExtAPI(url);
    console.log('get /users/:userId/posts');
    console.log('- Filter result for specified UserId');
    console.log('- Transform result into desired format');
    console.log('- Send response with transformed info');
    return res.sendStatus(200);
});

module.exports = router;