import express, { Router,NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

//Cambiar a clases

export const get_jwt = (req: Request, res: Response, next: NextFunction)=> {
   // JWT with regular user role
    const token = jwt.sign( {
        userId:"mdeleon",
        userRole:"user"
    }, "SECRET"); // change that to an .env file

    console.log('Token:' + token);
    res.status(200).json({
        token:token})
    return res;
};

export const get_jwt_admin = (req: Request, res: Response, next: NextFunction)=> {
    //JWT with ADMIN user role
    const token = jwt.sign( {
        userId:"mdeleon",
        userRole:"ADMIN"
    }, "SECRET"); // change that to an .env file

    console.log('Token:' + token);
    res.status(200).json({
        token:token})
    return res;
};

export const get_jwt_noUserId = (req: Request, res: Response, next: NextFunction)=> {
    //JWT without userId
    const token = jwt.sign( {
        userRole:"ADMIN"
    }, "SECRET"); // change that to an .env file

    console.log('Token:' + token);
    res.status(200).json({
        token:token})
    return res;
};