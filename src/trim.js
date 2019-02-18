export const rtrim = (str, chars) => {
    const index = str.lastIndexOf(chars)
    return index > 0 ? str.substr(0, index + 1) : str
}

export const ltrim = (str, chars) => str.replace(chars ? new RegExp(`^[${chars}]+`, 'g') : /^\s+/g, '')

export const trim = (str, chars) => rtrim(ltrim(str, chars), chars)

module.exports = {
    rtrim,
    ltrim,
    trim
}
