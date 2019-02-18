module.exports.first = (arr, filterCallback) => {
    if (typeof filterCallback === 'function') {
        let result
        return arr.some(v => { result = v; return filterCallback(v) }) ? result : undefined
    } else {
        return arr[0]
    }
}