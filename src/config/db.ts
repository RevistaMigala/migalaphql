import mongoose, { ConnectOptions } from "mongoose";

const DATABASE_URL = String(process.env.MONGODB_URL);

const connectDB = (options: ConnectOptions) => {
  try {
    mongoose.connect(DATABASE_URL, options);
  } catch (error) {
    console.error("Db connection error", error);
    throw error;
  }
};

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection failed"));

export default connectDB;
