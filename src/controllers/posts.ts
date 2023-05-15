import { Request, Response } from 'express';
import axios from 'axios';
import { ServerPostData } from '../interfaces/serverPostData';
import { ServerPostArray } from '../interfaces/serverPostArray';
import { ServerUserArray } from '../interfaces/serverUserArray';
import { ServerUserElement } from '../interfaces/serverUserElement';
import { User } from '../models/users';
import { Posts } from '../models/posts';


export class PostController {
    domain:string = "https://jsonplaceholder.typicode.com/";
    res:Response;
    req:Request;

    constructor (res:Response, req: Request) {
        this.res = res;
        this.req = req;
    }

convertPosts(paramUser: ServerUserElement,paramPostArray: ServerPostArray):Array<any> {
    //console.log(paramUserArray.address)
    let responseArray = paramPostArray.data.map((element)=>{
        const nameSeparator = paramUser.data.name.split(" ");
        let prefix:string = "";
        let firstName:string = "";
        let lastName:string = "";

        if (nameSeparator.length > 2) {
            prefix = nameSeparator[0];
            firstName = nameSeparator[1];
            lastName = nameSeparator[2];
        }
        else
        {
            prefix = "";
            firstName = nameSeparator[0];
            lastName = nameSeparator[1];
        }
     
    let postMap:Posts = {
        userId:element.userId,
        name: firstName +" "+ lastName,
        email:  paramUser.data.email,
        postId: element.id,
        title: element.title,
        body: element.body
    };
    //userMap.id = element.id
    return postMap;
});
return responseArray
}

    async getUserPosts():Promise<boolean> {    
        let userId:string = this.req.params.userId;
        const userUrl:string = this.domain + "users/" + userId;
        //const userUrl:string = this.domain + "users?id=" + userId;
        const postUrl:string = this.domain + "users/" + userId + "/posts";
        let functionStatus:boolean = true;
        let responseArray:Array<any>;
        //responseArray.data = [];
        try {
            console.log("- API Call")
            const resultUser:ServerUserElement = await axios.request({
                url:userUrl,
            });
            const resultPostArray:ServerPostArray = await axios.request({
                url:postUrl,
            });
            //console.log(resultUserArray.data.name);
            responseArray = this.convertPosts(resultUser,resultPostArray);
            //console.log(responseArray)
            console.log("Post Response Sent");      
            this.res.status(200).json(
                responseArray
            ); 
        }
        catch(error) {
            console.log(error);
            functionStatus = false;
            throw new Error(`Error in 'getUserPosts': ${error}`);
        }
       return functionStatus;
    }
    
}
