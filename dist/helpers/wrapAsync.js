"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _httpResponse = require("./http-response");

var _errors = require("./errors");

const wrapAsync = fn => (req, res, ...params) => fn(req, res, ...params).catch(error => {
  return (0, _httpResponse.makeHttpError)({
    title: error.name,
    stack: error.stack,
    errorMessage: error.message,
    statusCode: error instanceof _errors.InvalidPropertyError ? 401 : error.statusCode || error instanceof _errors.UniqueConstraintError ? 409 : error.statusCode || error instanceof _errors.UnauthorizedError ? 401 : error.statusCode || error instanceof _errors.DatabaseError ? 503 : error.statusCode
  });
});

var _default = wrapAsync;
exports.default = _default;