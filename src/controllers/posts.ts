import { Request, Response } from 'express'
import axios from 'axios'
import { ServerPostArray } from '../interfaces/serverPostArray'
import { ServerUserElement } from '../interfaces/serverUserElement'
import { Posts } from '../models/posts'

export class PostController {
    domain = 'https://jsonplaceholder.typicode.com/'
    res: Response
    req: Request

    constructor(res: Response, req: Request) {
        this.res = res
        this.req = req
    }

    convertPosts(
        paramUser: ServerUserElement,
        paramPostArray: ServerPostArray
    ): Array<Posts> {
        //console.log(paramUserArray.address)
        const responseArray = paramPostArray.data.map((element) => {
            const nameSeparator = paramUser.data.name.split(' ')
            let firstName = ''
            let lastName = ''

            if (nameSeparator.length > 2) {
                firstName = nameSeparator[1]
                lastName = nameSeparator[2]
            } else {
                firstName = nameSeparator[0]
                lastName = nameSeparator[1]
            }

            const postMap: Posts = {
                userId: element.userId,
                name: `${firstName} ${lastName}`,
                email: paramUser.data.email,
                postId: element.id,
                title: element.title,
                body: element.body,
            }
            //userMap.id = element.id
            return postMap
        })
        return responseArray
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
            responseArray = this.convertPosts(resultUser, resultPostArray)
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
