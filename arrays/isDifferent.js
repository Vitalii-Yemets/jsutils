const isDifferent = (arr1, arr2, predicate) => {
    if (!(Array.isArray(arr1) || Array.isArray(arr2))) {
        return true
    }

    if (arr1.length !== arr2.length) {
        return true
    }

    for (let i = 0, l = arr1.length; i < l; i++) {
        if (!isDifferent(arr1[i], arr2[i])) {
            return false
        }
        else if (predicate(arr1[i], arr2[i])) {
            return false
        }
    }

    return false
}