"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _userDb = _interopRequireDefault(require("./userDb"));

var _utils = _interopRequireDefault(require("../../validations/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createToken = _utils.default.createToken;
const hashPassword = _utils.default.hashPassword;
const usersDb = (0, _userDb.default)({
  createToken,
  hashPassword
});
var _default = usersDb;
exports.default = _default;