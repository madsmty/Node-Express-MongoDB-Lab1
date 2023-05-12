import express, { Router,NextFunction, Request, Response } from 'express';
import { LogEntry, logEntrySchema } from '../models/logEntry';
import jwt from 'jsonwebtoken';

export interface TokenInterface {
    userId: string;
    userRole: string;
}

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
    console.log(logEntry); 
    next();
 };