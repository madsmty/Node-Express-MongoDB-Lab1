import express, { Router,NextFunction, Request, Response } from 'express';
const jwt = require('jsonwebtoken');

module.exports = (req: Request ,res:Response,next: NextFunction) => {
    console.log("Check JWT"); 
    try {
        const token:string = req.headers.authorization?.split(" ")[1] || "";
        console.log(token)
        const decoded = jwt.verify(token,"SECRET"); //cambiar secret a .env
        console.log(decoded);
        if (decoded.userRole == "ADMIN" && decoded.userId) {
            next();
        }
        else {
            res.status(401).json({message:"Incorrect JWT"})
        } 
    }
    catch {
        console.log("JWT Error")
        res.status(401).json({message:"Incorrect JWT"})
    }    

};

