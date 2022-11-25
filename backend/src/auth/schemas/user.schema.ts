import { Schema, model } from 'mongoose'
import { Iuser } from '../interfaces/user.interface'

const schema = new Schema<Iuser>({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    survey: {
        name: {type: String, required: true },
        surname: {type: String, required: true},
        country: {type: String, required: true},
        city: {type: String, required: true},
        department: {type: String, required: true},
        job: {type: String, required: true},
        maritalStatus: {type: String, required: true},
        alcohol: {type: String, required: true},
        smoking: {type: String, required: true},
        sport: {type: String, required: true},
        interests: {type: [String], required: true}
    }
})

export default model('User', schema)