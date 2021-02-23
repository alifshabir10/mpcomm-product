import { Router} from 'express'
import primCtrl from "../controllers/productImages.controller"

const router = Router()

router.get('/', primCtrl.readPrim);
router.post('/', primCtrl.createPrim);
router.put('/', primCtrl.updatePrim);
router.delete('/', primCtrl.deletePrim);

export default (router)