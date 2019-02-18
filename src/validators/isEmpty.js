const isEmpty = (str, options = { ignoreWhitespase: true }) => (options.ignoreWhitespase ? str.trim().length : str.length) === 0

export default isEmpty