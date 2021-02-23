import {Router} from 'express';
// import cateCtrl from '../controllers/category.controller'
import indexCtrl from '../controllers/indexController';


const router = Router()

router.get('/', indexCtrl.condition.allCond);
router.get('/:condId', indexCtrl.condition.allCond);
router.put('/:cond_name', indexCtrl.condition.updateCond);
router.delete('/:cond_name', indexCtrl.condition.deleteCond)
router.post('/', indexCtrl.condition.addCond);

export default router;