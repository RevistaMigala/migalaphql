import { ApolloServer, gql } from 'apollo-server-lambda'
import { buildFederatedSchema } from '@apollo/federation'
import { mergeTypes } from 'merge-graphql-schemas'
import {
    ApolloServerPluginUsageReportingDisabled,
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginInlineTraceDisabled
} from 'apollo-server-core'
import SCHEMA from 'Schema/schema'
import QUERY from 'Schema/queries'
import MUTATION from 'Schema/mutations'
import TYPES from 'Types'
import resolvers from 'Resolvers'
import formatError from 'Errors'


const typeDefs = gql`${mergeTypes([
    SCHEMA,
    QUERY,
    MUTATION,
    TYPES
])}`

const server = new ApolloServer({
    schema: buildFederatedSchema([{
        typeDefs,
        resolvers,
    }]),
    context: ({ event, context }) => ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context,
    }),
    debug: false,
    formatError: (err) => formatError(err),
    plugins: [
        ApolloServerPluginUsageReportingDisabled(),
        ApolloServerPluginInlineTraceDisabled(),
        ApolloServerPluginLandingPageGraphQLPlayground()
    ],
})

export const graphqlHandler = server.createHandler({
    cors: {
        origin: '*',
    },
})
