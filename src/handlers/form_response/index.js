import FormResponse from './model'


export const createFormResponseResolver = async (root, args, context, info) => {
    console.log('Query', info.fieldName)
    console.log('Input', args)

    const formResponse = new FormResponse(args.input)
    await formResponse.save()

    return formResponse.json()
}
