import { UserController } from '../controllers/users.controller'
import { Request, Response } from 'express'

export const getUserHandler = (req: Request, res: Response) => {
    const userInstance = new UserController(res, req)
    console.log('getUserHandler')
    return userInstance.getAll()
}
