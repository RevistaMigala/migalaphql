# Migala Services Gateway

Graphql gateway for the Migala's services.

This project is written in NodeJS and deployed with Serverless Framework in Migala AWS accounts (dev and prod stages).

Includes:

- Estore grapqhql services

## Docs

Pending

Products query:

```
query {
    Products {
        id
        title
        price
        description
        mainImage {
            id
            url
        }
        images {
            id
            url
            position
        }
    }
}
```

## Dependencies

Install the next dependencies to run this project

- [Node.js](https://nodejs.org/) v16.x

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

4. Start the service

```sh
npm start
```

This will start the following resources:

- Local Gateway at localhost:3010/graphql

## How to run the local graphql playground

Use apollo studio sandbox explorer: https://studio.apollographql.com/sandbox/explorer


## Deployment

This project is being manually deployed actually. Soon it will use CI/CD solution to be defined.

## Collaborators

- David Enríquez: david@migala.mx
