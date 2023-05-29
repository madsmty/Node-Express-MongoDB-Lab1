import { Request, Response } from 'express'
import axios from 'axios'
import { ServerUserArray } from '../interfaces/serverUserArray'
import { User } from '../models/users'
import {convertName} from '../factories/users'

export class UserController {
    domain = 'https://jsonplaceholder.typicode.com/'
    res: Response
    req: Request

    constructor(res: Response, req: Request) {
        this.res = res
        this.req = req
    }

    async getAll(): Promise<boolean> {
        const url = `${this.domain}users/`
        let functionStatus = true
        let responseArray: Array<User>
        //let userId:number = 1;
        //responseArray.data = [];
        try {
            console.log('- API Call')
            const resultArray: ServerUserArray = await axios.request({
                url,
            })
            responseArray = convertName(resultArray)

            console.log('Response Sent')
            this.res.status(200).json(responseArray)
        } catch (error) {
            console.log(error)
            functionStatus = false
            throw new Error(`Error in 'getAll': ${error}`)
        }
        return functionStatus
    }
}
