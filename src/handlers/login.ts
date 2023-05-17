import { LoginController } from '../controllers/login'
import { Request, Response } from 'express'

export const loginUserHandler = (req: Request, res: Response) => {
    const loginInstance = new LoginController(res, req)
    return loginInstance.loginUser()
}

export const loginAdminHandler = (req: Request, res: Response) => {
    const loginInstance = new LoginController(res, req)
    return loginInstance.loginAdmin()
}

export const loginNoUserIdHandler = (req: Request, res: Response) => {
    const loginInstance = new LoginController(res, req)
    return loginInstance.loginNoUserId()
}
