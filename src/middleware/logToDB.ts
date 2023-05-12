import express, { Router,NextFunction, Request, Response } from 'express';
import { LogEntry, logEntrySchema } from '../models/logEntry';
const jwt = require('jsonwebtoken');


export async function logToDB(req: Request, res: Response, next: NextFunction) {
    const now= new Date();
    const token:string = req.headers.authorization?.split(" ")[1] || "";
    const decoded = jwt.verify(token,"SECRET"); //cambiar secret a .env
        
    const logEntry = new LogEntry({
        resourceAccessed: req.url,
        userId: decoded.userId,
        dateCreated: now,
    });
    await logEntry.save();
    console.log(logEntry); 
    next();
 };