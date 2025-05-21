import { Document, Types } from "mongoose";

export interface IStock extends Document {
    productId: Types.ObjectId; // Reference to the Product
    quantity: number; // quantity added
    purchasePrice: number; // per unit
    batchNumber?: string;
    expiryDate?: Date;
    supplierName?: string;
    createdAt: Date;
    updatedAt: Date;
}

export default IStock;