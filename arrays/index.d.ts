export function and<T, V>(array1: Array<T>, array2: Array<V>): Array<[T, V]>
export function first<T>(array: Array<T>, filter: (el: T) => boolean): T | null
export function indexOf<T>(array: Array<T>, filter: (el: T) => boolean): number
export function isDifferent<T>(array1: Array<T>, array2: Array<T>, predicate: (el1: T, el2: T) => boolean): boolean
export function isInclude<T>(array: Array<T>, selector: T | ((el: T) => boolean)): boolean
export function mergeUnique<T>(array1: Array<T>, array2: Array<T>, filter: (el1: T, el2: T) => boolean): Array<T>