const isString = (value) => {
    return (typeof value === 'string')
}

const stringLength = (value, min, max) => {
    return (isString(value) && value.length >= min && value.length <= max)
}

const onlyDigits = (value) => {
    return (isString(value) && /^\d+$/.test(value))
}

const noSpecialChars = (value) => {
    return (isString(value) && /^[A-Za-z0-9]+$/.test(value))
}

const validEmail = (value) => {
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    return (isString(value) && emailRegex.test(value))
}

const validators = {
    stringLength,
    onlyDigits,
    noSpecialChars,
    validEmail,
}

export default validators
