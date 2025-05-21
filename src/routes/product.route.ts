import { Router } from "express";
import ProductController from "../controller/product.controller";
import authMiddilware from "../middlewares/auth.middileware";

const router = Router();
const productController = new ProductController();

/** @Private all routes */

router.post('/',authMiddilware);

export default router;
