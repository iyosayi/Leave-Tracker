"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _keys = require("../config/keys");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const utils = function () {
  function hashPassword(password) {
    return _bcryptjs.default.hash(password, 10);
  }

  function validatePassword(password1, password2) {
    return _bcryptjs.default.compare(password1, password2);
  }

  function createToken(payload) {
    return _jsonwebtoken.default.sign(payload, _keys.JWT_SECRET, {
      expiresIn: '2d'
    });
  }

  function sendToken(payload) {
    const token = createToken(payload);
    return JSON.stringify({
      status: 'OK',
      token
    });
  }

  return {
    hashPassword,
    validatePassword,
    createToken,
    sendToken
  };
}();

var _default = utils;
exports.default = _default;