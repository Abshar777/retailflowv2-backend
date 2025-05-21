import { Model } from "mongoose";
import { IBill } from "../interface/bill.interface";
import Bill from "../models/bill.model";

/** @Controller */
export class BillController {
    private readonly billModel: Model<IBill>;

    constructor() {
        this.billModel = Bill;
    }
}

export default BillController;