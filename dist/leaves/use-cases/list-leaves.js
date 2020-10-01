"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const makeListLeaves = ({
  leaveDb
}) => {
  return async function listLeaves() {
    return leaveDb.findAll();
  };
};

var _default = makeListLeaves;
exports.default = _default;