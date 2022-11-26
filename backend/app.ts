import express from 'express'
import {connect} from 'mongoose'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import authRouter from './src/auth/routers/auth.router'
import surveyRouter from './src/survey/routers/survey.router'
import authMiddleware from './src/auth/middlewares/auth.middleware'
import errorMiddleware from './src/auth/middlewares/error.middleware'

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

// Создание приложения
const app = express()

app.use(express.json())

app.use(cookieParser())
app.use('/api/auth', authRouter)
app.use('/api/survey', authMiddleware, surveyRouter)

app.use(errorMiddleware)

connect(MONGO_URI)
    .then(() => app.listen(PORT, () => console.log(`Server has been starting on ${PORT}`)))
