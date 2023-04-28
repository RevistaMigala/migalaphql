import { ApolloServer } from "@apollo/server";
import { startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";
import middlewareFn from "./apollo-helpers/middleware";
import requestHandler from "./apollo-helpers/handlers";
import { resolvers } from "./resolvers";
import typeDefs from "./schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins,
  introspection: process.env.STAGE === "local",
});

export const handler = startServerAndCreateLambdaHandler(
  server,
  requestHandler,
  { middleware: [middlewareFn] }
);
