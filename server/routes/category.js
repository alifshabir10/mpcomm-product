import {Router} from 'express';
import cateCtrl from '../controllers/category.controller'
// import IndexController from '../controllers/IndexController';

const router = Router ()

router.get('/', cateCtrl.allCategory)
router.get('/:cate_id', cateCtrl.findCategoryMethod);
// router.post('/', cateCtrl.addCategoryMethod);

export default (router);