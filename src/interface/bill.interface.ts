import { Document, Types } from "mongoose";

export interface IBillItem {
    productId: Types.ObjectId;
    quantity: number;
    unit: string;
    sellingPrice: number;
    vatPercentage: number;
    total: number;
}

export interface IBill extends Document {
    items: IBillItem[];
    totalAmount: number;
    offPercentage: number;
    totalVAT: number;
    customerName?: string;
    createdAt: Date;
    updatedAt: Date;
}