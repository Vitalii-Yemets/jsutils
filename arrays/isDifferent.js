const isDifferent = (array1, array2, predicate) => {
    if (!(Array.isArray(array1) || Array.isArray(array2))) {
        return true
    }

    if (array1.length !== array2.length) {
        return true
    }

    for (let i = 0, l = array1.length; i < l; i++) {
        if (!isDifferent(array1[i], array2[i])) {
            return false
        }
        else if (predicate(array1[i], array2[i])) {
            return false
        }
    }

    return false
}

export default isDifferent