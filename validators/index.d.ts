export interface IsEmptyCompareOptions {
    ignoreWhitespase: boolean
}
export function isEmpty(str: string, options?: IsEmptyCompareOptions): boolean

export function isJson(str: string): boolean

export interface IsLengthCompareOptions {
    min: number
    max: number
}
export function isLength(str: string, options: IsLengthCompareOptions): boolean

export interface ValidationErrors {
    requiredError: boolean
    lengthError: boolean
    regexpError: boolean
}
export declare class StringValidator {
    public static create(): StringValidator
    public required(): StringValidator
    public length(options: { min: number, max: number }): StringValidator
    public regexp(options: { pattern: RegExp | string, flags: string }): StringValidator
    public validation(value: string): ValidationErrors
}


