import { GraphQLScalarType, Kind } from 'graphql'
import { UserInputError } from 'apollo-server-lambda'
import validators from 'Utils/validators'

const electoralDistrictValidator = (value) => {
    if (validators.stringLength(value, 1, 3) && validators.onlyDigits(value)) {
        return value
    }

    throw new UserInputError('Invalid argument value')
}

const electoralDistrictScalar = new GraphQLScalarType({
    name: 'ElectoralDistrict',
    description: 'Valid electoral district, 1 to 3 numeric characters',
    serialize: electoralDistrictValidator,
    parseValue: electoralDistrictValidator,
    parseLiteral (ast) {
        if (ast.kind === Kind.STRING) {
            return electoralDistrictValidator(ast.value)
        }
        throw new UserInputError('Invalid argument value')
    }
})

export default electoralDistrictScalar
