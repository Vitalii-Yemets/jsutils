import first from './src/first'
import includes from './src/includes'
import indexOf from './src/indexOf'
import replacer from './src/replacer'
import { ltrim, rtrim, trim } from './src/trim'

import fromUtf8 from './src/convertors/fromUtf8'
import toBytes from './src/convertors/toBytes'
import toDate from './src/convertors/toDate'
import toUtf8 from './src/convertors/toUtf8'

import isEmpty from './src/validators/isEmpty'
import isJson from './src/validators/isJson'
import isLength from './src/validators/isLength'
import isWalletAddress from './src/validators/isWalletAddress'
import { StringValidator } from './src/validators/string'


export default {
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