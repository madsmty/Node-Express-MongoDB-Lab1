import express, { Router,NextFunction, Request, Response } from 'express';
import {callExtAPI} from '../services/callExtAPI';
import axios,{ AxiosResponse } from 'axios';
import {UserArray, User} from '../models/users';


interface ServerResponse {
    data: [ServerData]
}

interface ServerData {
    "id": number,
    "name":string,
    "username": string,
    "email": string,
    "address": {
                "street": string,
                "suite": string,
                "city": string,
                "zipcode": string,
                "geo": {
                    "lat":string,
                    "lng":string       
                }
            },
            "phone": string,
            "website": string,
            "company": {
                "name": string,
                "catchPhrase": string,
                "bs":string
            }
        }


//axios.interceptors.response.use((r: ServerResponse) => r.data);

export const users_get_all = async (req: Request, res: Response, next: NextFunction)=>  {
    const url:string = "https://jsonplaceholder.typicode.com/users/";
    try {
        const resultArray:ServerResponse = await axios.request({
            url:url,
            //transformResponse: (r: ServerResponse) => r.data
            //transformResponse: axios.defaults.transformResponse.concat((r: ServerResponse) => console.log(r.data))
        });
        console.log(resultArray.data);      
        
    }
    catch(error) {
        console.log(error);
        throw new Error(`Error in 'users_get_all': ${error}`);
    }
    
    res.status(200).json({
        //responseData
        //userResponseArray
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
