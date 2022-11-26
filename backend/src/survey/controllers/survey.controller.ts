import {NextFunction, Request, Response} from 'express'
import SurveyService from '../services/survey.service'

class SurveyController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body

            const response = await SurveyService.create(data, req['user'].id)

            return res.status(201).json({message: response})
        } catch (err) {
            next(err)
        }
    }
}

export default new SurveyController()