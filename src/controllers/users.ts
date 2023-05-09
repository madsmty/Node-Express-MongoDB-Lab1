import express, { Router,NextFunction, Request, Response } from 'express';
import {callExtAPI} from '../services/callExtAPI';
import { AxiosResponse } from 'axios';

exports.users_get_all = (req: Request, res: Response, next: NextFunction)=> {
    const url:string = "https://jsonplaceholder.typicode.com/users/";
    const responseData = callExtAPI(url);
    res.status(200).json({
        data:responseData
    }
    ); 
    //callExtAPI(url);
    console.log('GET /users');
    console.log('- Transform result into desired format');
    console.log('- Send response with transformed info');
    return res;
};

exports.users_get_posts_from_user = (req: Request, res: Response, next: NextFunction) => {
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
    return res
}
