import mongoose, { Document, Schema } from "mongoose";

interface IProduct {
  name: string;
  price: number;
  featured?: boolean;
  rating?: number;
  company?: string;
}

type ProductDocument = Document & IProduct;

const productSchema: Schema<ProductDocument> = new Schema<ProductDocument>(
  {
    name: {
      type: String,
      required: [true, "Product name must be provided"],
    },
    price: {
      type: Number,
      required: [true, "Price must be provided"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 4.9,
    },
    company: {
      type: String,
      enum: {
        values: ["apple", "samsung", "dell", "mi"],
        message: `{VALUE} is not supported`,
      },
    },
  },
  { timestamps: true },
);

const Product = mongoose.model<ProductDocument>("Product", productSchema);
export default Product;
