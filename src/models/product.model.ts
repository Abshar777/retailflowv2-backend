import { Schema, model } from 'mongoose';
import IProduct from '../interface/product.interface';

const productSchema = new Schema<IProduct>(
    {
        name: { type: String, required: true },
        barcode: { type: String, required: true, unique: true },
        category: { type: String, required: true },
        brand: { type: String },
        unit: { type: String, required: true, default: "pcs", enum: ["pcs", "kg", "ltr", "g", "ml"] },
        price: { type: Number, required: true, default: 0 },
        vatPercentage: { type: Number, default: 5 }, // UAE VAT
        stockQuantity: { type: Number, required: true, default: 0 },
        isTaxIncluded: { type: Boolean, default: true },
        stocks: [{ type: Schema.Types.ObjectId, ref: 'Stock' }],
    },
    {
        timestamps: true,
    }
);

const Product = model<IProduct>('Product', productSchema);
export default Product;
