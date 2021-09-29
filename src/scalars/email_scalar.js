import { GraphQLScalarType, Kind } from 'graphql'
import { UserInputError } from 'apollo-server-lambda'
import validators from 'Utils/validators'

const emailValidator = (value) => {
    if (validators.validEmail(value)) {
        return value
    }

    throw new UserInputError(`Invalid argument value: ${value}`)
}

const emailScalar = new GraphQLScalarType({
    name: 'Email',
    description: 'A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/.',
    serialize: emailValidator,
    parseValue: emailValidator,
    parseLiteral (ast) {
        if (ast.kind === Kind.STRING) {
            return emailValidator(ast.value)
        }
        throw new UserInputError(`Invalid argument value: ${ast.value}`)
    }
})

export default emailScalar
