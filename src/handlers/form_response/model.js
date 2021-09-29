import DynamoClient from 'Services/dynamo_client'
import { tables } from 'Data/constants'


export default class FormResponse {
    constructor (formResponseInput) {
        this.formResponse = formResponseInput
        this.formResponse.createdAt = Date.now()
        this.dynamo = new DynamoClient()
    }

    save () {
        const params = {
            table: this.dynamo.tables.responsesTable,
            item: this.formResponse,
            options: {
                ConditionExpression: 'attribute_not_exists(email)'
            }
        }

        return this.dynamo.putItem(params)
    }


    json () {
        return this.formResponse
    }
}
