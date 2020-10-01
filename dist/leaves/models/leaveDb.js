"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _leaveModel = _interopRequireDefault(require("./leaveModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makeLeaveDb = () => {
  async function insert({ ...details
  }) {
    const leave = new _leaveModel.default({ ...details
    });
    await leave.save();
    return {
      leave
    };
  }

  async function findAll() {
    return _leaveModel.default.find();
  }

  async function findByType({
    type
  }) {
    return _leaveModel.default.findOne({
      type
    });
  }

  return Object.freeze({
    insert,
    findAll,
    findByType
  });
};

var _default = makeLeaveDb;
exports.default = _default;