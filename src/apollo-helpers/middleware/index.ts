import { middleware } from "@as-integrations/aws-lambda";
import { RequestHandler } from "../handlers";

const middlewareFn: middleware.MiddlewareFn<RequestHandler> = async (event) => {
  return async (result) => {
    result.headers = {
      ...result.headers,
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "OPTIONS,POST,GET",
      "access-control-allow-headers": "Content-Type",
    };
    console.log(result);
  };
};

export default middlewareFn;
