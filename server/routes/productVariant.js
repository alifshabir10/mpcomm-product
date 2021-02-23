import { Router } from "express";
import provaCtrl from "../controllers/productVariant.controller";

const router = Router ();
router.get('/', provaCtrl.readProva)
router.post('/', provaCtrl.createProva);
router.put('/', provaCtrl.updateProva);
router.delete('/', provaCtrl.deleteProva);
export default (router)