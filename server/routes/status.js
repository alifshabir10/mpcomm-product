import { Router} from 'express'
import statusController from '../controllers/status.controller'

const router = Router()
router.get('/', statusController.readStatus)

export default (router)