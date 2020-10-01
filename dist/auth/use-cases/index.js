"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listUser = exports.loginUser = void 0;

var _login = _interopRequireDefault(require("./login"));

var _getUser = _interopRequireDefault(require("./get-user"));

var _utils = _interopRequireDefault(require("../../validations/utils"));

var _models = _interopRequireDefault(require("../../users/models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sendToken = _utils.default.sendToken;
const validatePassword = _utils.default.validatePassword;
const loginUser = (0, _login.default)({
  usersDb: _models.default,
  validatePassword,
  sendToken
});
exports.loginUser = loginUser;
const listUser = (0, _getUser.default)({
  usersDb: _models.default
});
exports.listUser = listUser;