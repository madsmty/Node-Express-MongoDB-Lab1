import  { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

//Cambiar a clases

export class LoginController {
    res: Response
    req: Request

    constructor(res: Response, req: Request) {
        this.res = res
        this.req = req
    }

    loginUser(): boolean {
        // JWT with regular user role
        const token = jwt.sign(
            {
                userId: 'mdeleon',
                userRole: 'user',
            },
            'SECRET'
        ) // change that to an .env file

        console.log('Token:' + token)
        this.res.status(200).json({
            token: token,
        })
        return true
    }

    loginAdmin(): boolean {
        //JWT with ADMIN user role
        const token = jwt.sign(
            {
                userId: 'mdeleon',
                userRole: 'ADMIN',
            },
            'SECRET'
        ) // change that to an .env file

        console.log('Token:' + token)
        this.res.status(200).json({
            token: token,
        })
        return true
    }

    loginNoUserId(): boolean {
        //JWT without userId
        const token = jwt.sign(
            {
                userRole: 'ADMIN',
            },
            'SECRET'
        ) // change that to an .env file

        console.log('Token:' + token)
        this.res.status(200).json({
            token: token,
        })
        return true
    }
}
