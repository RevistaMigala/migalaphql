import { ApolloServer } from "@apollo/server";
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";
import plugins from "./plugins";
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
  handlers.createAPIGatewayProxyEventV2RequestHandler()
);
