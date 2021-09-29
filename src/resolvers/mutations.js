import {
    createFormResponseResolver as createFormResponse
} from 'Handlers/form_response'


export default {
    Mutation: {
        ...{ createFormResponse },
    },
}
