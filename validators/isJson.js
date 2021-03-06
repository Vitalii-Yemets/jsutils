const isJson = str => {
    let parsedStr = str
    try {
        parsedStr = JSON.parse(str)
    } catch {
        return false
    }
    return typeof parsedStr === 'object'
}

export default isJson