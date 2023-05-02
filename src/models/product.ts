import mongoose from "mongoose";
import { productImageSchema } from "./product-image";

const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    trim: true,
  },
  description: {
    type: String,
  },
  images: [productImageSchema],
  mainImage: productImageSchema,
});

const Product = mongoose.model("Product", productSchema);
export default Product;
