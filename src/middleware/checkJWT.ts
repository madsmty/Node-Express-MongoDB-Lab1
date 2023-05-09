import express, { Router,NextFunction, Request, Response } from 'express';

export function checkJWT(req: Request, res: Response, next: NextFunction) {
    console.log("Check JWT"); 
    console.log("- If JWT valid: next()");
    console.log("- else, response status = 401")
    next();
 };
