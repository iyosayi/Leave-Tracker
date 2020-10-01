"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = exports.postUser = void 0;

var _postUser = _interopRequireDefault(require("./post-user"));

var _getUsers = _interopRequireDefault(require("./get-users"));

var _useCases = require("../use-cases");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const postUser = (0, _postUser.default)({
  addUser: _useCases.addUser
});
exports.postUser = postUser;
const getUsers = (0, _getUsers.default)({
  fetchAll: _useCases.fetchAll
});
exports.getUsers = getUsers;