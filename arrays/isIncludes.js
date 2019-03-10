const isIncludes = (array, element) => {
    if (typeof element === 'function') {
        return array.some(element)
    } else {
        return array.some(item => item === element)
    }
}

export default isIncludes