import {Router} from 'express'
import ActivityController from '../controllers/activity.controller'

const router = Router()

router.get('/', ActivityController.getCards)

export default router