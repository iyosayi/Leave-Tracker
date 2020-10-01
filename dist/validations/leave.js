"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const validator = require('validator');

const isEmpty = require('./is-Empty');

const validateLeaveInput = ({ ...details
}) => {
  const errors = {};
  details.type = !isEmpty(details.type) ? details.type : '';
  details.start = !isEmpty(details.start) ? details.start : '';
  details.end = !isEmpty(details.end) ? details.end : '';

  if (validator.isEmpty(details.type)) {
    errors.type = 'Leave type is  Required';
  }

  if (validator.isEmpty(details.start)) {
    errors.start = 'Leave start date is Required';
  }

  if (validator.isEmpty(details.end)) {
    errors.end = 'Leave end date is Required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

var _default = validateLeaveInput;
exports.default = _default;