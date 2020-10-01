"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = exports.postLogin = void 0;

var _postLogin = _interopRequireDefault(require("./post-login"));

var _getLoggedUser = _interopRequireDefault(require("./getLoggedUser"));

var _useCases = require("../use-cases");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const postLogin = (0, _postLogin.default)({
  loginUser: _useCases.loginUser
});
exports.postLogin = postLogin;
const getUsers = (0, _getLoggedUser.default)({
  listUser: _useCases.listUser
});
exports.getUsers = getUsers;