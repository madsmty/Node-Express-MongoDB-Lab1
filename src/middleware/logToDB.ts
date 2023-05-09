import express, { Router,NextFunction, Request, Response } from 'express';

export function logToDB(req: Request, res: Response, next: NextFunction) {
    console.log("Write to MongoDB"); 
    next();
 };