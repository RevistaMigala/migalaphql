import { GraphQLScalarType, Kind } from 'graphql'
import { UserInputError } from 'apollo-server-lambda'
import validators from 'Utils/validators'

const electorKeyValidator = (value) => {
    if (validators.stringLength(value, 18, 18) && validators.noSpecialChars(value)) {
        return value
    }

    throw new UserInputError('Invalid argument value')
}

const electorKeyScalar = new GraphQLScalarType({
    name: 'ElectorKey',
    description: 'Valid electoral key, 18 characters',
    serialize: electorKeyValidator,
    parseValue: electorKeyValidator,
    parseLiteral (ast) {
        if (ast.kind === Kind.STRING) {
            return electorKeyValidator(ast.value)
        }
        throw new UserInputError('Invalid argument value')
    },
})

export default electorKeyScalar
