import { NextFunction, Request, Response } from 'express';
import { LogEntry } from '../models/logEntry';
import jwt from 'jsonwebtoken';
import { TokenInterface } from '../interfaces/token';


export async function logToDB(req: Request, res: Response, next: NextFunction) {
    const now= new Date();
    const token:string = req.headers.authorization?.split(" ")[1] || "";
    const decoded = jwt.verify(token,"SECRET") as TokenInterface; //cambiar secret a .env
        
    const logEntry = new LogEntry({
        resourceAccessed: req.url,
        userId: decoded.userId,
        dateCreated: now,
    });
    await logEntry.save();
    console.log("- Logged to DB"); 
    next();
 };