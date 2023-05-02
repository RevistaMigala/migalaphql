import mongoose from "mongoose";

const { Schema } = mongoose;

const imageSchema = new Schema({
  url: {
    type: String,
    trim: true,
  },
});

const Image = mongoose.model("Image", imageSchema);
export default Image;
