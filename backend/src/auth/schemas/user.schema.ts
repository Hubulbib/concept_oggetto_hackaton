import { Schema, model } from 'mongoose'
import { IUser } from '../interfaces/user.interface'
import Survey from '../../survey/schemas/survey.schema'

const schema = new Schema<IUser>({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    survey: Survey
})

export default model('User', schema)