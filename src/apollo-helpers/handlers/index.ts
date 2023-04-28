import { handlers } from "@as-integrations/aws-lambda";

const requestHandler = handlers.createAPIGatewayProxyEventV2RequestHandler();

export type RequestHandler = typeof requestHandler;

export default requestHandler;
