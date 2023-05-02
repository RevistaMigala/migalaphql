import mongoose from "mongoose";

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
});

const Product = mongoose.model("Product", productSchema);
export default Product;
