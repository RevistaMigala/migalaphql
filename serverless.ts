import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "migala-services-gateway",
  plugins: ["serverless-plugin-typescript", "serverless-offline"],
  provider: {
    name: "aws",
    stage: "${opt:stage, 'dev'}",
    runtime: "nodejs16.x",
    region: "us-east-1",
    versionFunctions: false,
    deploymentBucket: "${self:provider.stage}-migala-deployments",
    profile: "migala",
    environment: {
      STAGE: "${self:provider.stage}",
      MONGODB_URL: "${env:MONGODB_URL}",
    },
    httpApi: {
      cors: true,
    },
  },
  custom: {
    "serverless-offline": {
      httpPort: 3010,
      lambdaPort: 3011,
      useChildProcesses: true,
    },
  },
  functions: {
    graphql: {
      handler: "src/index.handler",
      memorySize: 256,
      timeout: 10,
      logRetentionInDays: 7,
      events: [
        {
          httpApi: {
            method: "POST",
            path: "/graphql",
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
