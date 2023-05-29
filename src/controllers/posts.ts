import { Request, Response } from 'express'
import axios from 'axios'
import { ServerPostArray } from '../interfaces/serverPostArray'
import { ServerUserElement } from '../interfaces/serverUserElement'
import { convertPosts } from '../factories/posts'

export class PostController {
    domain = 'https://jsonplaceholder.typicode.com/'
    res: Response
    req: Request

    constructor(res: Response, req: Request) {
        this.res = res
        this.req = req
    }



    async getUserPosts(): Promise<boolean> {
        const userId: string = this.req.params.userId
        const userUrl = `${this.domain}users/${userId}`
        const postUrl = `${this.domain}users/${userId}/posts`
        let functionStatus = true
        let responseArray: Array<unknown>
        try {
            console.log('- API Call')
            const resultUser: ServerUserElement = await axios.request({
                url: userUrl,
            })
            const resultPostArray: ServerPostArray = await axios.request({
                url: postUrl,
            })
            //console.log(resultUserArray.data.name);
            responseArray = convertPosts(resultUser, resultPostArray)
            //console.log(responseArray)
            console.log('Post Response Sent')
            this.res.status(200).json(responseArray)
        } catch (error) {
            console.log(error)
            functionStatus = false
            throw new Error(`Error in 'getUserPosts': ${error}`)
        }
        return functionStatus
    }
}
