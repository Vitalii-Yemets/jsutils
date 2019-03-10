const isInclude = (array, selector) => {
    if (typeof selector === 'function') {
        return array.some(selector)
    } else {
        return array.some(item => item === selector)
    }
}

export default isInclude