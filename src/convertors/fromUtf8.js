const fromUtf8 = str => Buffer.from(str, 'hex').toString('utf8')

export default fromUtf8