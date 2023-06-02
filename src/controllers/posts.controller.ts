import { Request, Response } from 'express'
import axios from 'axios'
import { ServerPostArray } from '../interfaces/serverPostArray'
import { ServerUserElement } from '../interfaces/serverUserElement'
import { PostsFactory } from '../factories/posts.factory'

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
        const postFactory = new PostsFactory()
        try {
            console.log('- API Call')
            const resultUser: ServerUserElement = await axios.request({
                url: userUrl,
            })
            const resultPostArray: ServerPostArray = await axios.request({
                url: postUrl,
            })
            const responseArray = postFactory.convertPosts(
                resultUser,
                resultPostArray
            )
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
