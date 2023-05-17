import { NextFunction, Request, Response } from 'express'
import { LogController } from '../controllers/logToDB'

export const logToDB = (req: Request, res: Response, next: NextFunction) => {
    const logController = new LogController(req, res, next)
    return logController.logToDB()
}
