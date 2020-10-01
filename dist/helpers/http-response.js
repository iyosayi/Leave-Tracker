"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.makeHttpError = void 0;

const makeHttpError = ({
  statusCode,
  title,
  errorMessage,
  stack
}) => {
  const toReturn = {
    errors: [{
      title,
      error: errorMessage,
      stack
    }]
  };
  return {
    headers: {
      'Content-Type': 'application/vnd.api+json'
    },
    statusCode,
    data: JSON.stringify(toReturn)
  };
};

exports.makeHttpError = makeHttpError;

var _default = ({
  status,
  statusCode,
  message,
  data
}) => {
  const toReturn = {
    status,
    message,
    data
  };
  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    statusCode,
    data: JSON.stringify(toReturn)
  };
};

exports.default = _default;