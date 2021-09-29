const isString = (value) => {
    return (typeof value === "string")
}

const stringLength = (value, min, max) => {
    return (isString(value) && value.length >= min && value.length <= max)
}

const onlyDigits = (value, min, max) => {
    return (isString(value) && /^\d+$/.test(value))
}

const noSpecialChars = (value) => {
    return (isString(value) && /^[A-Za-z0-9]+$/.test(value))
}

const validators = {
    stringLength,
    onlyDigits,
    noSpecialChars,
}

export default validators
