export interface ReplaceOption {
    regex: RegExp | string,
    fn: (key: string | number | any, result: string) => string
}
export declare function replace(options: Array<ReplaceOption>): (input: string) => string
export declare function rtrim(str: string, chars: string): string
export declare function ltrim(str: string, chars: string): string
export declare function trim(str: string, chars: string): string