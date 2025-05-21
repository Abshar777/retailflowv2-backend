import { Model } from "mongoose";
import IStock from "../interface/stock.interface";
import Stock from "../models/stock.model";

/** @Controller */
export class StockController {
    private readonly stockModel: Model<IStock>;

    constructor() {
        this.stockModel = Stock;
    }
}

export default StockController;