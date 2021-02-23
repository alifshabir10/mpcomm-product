import {Router} from 'express';
import brandCtrl from '../controllers/brand.controller'

const router = Router()

router.get('/', brandCtrl.allBrand);
router.get('/:brandId', brandCtrl.findBrandMethod);
router.post('/', brandCtrl.addBrandMethod);

export default router;