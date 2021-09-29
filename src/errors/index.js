import defaultErrorHandler from 'Errors/default'
import validationErrorHandler from 'Errors/validation'
import dynamoErrorHandler from 'Errors/dynamo'

const formatError = (serverError) => {
    const errorHandler = handlers[serverError.message] || handlers.default

    return errorHandler(serverError)
}

const handlers = {
    'Validation error': validationErrorHandler,
    'The conditional request failed': dynamoErrorHandler,
    default: defaultErrorHandler,
}

export default formatError
