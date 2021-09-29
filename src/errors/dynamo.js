import { translations } from 'Data/constants'


const dynamoErrorHandler = (dynamoError) => {
    const error = new Error(dynamoError)
    error.message = 'Database operation error'
    error.path = dynamoError.path
    error.extensions = {
        code: dynamoError.extensions.exception.code,
        translation: translations[dynamoError.extensions.exception.code]
            ? translations[dynamoError.extensions.exception.code]
            : translations.default,
        retryable: dynamoError.extensions.exception.retryable,
    }
    return error
}

export default dynamoErrorHandler
