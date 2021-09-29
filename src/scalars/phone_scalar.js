import { GraphQLScalarType, Kind } from 'graphql'
import { UserInputError } from 'apollo-server-lambda'
import validators from 'Utils/validators'

const phoneValidator = (value) => {
    if (validators.stringLength(value, 7, 13) && validators.onlyDigits(value)) {
        return value
    }

    throw new UserInputError('Invalid argument value')
}

const phoneScalar = new GraphQLScalarType({
    name: 'Phone',
    description: 'Valid phone number, only digits between 7 and 13 length',
    serialize: phoneValidator,
    parseValue: phoneValidator,
    parseLiteral (ast) {
        if (ast.kind === Kind.STRING) {
            return phoneValidator(ast.value)
        }
        throw new UserInputError('Invalid argument value')
    }
})

export default phoneScalar
