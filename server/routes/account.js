import { Router } from "express";
import accountCtrl from "../controllers/account.controller";

const router = Router()
router.get('/', accountCtrl.readAccount)

export default (router)