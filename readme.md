# Migala Services Gateway

Graphql gateway for the Migala's services.

This project is written in NodeJS and deployed with Serverless Framework in Migala AWS accounts (dev and prod stages).

Includes:

- Demographic Records Api

## Docs

View the docs in [Postman docs](https://documenter.getpostman.com/view/8854000/UUy1eSWQ).

## Dependencies

Install the next dependencies to run this project

- [Node.js](https://nodejs.org/) v14.x

## How to run this project in your local

1. Clone this repository
2. In this repository `config` folder, create a local `env.yml` from the existing `env-default.yml` file and fill the missing variables.

```sh
cp ./config/env-default.yml ./config/env.yml
```

3. Install Node dependencies using npm

```sh
npm i
```

4. Install the local database with the next script

```sh
npm run dynamodb
```

5. Start the service

```sh
npm run dev
```

This will start the following resources:

- Local Gateway at localhost:3000/local/graphql

## How to run the local graphql playground

You can create a public entry point to use the graphql playground and access it in your browser at `localhost:3000/local/graphql`.

If the local client can not connect to the service, please check the url in the playground. In some versions of apollo server the service uses `localhost:3000/graphql` instead of `localhost:3000/local/graphql` and you must change it to make it work.

To do this, you must include an http event in the `/serverless.yml` file:

´´´

# Find the functions section

functions:
graphql:
handler: src/apollo_server.graphqlHandler
events: - http:
path: graphql
method: post
cors: true
private: true

# Add the next lines

    - http:
        path: graphql
        method: get
        cors: true

´´´

## Deployment

This project is being manually deployed actually. Soon it will use CI/CD solution to be defined.

## Collaborators

- David Enríquez: david@migala.mx
