import { Model } from "mongoose";
import Product from "../models/product.model";
import IProduct from "../interface/product.interface";

/** @Controller */
export class ProductController {
    private readonly productModel: Model<IProduct>;

    constructor() {
        this.productModel = Product;
    }
}

export default ProductController;