// Example
// const options = [{
//     regex: /(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |,|$|\.)/gim,
//     fn: (key, result) => <span key={key}>
//         <a target="_blank" href={`${result[1]}://${result[2]}.${result[3]}${result[4]}`}>{result[2]}.{result[3]}{result[4]}</a>{result[5]}
//     </span>
// }, {
//     regex: /(\S+)\.([a-z]{2,}?)(.*?)( |,|$|\.)/gim,
//     fn: (key, result) => <span key={key}>
//         <a target="_blank" href={`http://${result[1]}.${result[2]}${result[3]}`}>{result[1]}.{result[2]}{result[3]}</a>{result[4]}
//     </span>
// }]

module.exports.replacer = options => {
    let key = 0

    const withRegex = (option, input) => {
        if (!option.fn || typeof option.fn !== 'function') return input

        if (!option.regex || !(option.regex instanceof RegExp)) return input

        if (typeof input === 'string') {
            const regex = option.regex
            const output = []
            let result = null

            while ((result = regex.exec(input)) !== null) {
                const index = result.index;
                const match = result[0]

                output.push(input.substring(0, index))
                output.push(option.fn(++key, result))

                input = input.substring(index + match.length, input.length + 1)
                regex.lastIndex = 0
            }

            output.push(input)
            return output
        } else if (Array.isArray(input)) {
            return input.map(chunk => withRegex(option, chunk))
        } else return input
    }

    return input => {
        if (!options || !Array.isArray(options) || !options.length) {
            return input
        }

        options.forEach(option => input = withRegex(option, input))

        return input
    }
}