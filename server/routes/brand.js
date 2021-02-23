import {Router} from 'express';
// import brandCtrl from '../controllers/brand.controller'
import indexController from '../controllers/indexController';

const router = Router()

router.get('/', indexController.brand.allBrand);
router.get('/:brandId', indexController.brand.allBrand);
router.post('/', indexController.brand.addBrandMethod);
router.delete('/:brand_id', indexController.brand.deleteBrand);
router.put('/:brand_id', indexController.brand.updateBrand)


export default router;