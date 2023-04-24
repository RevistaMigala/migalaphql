import mongoose, { ConnectOptions } from "mongoose";

const DATABASE_URL = String(process.env.MONGODB_URL);

const connectDB = (options: ConnectOptions) => {
  try {
    mongoose.connect(DATABASE_URL, options);
    console.log("connected to db" + ` ${options?.dbName || "default"}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection failed"));

export default connectDB;
