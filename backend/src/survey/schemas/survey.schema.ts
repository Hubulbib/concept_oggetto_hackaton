import { Schema } from 'mongoose'
import { ISurvey } from '../interfaces/survey.interface'

const schema = new Schema<ISurvey>({
    photo: {type: String},
    name: {type: String, required: true },
    surname: {type: String, required: true},
    age: {type: Number, required: true},
    city: {type: String, required: true},
    department: {type: String, required: true},
    job: {type: String, require: true},
    maritalStatus: {type: String, required: true},
    alcohol: {type: String, required: true},
    smoking: {type: String, required: true},
    sport: {type: String, required: true},
    fact: {type: String, required: true}
})

export default schema