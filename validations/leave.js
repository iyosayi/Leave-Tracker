const validator = require('validator');
const isEmpty = require('./is-Empty');

module.exports = ValidateLeaveInput = data => {
    let errors = {};
    data.type = !isEmpty(data.type) ? data.type : '';
    data.start = !isEmpty(data.start) ? data.start : '';
    data.end = !isEmpty(data.end) ? data.end : '';

    if (validator.isEmpty(data.type)) {
        errors.type = 'Leave type is  Required';
    }
    if (validator.isEmpty(data.start)) {
        errors.start = 'Leave start date is Required';
    }
    if (validator.isEmpty(data.end)) {
        errors.end = 'Leave end date is Required'
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}