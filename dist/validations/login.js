"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const validator = require('validator');

const isEmpty = require('./is-Empty');

const validateLoginInput = ({ ...details
}) => {
  const errors = {};
  details.email = !isEmpty(details.email) ? details.email : '';
  details.password = !isEmpty(details.password) ? details.password : '';

  if (validator.isEmpty(details.password)) {
    errors.password = 'Password is Required';
  }

  if (!validator.isEmail(details.email)) {
    errors.email = 'Email is Invalid';
  }

  if (validator.isEmpty(details.email)) {
    errors.email = 'Email field is Required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

var _default = validateLoginInput;
exports.default = _default;