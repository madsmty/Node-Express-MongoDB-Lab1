import express, {Application } from "express";
import {connect} from "mongoose";

const app: Application = express();
const port = 3000;

const start = async () => {
    try {
        await connect('mongodb://127.0.0.1:27017/logs')
        app.listen(3000, () => {
            console.log(
                `Server started on port:${port}. NODE_ENV:${process.env.NODE_ENV}`
            )
            app.emit("appStarted")
        }
        )
    } catch (error) {
        console.error(error)
        app.emit('appError')
        process.exit(1)
        
    }
}

start()

export default app
