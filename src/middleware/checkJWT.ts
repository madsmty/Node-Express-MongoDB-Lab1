import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { TokenInterface } from '../classes/token';


export const checkJWT = (req: Request ,res:Response,next: NextFunction) => {
    console.log("Check JWT"); 
    try {
        const token:string = req.headers.authorization?.split(" ")[1] || "";
        console.log(token)
        const decoded = jwt.verify(token,"SECRET") as TokenInterface; //cambiar secret a .env
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

