import * as AWS from 'aws-sdk'
import { tables } from 'Data/constants'


export default class DynamoClient {
    constructor () {
        this.docClient = new AWS.DynamoDB.DocumentClient({
            apiVersion: '2012-08-10',
            endpoint: process.env.STAGE === 'local' ?
                'http://localhost:8000':
                'https://dynamodb.us-east-1.amazonaws.com',
            region: process.env.REGION,
        })
        this.tables = tables
    }

    putItem ({ table, item, options }) {
        const params = {
            TableName : table,
            Item: item,
            ...options,
        }

        return this.docClient.put(params).promise()
    }
}
