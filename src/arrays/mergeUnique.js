import indexOf from './src/arrays/indexOf'

const mergeUnique = (arr1, arr2, filterCallback) => arr1.concat(arr2.filter(el2 => indexOf(arr1, el1 => filterCallback(el1, el2)) === -1))

export default mergeUnique