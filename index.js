import first from './src/arrays/first'
import includes from './src/arrays/includes'
import indexOf from './src/arrays/indexOf'
import and from './src/arrays/and'
import mergeUnique from './src/arrays/mergeUnique' 

import replacer from './src/text/replacer'
import { ltrim, rtrim, trim } from './src/text/trim'

import fromUtf8 from './src/convertors/fromUtf8'
import toBytes from './src/convertors/toBytes'
import toDate from './src/convertors/toDate'
import toUtf8 from './src/convertors/toUtf8'

import isEmpty from './src/validators/isEmpty'
import isJson from './src/validators/isJson'
import isLength from './src/validators/isLength'
import isWalletAddress from './src/validators/isWalletAddress'
import StringValidator from './src/validators/string'


export const jsutils = {
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
    arrays: {
        first,
        includes,
        indexOf,
        and,
        mergeUnique
    },
    text: {
        replacer,
        ltrim,
        rtrim,
        trim
    }
}