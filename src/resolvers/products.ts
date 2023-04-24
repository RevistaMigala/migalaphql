import models from "../models";
import connectDB from "../config/db";

const resolver = async () => {
  connectDB({ dbName: "love-e-commerce-dev" });
  return await models.Product.find();
};

export default resolver;
