import {ISurvey} from '../../survey/interfaces/survey.interface'

export interface IUser {
    username: string
    password: string
    survey: ISurvey
}