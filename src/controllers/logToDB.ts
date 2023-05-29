import { NextFunction, Request, Response } from 'express'
import { LogEntry } from '../models/logEntry'
import jwt from 'jsonwebtoken'
import { TokenInterface } from '../interfaces/token'

export class LogController {
    res: Response
    req: Request
    next: NextFunction
    

    constructor(req: Request, res: Response, next: NextFunction) {
        this.res = res
        this.req = req
        this.next = next
    }

    

    async logToDB() {
        let decoded:TokenInterface;
        const now = new Date()
        const token: string =
            this.req.headers.authorization?.split(' ')[1] || ''
           

            try {
                decoded = jwt.verify(token, 'SECRET') as TokenInterface
            }
            catch{
                decoded = {userRole:"Guest",userId:"NoUserId"}
            }

            /*
            if (token !== '')
{
     decoded = jwt.verify(token, 'SECRET') as TokenInterface //cambiar secret a .env
}        else
{
     decoded = {userRole:"Guest",userId:"NoUserId"}
} */

        const logEntry = new LogEntry({
            resourceAccessed: this.req.url,
            userId: decoded.userId,
            dateCreated: now,
        })
        await logEntry.save()
        console.log('- Logged to DB')
        this.next()
    }
}
