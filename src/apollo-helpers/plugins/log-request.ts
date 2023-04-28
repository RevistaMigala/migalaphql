import { ApolloServerPlugin } from "@apollo/server";

const requestDidStart: ApolloServerPlugin["requestDidStart"] = async (
  requestContext
) => {
  console.log(requestContext.request);
};

export default {
  requestDidStart,
};
