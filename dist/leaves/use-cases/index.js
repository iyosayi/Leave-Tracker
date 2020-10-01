"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listLeave = exports.addLeave = void 0;

var _listLeaves = _interopRequireDefault(require("./list-leaves"));

var _addLeave = _interopRequireDefault(require("./add-leave"));

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addLeave = (0, _addLeave.default)({
  leaveDb: _models.default
});
exports.addLeave = addLeave;
const listLeave = (0, _listLeaves.default)({
  leaveDb: _models.default
});
exports.listLeave = listLeave;