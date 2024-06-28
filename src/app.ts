import express, {Application, NextFunction, Request, Response} from "express";
import {connect} from "mongoose";

const app: Application = express();
const port: number = 3000;



const start = async () => {
    try {
        await connect("mongodb://127.0.0.1:27017");
        app.listen(3000,() => console.log("Server started on port 3000"))
    }
    catch (error){

    console.error(error);
    process.exit(1);
    }
}

start();

module.exports = app;