import { Schema, model } from 'mongoose';
import { IBill } from '../interface/bill.interface';
import { IBillItem } from '../interface/bill.interface';


const billItemSchema = new Schema<IBillItem>(
  {
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
    sellingPrice: { type: Number, required: true },
    vatPercentage: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  { _id: false }
);

const billSchema = new Schema<IBill>(
  {
    items: [billItemSchema],
    totalAmount: { type: Number, required: true },
    offPercentage: { type: Number, default: 0 },
    totalVAT: { type: Number, required: true },
    customerName: { type: String },
  },
  {
    timestamps: true,
  }
);

const Bill = model<IBill>('Bill', billSchema);
export default Bill;
