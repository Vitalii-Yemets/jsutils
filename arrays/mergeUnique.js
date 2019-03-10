import indexOf from './indexOf'

const mergeUnique = (array1, array2, filter) => array1.concat(array2.filter(el2 => indexOf(array1, el1 => filter(el1, el2)) === -1))

export default mergeUnique