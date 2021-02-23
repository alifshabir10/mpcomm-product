import {Router} from 'express';
import indexCtrl from '../controllers/IndexController';
// import cateImg from '../controllers/categoryImg.controller';

const router = Router()

router.get('/', indexCtrl.categoryImg.allCateImg);
router.get('/:cateImgId', indexCtrl.categoryImg.allCateImg);
router.put('/:caim_id', indexCtrl.categoryImg.updateCateImg);
router.delete('/:caim_id', indexCtrl.categoryImg.deleteCateImg)
router.post('/', indexCtrl.categoryImg.addCateImg);

export default (router)