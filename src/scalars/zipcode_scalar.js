import { GraphQLScalarType, Kind } from 'graphql'
import { UserInputError } from 'apollo-server-lambda'
import validators from 'Utils/validators'

const zipcodeValidator = (value) => {
    if (validators.stringLength(value, 5, 5) && validators.onlyDigits(value)) {
        return value
    }

    throw new UserInputError('Invalid argument value')
}

const zipcodeScalar = new GraphQLScalarType({
    name: 'Zipcode',
    description: 'Valid mexican zipcode',
    serialize: zipcodeValidator,
    parseValue: zipcodeValidator,
    parseLiteral (ast) {
        if (ast.kind === Kind.STRING) {
            return zipcodeValidator(ast.value)
        }
        throw new UserInputError('Invalid argument value')
    }
})

export default zipcodeScalar
