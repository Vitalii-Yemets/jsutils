export interface ReplaceOption {
    regex: RegExp | string,
    fn: (key: string | number | any, result: string) => string
}

export function replace(options: Array<ReplaceOption>): (input: string) => string