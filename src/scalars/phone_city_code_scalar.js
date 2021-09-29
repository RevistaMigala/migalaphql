import { GraphQLScalarType, Kind } from 'graphql'
import { UserInputError } from 'apollo-server-lambda'
import validators from 'Utils/validators'

const phoneCityCodeValidator = (value) => {
    if (validators.stringLength(value, 2, 3) && validators.onlyDigits(value)) {
        return value
    }

    throw new UserInputError('Invalid argument value')
}

const phoneCityCodeScalar = new GraphQLScalarType({
    name: 'PhoneCityCode',
    description: 'Valid phone city code between 2 and 3 digits length',
    serialize: phoneCityCodeValidator,
    parseValue: phoneCityCodeValidator,
    parseLiteral (ast) {
        if (ast.kind === Kind.STRING) {
            return phoneCityCodeValidator(ast.value)
        }
        throw new UserInputError('Invalid argument value')
    },
})

export default phoneCityCodeScalar
