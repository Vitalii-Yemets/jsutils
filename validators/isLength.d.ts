export interface IsLengthCompareOptions {
    min: number
    max: number
}

export function isLength(str: string, options: IsLengthCompareOptions): boolean