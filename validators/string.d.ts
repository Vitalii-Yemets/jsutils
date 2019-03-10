export interface ValidationErrors {
    requiredError: boolean
    lengthError: boolean
    regexpError: boolean
}

declare class StringValidator {
    public static create(): StringValidator
    public required(): StringValidator
    public length(options: { min: number, max: number }): StringValidator
    public regexp(options: { pattern: regexp | string, flags: string }): StringValidator
    public validation(value: string): ValidationErrors
}


