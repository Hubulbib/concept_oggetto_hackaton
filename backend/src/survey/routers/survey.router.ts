import {Router} from 'express'
import surveyController from '../controllers/survey.controller'

const router = Router()

router.post('/create', surveyController.create)

export default router