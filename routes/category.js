import {Router} from 'express';
import cateCtrl from '../controllers/category.controller'

const router = Router()

router.get('/', cateCtrl.allCategory);
router.get('/:cateId', cateCtrl.findCategoryMethod);
// router.post('/', cateCtrl.addBrandMethod);

export default router;