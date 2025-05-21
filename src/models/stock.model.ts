import { Schema, model, Document, Types } from 'mongoose';
import IStock from '../interface/stock.interface';

const stockSchema = new Schema<IStock>(
    {
        productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        purchasePrice: { type: Number, required: true },
        batchNumber: { type: String },
        expiryDate: { type: Date },
        supplierName: { type: String },
    },
    {
        timestamps: true,
    }
);

const Stock = model<IStock>('Stock', stockSchema);
export default Stock;
