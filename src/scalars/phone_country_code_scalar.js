import { GraphQLScalarType, Kind } from 'graphql'
import { UserInputError } from 'apollo-server-lambda'
import validators from 'Utils/validators'

const phoneCountryCodeValidator = (value) => {
    if (validators.stringLength(value, 1, 3) && validators.onlyDigits(value)) {
        return value
    }

    throw new UserInputError('Invalid argument value')
}

const phoneCountryCodeScalar = new GraphQLScalarType({
    name: 'PhoneCountryCode',
    description: 'Valid phone country code between 1 and 3 digits length',
    serialize: phoneCountryCodeValidator,
    parseValue: phoneCountryCodeValidator,
    parseLiteral (ast) {
        if (ast.kind === Kind.STRING) {
            return phoneCountryCodeValidator(ast.value)
        }
        throw new UserInputError('Invalid argument value')
    }
})

export default phoneCountryCodeScalar
