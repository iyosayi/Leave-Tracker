const validator = require('validator');
const isEmpty = require('./is-Empty');

module.exports = function ValidateLoginInput(data) {
    let errors = {};
console.log(data)
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if (validator.isEmpty(data.password)) {
        errors.password = 'Password is Required'
    }
    if (!validator.isEmail(data.email)) {
        errors.email = 'Email is Invalid'
    }
    if (validator.isEmpty(data.email)) {
        errors.email = 'Email field is Required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}