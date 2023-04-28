import { ApolloServerPluginLandingPageDisabled } from "@apollo/server/plugin/disabled";
import LogRequest from "./log-request";

export default [ApolloServerPluginLandingPageDisabled(), LogRequest];
