const indexOf = (array, filter) => {
    let result
    return array.some(function (v, i) { result = i; return filter(v) }) ? result : -1
}

export default indexOf