import express, { Application } from 'express'
import { logToDB } from './middleware/logToDB'
import { connect } from 'mongoose'
import { usersRouter } from './routes/users'
import { loginRouter } from './routes/login'

const app: Application = express()
const port = 3000

const usersRoutes = usersRouter
const loginRoutes = loginRouter

app.use(logToDB)

app.use('/users', usersRoutes)
app.use('/login', loginRoutes)
//implementar error handling para rutas inexistentes

const start = async () => {
    try {
        await connect('mongodb://127.0.0.1:27017/logs')
        app.listen(3000, () => console.log('Server started on port: ' + port))
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

start()

module.exports = app
