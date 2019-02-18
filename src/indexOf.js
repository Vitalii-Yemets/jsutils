module.exports.indexOf = (arr, filterCallback) => {
    let result
    return arr.some(function (v, i) { result = i; return filterCallback(v) }) ? result : undefined
}