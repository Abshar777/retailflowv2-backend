import { Document } from "mongoose";
import IStock from "./stock.interface";

export interface IProduct extends Document {
    name: string;
    barcode: string;
    category: string;
    brand?: string;
    unit: string; // e.g., 'kg', 'ltr', 'pcs'
    price: number; // base price
    vatPercentage: number; // e.g., 5
    stockQuantity: number;
    isTaxIncluded: boolean; // true if price includes VAT
    createdAt: Date;
    updatedAt: Date;
    stocks: IStock[];
}

export default IProduct;