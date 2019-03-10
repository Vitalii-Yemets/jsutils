const and = (array1, array2) => {
    if (!(Array.isArray(array1) && Array.isArray(array2))) {
        throw new TypeError()
    }

    const lenArray1 = array1.length
    
    const resultArray = []

    for (let index = 0; index < lenArray1; index++) {
        resultArray[index] = [array1[index], array2[index]]
    }

    return resultArray
}

export default and