"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLeaves = exports.postLeave = void 0;

var _postLeave = _interopRequireDefault(require("./post-leave"));

var _getLeaves = _interopRequireDefault(require("./get-leaves"));

var _useCases = require("../use-cases");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const postLeave = (0, _postLeave.default)({
  addLeave: _useCases.addLeave
});
exports.postLeave = postLeave;
const getLeaves = (0, _getLeaves.default)({
  listLeave: _useCases.listLeave
});
exports.getLeaves = getLeaves;