import { Router } from "express";
import BillController from "../controller/bill.controller";
import authMiddilware from "../middlewares/auth.middileware";

const router = Router();
const billController = new BillController();

/** @Private all routes */

router.post('/',authMiddilware);

export default router;
