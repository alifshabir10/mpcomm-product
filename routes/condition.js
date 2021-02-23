import {Router} from 'express';
import condCtrl from '../controllers/condition.controller'

const router = Router()

router.get('/', condCtrl.allCondition);
router.get('/:condId', condCtrl.findConditionMethod);
// router.post('/', condCtrl.addBrandMethod);

export default router;