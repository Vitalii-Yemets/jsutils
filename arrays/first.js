const first = (array, filterCallback) => {
    if (typeof filterCallback === 'function') {
        let result
        return array.some(v => { result = v; return filterCallback(v) }) ? result : null
    } else {
        return array[0]
    }
}

export default first