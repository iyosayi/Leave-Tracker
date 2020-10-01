const validator = require('validator');
const isEmpty = require('./is-Empty')

module.exports = function ValidateRegisterInput(data) {
    let errors = {};
    console.log(data)
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    if (!validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be greater then 2 and less then 30'
    }
    if (validator.isEmpty(data.name)) {
        errors.name = 'Name field is Required'
    }
    if (validator.isEmpty(data.password)) {
        errors.password = 'Password is Required'
    }
    if(!validator.isEmail(data.email)){
        errors.email = 'Email is Invalid'
    }
    if (validator.isEmpty(data.email)) {
        errors.email = 'Email field is Required'
    }
    if(!validator.equals(data.password2,data.password2)){
        errors.password2 = 'Password must match'
    }
    if(validator.isEmpty(data.password2)){
        errors.password2 = 'Confirm Password  Field is Required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}