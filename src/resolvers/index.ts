import { Resolvers } from "../generated/graphql";
import ProductsResolver from "./products";

export const resolvers: Resolvers = {
  Query: {
    Products: ProductsResolver,
  },
};
