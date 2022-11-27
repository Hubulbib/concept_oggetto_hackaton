import {Router} from 'express'
import surveyController from '../controllers/survey.controller'

const router = Router()

router.post('/create', surveyController.create)

router.get('/get', surveyController.getForm)

router.get('/status', surveyController.getStatus)

router.get('/base', surveyController.getBase)

export default router