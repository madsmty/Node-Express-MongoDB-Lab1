import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { TokenInterface } from '../interfaces/token'

export const jwtValidator = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log('Check JWT')
    try {
        const token: string = req.headers.authorization?.split(' ')[1] || ''
        //console.log(token)
        const decoded = jwt.verify(token, 'SECRET') as TokenInterface //cambiar secret a .env
        //console.log(decoded);
        if (decoded.userRole == 'ADMIN' && decoded.userId) {
            console.log('- Token passed')
            next()
        } else {
            console.log('- Token failed')
            res.status(401).json({ message: 'Incorrect JWT' })
        }
    } catch {
        console.log('- Token Failed')
        res.status(401).json({ message: 'Incorrect JWT' })
    }
}
