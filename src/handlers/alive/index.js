export const aliveResolver = async (root, args, context, info) => {
    console.log('Query', info.fieldName)
    console.log('Input', args)

    return {
        statusCode: 200,
        message: 'Its aliveeeee!',
    }
}
