import express from 'express'
import {connect} from 'mongoose'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import authRouter from './src/auth/routers/auth.router'

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

const app = express()

app.use(express.json())

app.use(cookieParser())
app.use('/api/auth', authRouter)

connect(MONGO_URI)
    .then(() => app.listen(PORT, () => console.log(`Server has been starting on ${PORT}`)))
