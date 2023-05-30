'use strict'
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value)
                  })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value))
                } catch (e) {
                    reject(e)
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value))
                } catch (e) {
                    reject(e)
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected)
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            )
        })
    }
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const logToDB_1 = require('./middleware/logToDB')
const mongoose_1 = require('mongoose')
const app = (0, express_1.default)()
const port = 3000
const usersRoutes = require('./routes/users')
const loginRoutes = require('./routes/login')
// Implementar prettier, lodash si es que aplica
//app.use(checkJWT);
app.use(logToDB_1.logToDB)
app.use('/users', usersRoutes)
app.use('/login', loginRoutes)
//implementar error handling para rutas inexistentes
const start = () =>
    __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, mongoose_1.connect)('mongodb://127.0.0.1:27017')
            app.listen(3000, () => console.log('Server started on port 3000'))
        } catch (error) {
            console.error(error)
            process.exit(1)
        }
    })
start()
module.exports = app
