import { Router } from "express";
import StockController from "../controller/stock.controller";
import authMiddilware from "../middlewares/auth.middileware";

const router = Router();
const stockController = new StockController();

/** @Private all routes */

router.post('/',authMiddilware);

export default router;
