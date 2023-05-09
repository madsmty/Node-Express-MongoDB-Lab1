import express, { Router,NextFunction, Request, Response } from 'express';
const jwt = require('jsonwebtoken');

exports.get_jwt = (req: Request, res: Response, next: NextFunction)=> {
   
    const token = jwt.sign( {
        userId:"mdeleon",
        userRole:"ADMIN"
    }, "SECRET"); // change that to an .env file

    console.log('Token:' + token);
    res.status(200).json(token)
    return token;
};