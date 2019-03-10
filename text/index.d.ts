export interface ReplaceOption {
    regex: RegExp | string,
    fn: (key: string | number | any, result: string) => string
}
export function replace(options: Array<ReplaceOption>): (input: string) => string
export function rtrim(str: string, chars: string): string
export function ltrim(str: string, chars: string): string
export function trim(str: string, chars: string): string