import {NextFunction, Request, Response} from 'express'
import ActivityService from '../services/activity.service'

class ActivityController {

    async getCards (req: Request, res: Response, next: NextFunction) {
        try {
            const response = await ActivityService.getCards(req['user'].id)

            return res.json({message: "", response})
        } catch (err) {
            next(err)
        }
    }

}

export default new ActivityController()