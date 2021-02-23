import {Router} from 'express';
import cateImgCtrl from '../controllers/categoryImg.controller'

const router = Router()

router.get('/', cateImgCtrl.allCategoryImg);
router.get('/:cateImgId', cateImgCtrl.findCategoryImgMethod);
// router.post('/', cateImgCtrl.addBrandMethod);

export default router;