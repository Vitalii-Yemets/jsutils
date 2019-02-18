// import first from './src/first'
// import includes from './src/includes'
// import indexOf from './src/indexOf'
// import replacer from './src/replacer'
// import { ltrim, rtrim, trim } from './src/trim'
const first = require('./src/first')
const includes = require('./src/includes')
const indexOf = require('./src/indexOf')
const replacer = require('./src/replacer')
const { ltrim, rtrim, trim } = require('./src/trim')

// import fromUtf8 from './src/convertors/fromUtf8'
// import toBytes from './src/convertors/toBytes'
// import toDate from './src/convertors/toDate'
// import toUtf8 from './src/convertors/toUtf8'
const fromUtf8 = require('./src/convertors/fromUtf8')
const toBytes = require('./src/convertors/toBytes')
const toDate = require('./src/convertors/toDate')
const toUtf8 = require('./src/convertors/toUtf8')

// import isEmpty from './src/validators/isEmpty'
// import isJson from './src/validators/isJson'
// import isLength from './src/validators/isLength'
// import isWalletAddress from './src/validators/isWalletAddress'
// import StringValidator from './src/validators/string'
const isEmpty = require('./src/validators/isEmpty')
const isJson = require('./src/validators/isJson')
const isLength = require('./src/validators/isLength')
const isWalletAddress = require('./src/validators/isWalletAddress')
const StringValidator = require('./src/validators/StringValidator')

// export default {
//     convertors: {
//         fromUtf8,
//         toBytes,
//         toDate,
//         toUtf8
//     },
//     validators: {
//         isEmpty,
//         isJson,
//         isLength,
//         isWalletAddress,
//         StringValidator
//     },
//     utils: {
//         first,
//         includes,
//         indexOf,
//         replacer,
//         ltrim,
//         rtrim,
//         trim
//     }
// }
module.exports = {
    convertors: {
        fromUtf8,
        toBytes,
        toDate,
        toUtf8
    },
    validators: {
        isEmpty,
        isJson,
        isLength,
        isWalletAddress,
        StringValidator
    },
    utils: {
        first,
        includes,
        indexOf,
        replacer,
        ltrim,
        rtrim,
        trim
    }
}