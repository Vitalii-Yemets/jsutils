module.exports.isLength = (str, options) => {
    let min, max

    const hasMinMaxProps = options =>
        Object.prototype.hasOwnProperty.call(options, 'min')
        && Object.prototype.hasOwnProperty.call(options, 'max')

    if (typeof options === 'object' && hasMinMaxProps(options)) {
        min = options.min || 0
        max = options.max
    }

    const surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || []
    const len = str.length - surrogatePairs.length
    return len >= min && (typeof max === 'undefined' || len <= max)
}