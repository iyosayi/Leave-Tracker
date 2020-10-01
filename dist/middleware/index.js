"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _keys = require("../config/keys");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _errors = require("../helpers/errors");

var _wrapAsync = _interopRequireDefault(require("../helpers/wrapAsync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const decodeToken = controller => {
  return (0, _wrapAsync.default)(async httpRequest => {
    const token = httpRequest.headers['x-auth-token'];

    if (!token) {
      throw new _errors.UnauthorizedError('No token, authorization denied.');
    }

    const decoded = _jsonwebtoken.default.verify(token, _keys.JWT_SECRET);

    if (!decoded) {
      throw new _errors.InvalidPropertyError('No User with this token exists.');
    }

    httpRequest.user = decoded;
    return controller(httpRequest);
  });
};

var _default = decodeToken;
exports.default = _default;