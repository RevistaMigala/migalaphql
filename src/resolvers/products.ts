import models from "../models";
import connectDB from "../config/db";

// const products = [
//   {
//     id: "1",
//     title: "Migala 1.1",
//     price: 500,
//   },
//   {
//     id: "2",
//     title: "CICATRICES",
//     price: 200,
//   },
// ];

const resolver = async () => {
  connectDB({ dbName: "love-e-commerce-dev" });
  return await models.Product.find();
};

export default resolver;
