import isEmpty from './isEmpty'
import isLength from './isLength'

const ValidationMethods = {
    REQUIRED: 'required',
    LENGTH: 'length',
    REGEXP: 'regexp',
}

export default class StringValidator {
    constructor() {
        this.rules = {}
        this.errors = {}
    }

    static create() {
        return new StringValidator()
    }

    required() {
        this.rules = {
            ...this.rules,
            [ValidationMethods.REQUIRED]: true
        }
        return this
    }

    //Example
    // const options = { min, max }
    //
    length(options) {
        this.rules = {
            ...this.rules,
            [ValidationMethods.LENGTH]: options
        }
        return this
    }

    //Example
    // const options = { pattern: /<pattern>/, flags = 'ig' }
    //
    regexp(options) {
        this.rules = {
            ...this.rules,
            [ValidationMethods.REGEXP]: {
                pattern: options.pattern,
                flags: options.flags
            }
        }
        return this
    }

    _requiredValidation(value) {
        if (isEmpty(value)) {
            this.errors = { ...this.errors, requiredError: true }
        } else if (Reflect.has(this.errors, 'requiredError')) {
            delete this.errors.requiredError
        }
    }

    _lengthValidation(value) {
        if (Reflect.has(this.rules, 'length')) {
            if (isLength(value, this.rules.length)) {
                this.errors = { ...this.errors, lengthError: true }
            } else if (Reflect.has(this.errors, 'lengthError')) {
                delete this.errors.lengthError
            }
        }
    }

    _regexpValidation(value) {
        if (Reflect.has(this.rules, 'regexp')) {
            const { pattern, flags = '' } = this.rules.regexp
            const regexp = new RegExp(pattern, flags)

            if (!regexp.test(value)) {
                this.errors = { ...this.errors, regexpError: true }
            } else if (Reflect.has(this.errors, 'regexpError')) {
                delete this.errors.regexpError
            }
        }
    }

    validation(value) {
        Object.keys(this.rules).forEach(rule => {
            switch (rule) {
                case ValidationMethods.REQUIRED: { this._requiredValidation(value); break }
                case ValidationMethods.LENGTH: { this._lengthValidation(value); break }
                case ValidationMethods.REGEXP: { this._regexpValidation(value); break }
                default: break
            }
        })

        return this.errors
    }
}