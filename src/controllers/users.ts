import express, { Router,NextFunction, Request, Response } from 'express';
import {callExtAPI} from '../services/callExtAPI';
import { AxiosResponse } from 'axios';

export const users_get_all = async (req: Request, res: Response, next: NextFunction)=>  {
    const url:string = "https://jsonplaceholder.typicode.com/users/";
    const responseData: AxiosResponse  = await callExtAPI(url);
    // transform data to final format
    // const finalArray = responseData.map()
    //console.log("Response",responseData)
    res.status(200).json({
        responseData
    }
    ); 
   return res;
};

export const users_get_posts_from_user = (req: Request, res: Response, next: NextFunction) => {
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
