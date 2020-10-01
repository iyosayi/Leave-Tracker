"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAll = exports.addUser = void 0;

var _addUser = _interopRequireDefault(require("./add-user"));

var _fetchAll = _interopRequireDefault(require("./fetch-all"));

var _models = _interopRequireDefault(require("../models/"));

var _models2 = _interopRequireDefault(require("../../leaves/models"));

var _gravatar = _interopRequireDefault(require("gravatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addUser = (0, _addUser.default)({
  usersDb: _models.default,
  gravatar: _gravatar.default
});
exports.addUser = addUser;
const fetchAll = (0, _fetchAll.default)({
  usersDb: _models.default,
  leaveDb: _models2.default
});
exports.fetchAll = fetchAll;