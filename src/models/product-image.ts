import mongoose from "mongoose";

const { Schema } = mongoose;

export const productImageSchema = new Schema({
  position: {
    type: Number,
    min: 1,
  },
  url: {
    type: String,
    trim: true,
  },
});

const ProductImage = mongoose.model("ProductImage", productImageSchema);
export default ProductImage;
