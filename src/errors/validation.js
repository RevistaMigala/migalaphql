const validationErrorHandler = (serverError) => {
    const error = new Error(serverError.message)
    error.path = serverError.path
    error.extensions = {
        code: serverError.extensions.code,
        serviceName: serverError.extensions.serviceName,
        query: serverError.extensions.query,
        variables: serverError.extensions.variables,
        invalidArgs: serverError.extensions.invalidArgs,
    }
    return error
}

export default validationErrorHandler
