import first from './src/arrays/first'
import indexOf from './src/arrays/indexOf'
import and from './src/arrays/and'
import mergeUnique from './src/arrays/mergeUnique'
import isDifferent from './src/arrays/isDifferent'
import isIncludes from './src/arrays/isIncludes'

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
        isIncludes,
        indexOf,
        and,
        mergeUnique,
        isDifferent
    },
    text: {
        replacer,
        ltrim,
        rtrim,
        trim
    }
}