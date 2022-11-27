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

    async getStatus(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await SurveyService.getStatus(req['user'].id)

            return res.status(200).json({message: "", status: response})
        } catch (err) {
            next(err)
        }
    }

    async getForm(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await SurveyService.getForm(req['user'].id)

            return res.status(200).json({message: "", survey: response})
        } catch (err) {
            next(err)
        }
    }

    async getBase(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await SurveyService.getBase(req['user'].id)

            return res.status(200).json({message: "", base: response})
        } catch (err) {
            next(err)
        }
    }
}

export default new SurveyController()