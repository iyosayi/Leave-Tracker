"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const validator = require('validator');

const isEmpty = require('./is-Empty');

const validateRegisterInput = ({ ...details
}) => {
  const errors = {};
  details.name = !isEmpty(details.name) ? details.name : '';
  details.email = !isEmpty(details.email) ? details.email : '';
  details.password = !isEmpty(details.password) ? details.password : '';
  details.password2 = !isEmpty(details.password2) ? details.password2 : '';

  if (!validator.isLength(details.name, {
    min: 2,
    max: 30
  })) {
    errors.name = 'Name must be greater then 2 and less then 30';
  }

  if (validator.isEmpty(details.name)) {
    errors.name = 'Name field is Required';
  }

  if (validator.isEmpty(details.password)) {
    errors.password = 'Password is Required';
  }

  if (!validator.isEmail(details.email)) {
    errors.email = 'Email is Invalid';
  }

  if (validator.isEmpty(details.email)) {
    errors.email = 'Email field is Required';
  }

  if (!validator.equals(details.password2, details.password2)) {
    errors.password2 = 'Password must match';
  }

  if (validator.isEmpty(details.password2)) {
    errors.password2 = 'Confirm Password  Field is Required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

var _default = validateRegisterInput;
exports.default = _default;